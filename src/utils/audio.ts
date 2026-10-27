/**
 * Audio playback helper for Vietnamese pronunciation.
 * Priority:
 * 1. Optional direct audio mp3 URL (if supplied and valid)
 * 2. Fallback to browser window.speechSynthesis with lang "vi-VN"
 * Never autoplays; only triggers on explicit user tap.
 */

let activeAudioElement: HTMLAudioElement | null = null;

export function stopAnyAudio(): void {
  if (activeAudioElement) {
    activeAudioElement.pause();
    activeAudioElement.currentTime = 0;
    activeAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function playVietnameseAudio(
  text: string,
  audioUrl?: string,
  onEnd?: () => void,
  rate = 0.85
): void {
  stopAnyAudio();

  // Try direct audio url first if provided
  if (audioUrl) {
    try {
      const audio = new Audio(audioUrl);
      activeAudioElement = audio;
      audio.onended = () => {
        activeAudioElement = null;
        if (onEnd) onEnd();
      };
      audio.onerror = () => {
        activeAudioElement = null;
        // Fall back to speechSynthesis if direct audio fails
        speakText(text, onEnd, rate);
      };
      audio.play().catch(() => {
        speakText(text, onEnd, rate);
      });
      return;
    } catch {
      speakText(text, onEnd, rate);
      return;
    }
  }

  // Fallback to Web Speech API
  speakText(text, onEnd, rate);
}

function speakText(text: string, onEnd?: () => void, rate = 0.85): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis is not supported in this browser.');
    if (onEnd) onEnd();
    return;
  }

  // Clean text of parenthetical notes like "(Bắc: ...)"
  const cleanText = text.replace(/\([^)]*\)/g, '').trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'vi-VN';
  utterance.rate = rate; // slightly slower for clear tone perception
  utterance.pitch = 1.0;

  // Attempt to select a Vietnamese voice if available
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang === 'vi-VN' || v.lang.startsWith('vi'));
  if (viVoice) {
    utterance.voice = viVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}
