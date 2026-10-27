import { useState, useRef, useEffect, useCallback } from 'react';

export interface AudioRecorderState {
  isRecording: boolean;
  audioUrl: string | null;
  recordingTime: number;
  isPlayingRecording: boolean;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  playRecording: () => void;
  stopPlayback: () => void;
  clearRecording: () => void;
}

export function useAudioRecorder(): AudioRecorderState {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const playbackAudioRef = useRef<HTMLAudioElement | null>(null);

  // Clean up Object URL on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (playbackAudioRef.current) {
        playbackAudioRef.current.pause();
      }
    };
  }, [audioUrl]);

  const startRecording = useCallback(async () => {
    setError(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    audioChunksRef.current = [];
    setRecordingTime(0);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('Trình duyệt không hỗ trợ thu âm micro.');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);

        // Stop all tracks to release mic
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(100);
      setIsRecording(true);

      timerRef.current = window.setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 20) {
            // Auto cap at 20 seconds for words/phrases
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
              mediaRecorderRef.current.stop();
            }
            setIsRecording(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 20;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Không thể truy cập microphone.';
      setError(`Không thể mở micro: ${message}. Vui lòng cấp quyền micro trong trình duyệt.`);
      setIsRecording(false);
    }
  }, [audioUrl]);

  const stopRecording = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  const playRecording = useCallback(() => {
    if (!audioUrl) return;

    if (playbackAudioRef.current) {
      playbackAudioRef.current.pause();
    }

    const audio = new Audio(audioUrl);
    playbackAudioRef.current = audio;

    setIsPlayingRecording(true);
    audio.onended = () => {
      setIsPlayingRecording(false);
    };
    audio.onerror = () => {
      setIsPlayingRecording(false);
    };
    audio.play().catch(() => {
      setIsPlayingRecording(false);
    });
  }, [audioUrl]);

  const stopPlayback = useCallback(() => {
    if (playbackAudioRef.current) {
      playbackAudioRef.current.pause();
      playbackAudioRef.current.currentTime = 0;
    }
    setIsPlayingRecording(false);
  }, []);

  const clearRecording = useCallback(() => {
    stopPlayback();
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setRecordingTime(0);
    setError(null);
  }, [audioUrl, stopPlayback]);

  return {
    isRecording,
    audioUrl,
    recordingTime,
    isPlayingRecording,
    error,
    startRecording,
    stopRecording,
    playRecording,
    stopPlayback,
    clearRecording
  };
}
