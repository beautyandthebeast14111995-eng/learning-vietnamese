import React from 'react';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import { Mic, Square, Play, RefreshCw, Volume2, AlertCircle } from 'lucide-react';

interface PronunciationRecorderProps {
  modelText: string;
  modelAudioUrl?: string;
  compact?: boolean;
}

export const PronunciationRecorder: React.FC<PronunciationRecorderProps> = ({
  modelText,
  modelAudioUrl,
  compact = false
}) => {
  const {
    isRecording,
    audioUrl: userAudioUrl,
    recordingTime,
    isPlayingRecording,
    error,
    startRecording,
    stopRecording,
    playRecording,
    stopPlayback,
    clearRecording
  } = useAudioRecorder();

  const [isPlayingModel, setIsPlayingModel] = React.useState(false);

  const handlePlayModel = () => {
    if (isPlayingRecording) {
      stopPlayback();
    }
    setIsPlayingModel(true);
    playVietnameseAudio(modelText, modelAudioUrl, () => {
      setIsPlayingModel(false);
    });
  };

  const handlePlayUser = () => {
    stopAnyAudio();
    playRecording();
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {!isRecording ? (
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors border border-rose-200"
            title="Thu âm giọng của bạn"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Thu âm</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={stopRecording}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 text-white animate-pulse"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>Dừng ({recordingTime}s)</span>
          </button>
        )}

        {userAudioUrl && !isRecording && (
          <button
            type="button"
            onClick={isPlayingRecording ? stopPlayback : handlePlayUser}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              isPlayingRecording
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlayingRecording ? 'Đang phát...' : 'Nghe lại'}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
            🎙️
          </span>
          <span className="text-xs font-semibold text-amber-950">
            Luyện nói & So sánh giọng (Record & Compare)
          </span>
        </div>
        <span className="text-[11px] text-amber-800 font-medium">Lưu tại trình duyệt</span>
      </div>

      {error && (
        <div className="mb-3 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {/* Step 1: Model Audio */}
        <div className="p-3 rounded-xl bg-white border border-amber-200/60 shadow-xs flex flex-col items-center text-center">
          <span className="text-[11px] text-slate-500 font-medium mb-1.5">1. Giọng mẫu / Native Model</span>
          <button
            type="button"
            onClick={handlePlayModel}
            disabled={isPlayingModel}
            className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              isPlayingModel
                ? 'bg-amber-500 text-white shadow-xs scale-98'
                : 'bg-amber-100 hover:bg-amber-200 text-amber-950 active:scale-98'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isPlayingModel ? 'animate-bounce' : ''}`} />
            <span>{isPlayingModel ? 'Đang đọc...' : 'Nghe mẫu / Listen'}</span>
          </button>
        </div>

        {/* Step 2: Record User Audio */}
        <div className="p-3 rounded-xl bg-white border border-amber-200/60 shadow-xs flex flex-col items-center text-center">
          <span className="text-[11px] text-slate-500 font-medium mb-1.5">2. Giọng của bạn / Your Voice</span>
          {!isRecording ? (
            <button
              type="button"
              onClick={startRecording}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 active:scale-98 text-white flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Mic className="w-4 h-4" />
              <span>Bấm thu âm / Record</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-red-600 text-white flex items-center justify-center gap-2 animate-pulse"
            >
              <Square className="w-4 h-4 fill-current" />
              <span>Dừng / Stop ({recordingTime}s)</span>
            </button>
          )}
        </div>
      </div>

      {/* User Recording Playback & Compare Bar */}
      {userAudioUrl && !isRecording && (
        <div className="mt-3 p-3 rounded-xl bg-white border border-emerald-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-700 truncate">
              Đã thu xong / Recorded ({recordingTime}s)
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={isPlayingRecording ? stopPlayback : handlePlayUser}
              className={`py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isPlayingRecording
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-950'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlayingRecording ? 'Đang phát...' : 'Nghe lại / Playback'}</span>
            </button>

            <button
              type="button"
              onClick={clearRecording}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              title="Thu âm lại / Re-record"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
