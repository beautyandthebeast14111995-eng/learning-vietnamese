import React, { useState, useEffect, useRef } from 'react';
import { Lesson, DialogueLine } from '../types';
import { useApp } from '../context/AppContext';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import { PronunciationRecorder } from './PronunciationRecorder';
import confetti from 'canvas-confetti';
import {
  MessageSquare,
  Volume2,
  Play,
  Square,
  Sparkles,
  Users,
  MapPin,
  HelpCircle,
  Mic,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Gauge
} from 'lucide-react';

interface DialogueTabProps {
  lesson: Lesson;
}

export const DialogueTab: React.FC<DialogueTabProps> = ({ lesson }) => {
  const { addPoints } = useApp();
  const dialogue = lesson.dialogue;

  const [activeSpeakingLineId, setActiveSpeakingLineId] = useState<string | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('all');
  const [showEnglish, setShowEnglish] = useState(true);
  const [isSlowSpeed, setIsSlowSpeed] = useState(true); // Default to slow for foreigners!
  const [activeRecorderLineId, setActiveRecorderLineId] = useState<string | null>(null);
  const [practicedLines, setPracticedLines] = useState<string[]>([]);
  const [isCompletedAwarded, setIsCompletedAwarded] = useState(false);

  const playQueueIndexRef = useRef<number>(0);
  const isPlayingAllRef = useRef<boolean>(false);

  const currentRate = isSlowSpeed ? 0.72 : 0.9;

  useEffect(() => {
    return () => {
      stopAnyAudio();
      isPlayingAllRef.current = false;
    };
  }, [lesson.id]);

  if (!dialogue) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-pink-200">
        <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-2" />
        <p className="text-sm font-semibold text-slate-600">
          Chưa có đoạn hội thoại cho bài học này.
        </p>
      </div>
    );
  }

  // Play entire conversation sequentially
  const handlePlayAll = () => {
    stopAnyAudio();
    if (isPlayingAll) {
      setIsPlayingAll(false);
      isPlayingAllRef.current = false;
      setActiveSpeakingLineId(null);
      return;
    }

    setIsPlayingAll(true);
    isPlayingAllRef.current = true;
    playQueueIndexRef.current = 0;

    const playNext = (index: number) => {
      if (!isPlayingAllRef.current || index >= dialogue.lines.length) {
        setIsPlayingAll(false);
        isPlayingAllRef.current = false;
        setActiveSpeakingLineId(null);

        if (!isCompletedAwarded) {
          setIsCompletedAwarded(true);
          addPoints(30);
          try {
            confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
          } catch {}
        }
        return;
      }

      const line = dialogue.lines[index];
      setActiveSpeakingLineId(line.id);

      playVietnameseAudio(line.textVi, line.audioUrl, () => {
        // 800ms natural pause between short sentences
        setTimeout(() => {
          if (isPlayingAllRef.current) {
            playNext(index + 1);
          }
        }, 800);
      }, currentRate);
    };

    playNext(0);
  };

  const handlePlaySingleLine = (line: DialogueLine) => {
    stopAnyAudio();
    setActiveSpeakingLineId(line.id);
    playVietnameseAudio(line.textVi, line.audioUrl, () => {
      setActiveSpeakingLineId(null);
    }, currentRate);

    if (!practicedLines.includes(line.id)) {
      setPracticedLines((prev) => [...prev, line.id]);
      addPoints(5);
    }
  };

  const toggleRecorder = (lineId: string) => {
    setActiveRecorderLineId((prev) => (prev === lineId ? null : lineId));
  };

  return (
    <div className="space-y-6">
      {/* Dialogue Header Card */}
      <div className="bg-white/95 rounded-4xl p-5 sm:p-6 border-2 border-pink-200/90 shadow-cute space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-0.5 rounded-full border border-rose-200">
                Hội Thoại Ngắn / Short & Easy Dialogue
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {dialogue.lines.length} câu ngắn / sentences
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
              {dialogue.titleVi}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
              {dialogue.titleEn}
            </p>
          </div>

          {/* Action Buttons: Play All + Speed + English Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Speed Toggle */}
            <button
              type="button"
              onClick={() => setIsSlowSpeed(!isSlowSpeed)}
              className={`px-3 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 border-2 ${
                isSlowSpeed
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              title="Đổi tốc độ đọc / Toggle reading speed"
            >
              <span>{isSlowSpeed ? '🐢 Đọc chậm / Slow (0.75x)' : '🐰 Tự nhiên / Normal (1.0x)'}</span>
            </button>

            {/* English Toggle */}
            <button
              type="button"
              onClick={() => setShowEnglish(!showEnglish)}
              className={`px-3 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 border-2 ${
                showEnglish
                  ? 'bg-sky-100 border-sky-300 text-sky-900'
                  : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}
              title="Bật/Tắt bản dịch tiếng Anh / Toggle English translations"
            >
              {showEnglish ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showEnglish ? 'Hiện tiếng Anh / Show EN' : 'Ẩn tiếng Anh / Hide EN'}</span>
            </button>

            {/* Play All Button */}
            <button
              type="button"
              onClick={handlePlayAll}
              className={`px-4 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all shadow-cute active:scale-95 cursor-pointer ${
                isPlayingAll
                  ? 'bg-rose-500 hover:bg-rose-600 text-white'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-95 text-white'
              }`}
            >
              {isPlayingAll ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Dừng nghe / Stop</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Nghe Toàn Bộ / Play All</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scene Context & Cultural Takeaway */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-3xl bg-pink-50/60 border-2 border-pink-100 space-y-1">
            <div className="flex items-center gap-1.5 font-black text-rose-800">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Bối cảnh / Setting: {dialogue.landmarkVi}</span>
            </div>
            <p className="text-slate-600 font-medium pl-5 text-[11px]">
              {dialogue.contextVi}
            </p>
          </div>

          <div className="p-3.5 rounded-3xl bg-amber-50/60 border-2 border-amber-100 space-y-1">
            <div className="flex items-center gap-1.5 font-black text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Nét đẹp văn hóa / Cultural Takeaway:</span>
            </div>
            <p className="text-slate-600 font-medium pl-5 text-[11px]">
              {dialogue.culturalTakeawayVi}
            </p>
          </div>
        </div>

        {/* Role Selector / Filter */}
        <div className="pt-2 border-t border-pink-100 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-black text-slate-700">Đóng vai luyện nói / Roleplay:</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedRoleFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedRoleFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cả bài / All Roles
            </button>
            {dialogue.roles.map((role) => {
              const isSelected = selectedRoleFilter === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleFilter(role.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-pink-500 text-white shadow-xs'
                      : 'bg-pink-50 text-pink-800 hover:bg-pink-100'
                  }`}
                >
                  <span>{role.avatar}</span>
                  <span>{role.nameVi} <span className="opacity-75 font-normal">({role.nameEn})</span></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Short & Cute Dialogue Speech Bubbles */}
      <div className="space-y-4">
        {dialogue.lines.map((line, idx) => {
          const isSpeaking = activeSpeakingLineId === line.id;
          const isUserRole = selectedRoleFilter === line.speakerId;
          const isFaded = selectedRoleFilter !== 'all' && !isUserRole;
          const hasRecorderOpen = activeRecorderLineId === line.id;
          const isLearnerSpeaking = line.speakerVi.includes('Bé') || line.speakerVi.includes('Bạn') || line.speakerVi.includes('Người');

          return (
            <div
              key={line.id}
              className={`p-4 sm:p-5 rounded-4xl border-2 transition-all space-y-3 ${
                isSpeaking
                  ? 'bg-amber-50/90 border-amber-400 shadow-md ring-2 ring-amber-300 scale-101'
                  : isUserRole
                  ? 'bg-rose-50/70 border-rose-300 shadow-cute'
                  : isLearnerSpeaking
                  ? 'bg-gradient-to-r from-pink-50/70 to-rose-50/50 border-pink-200'
                  : 'bg-white border-pink-100 hover:border-pink-200'
              } ${isFaded ? 'opacity-35 hover:opacity-100' : 'opacity-100'}`}
            >
              {/* Speaker Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl p-2 rounded-2xl bg-white border-2 border-pink-100 shadow-xs shrink-0">
                    {line.avatar}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-800 text-sm sm:text-base">
                        {line.speakerVi}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        ({line.speakerEn})
                      </span>
                      {isUserRole && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                          Lượt của bạn / Your Turn
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Câu {idx + 1} / {dialogue.lines.length}
                    </span>
                  </div>
                </div>

                {/* Speaker & Mic Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePlaySingleLine(line)}
                    className={`p-2.5 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                      isSpeaking
                        ? 'bg-amber-500 text-slate-950 scale-110 shadow-cute'
                        : 'bg-pink-100 hover:bg-pink-200 text-pink-700'
                    }`}
                    title="Nghe câu này / Listen"
                  >
                    <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleRecorder(line.id)}
                    className={`p-2.5 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                      hasRecorderOpen
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                    }`}
                    title="Luyện nói câu này với micro"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Short Core Speech Sentence */}
              <div className="pl-2 space-y-1">
                <p className="text-lg sm:text-2xl font-black text-slate-800 tracking-tight leading-snug">
                  "{line.textVi}"
                </p>

                {showEnglish && (
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
                    "{line.textEn}"
                  </p>
                )}
              </div>

              {/* Southern Nuance Badge (Crisp & Clear for Foreigners) */}
              {line.southernNote && (
                <div className="pl-2 flex items-center gap-2 flex-wrap pt-1">
                  <div className="px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold inline-flex items-center gap-1.5">
                    <span>💡 Điểm đặc sắc Nam Bộ:</span>
                    <span className="font-normal text-amber-800">{line.southernNote}</span>
                  </div>

                  {line.northernEquivalent && (
                    <div className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-[11px] font-medium">
                      Bắc: {line.northernEquivalent}
                    </div>
                  )}
                </div>
              )}

              {/* Interactive Speech Recorder (Only when expanded) */}
              {hasRecorderOpen && (
                <div className="mt-3 p-4 rounded-3xl bg-purple-50/70 border-2 border-purple-200 animate-in fade-in zoom-in-95">
                  <PronunciationRecorder
                    modelText={line.textVi}
                    modelAudioUrl={line.audioUrl}
                    compact={true}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
