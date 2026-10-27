import React, { useState } from 'react';
import { Lesson } from '../types';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import { Volume2, VolumeX, Sparkles, Heart, Lightbulb, Compass, Landmark, Smile, Quote } from 'lucide-react';

interface CulturalStoryTabProps {
  lesson: Lesson;
}

export const CulturalStoryTab: React.FC<CulturalStoryTabProps> = ({ lesson }) => {
  const story = lesson.culturalStory;
  const [isPlaying, setIsPlaying] = useState(false);

  if (!story) {
    return (
      <div className="bg-white rounded-3xl p-6 border-2 border-pink-100 text-center text-slate-500">
        Đang cập nhật câu chuyện văn hoá cho bài học này.
      </div>
    );
  }

  const handleToggleAudio = () => {
    stopAnyAudio();
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    const textToRead = `${story.titleVi}. Thói quen đặc trưng: ${story.habitVi}. ${story.storyVi}. Lời khuyên: ${story.politeTipVi}`;
    playVietnameseAudio(textToRead, undefined, () => {
      setIsPlaying(false);
    }, 0.95);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Hero Story Banner */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50/70 to-amber-50/60 rounded-4xl p-6 sm:p-8 border-2 border-pink-200 shadow-cute relative overflow-hidden">
        {/* Decorative soft glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start justify-between gap-5 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-white border-2 border-pink-200 flex items-center justify-center text-3xl sm:text-4xl shadow-cute shrink-0 animate-cute-float">
              {story.emoji}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                  🏮 Văn Hoá & Thói Quen / Culture & Habits
                </span>
                {story.landmarkVi && (
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                    <Landmark className="w-3 h-3 text-amber-700" />
                    <span>{story.landmarkVi}</span>
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight pt-1">
                {story.titleVi}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-rose-600 italic">
                {story.titleEn}
              </p>
            </div>
          </div>

          {/* Audio Listen Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all shadow-cute shrink-0 cursor-pointer active:scale-95 ${
              isPlaying
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-white hover:bg-pink-50 text-pink-700 border-2 border-pink-200'
            }`}
            title="Nghe kể chuyện văn hóa / Listen to cultural story"
          >
            {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-pink-600" />}
            <span>{isPlaying ? 'Dừng đọc / Stop' : 'Nghe kể chuyện / Listen 🎧'}</span>
          </button>
        </div>

        {/* Highlighted Southern Habit Card */}
        <div className="mt-5 p-4 rounded-3xl bg-white/90 border-2 border-pink-200/90 shadow-xs flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
            <Heart className="w-5 h-5 text-amber-600 fill-amber-300" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-black tracking-wider text-amber-900 block">
              Thói quen đặc trưng / Signature Cultural Habit:
            </span>
            <p className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
              {story.habitVi}
            </p>
            <p className="text-xs text-slate-500 font-medium italic">
              {story.habitEn}
            </p>
          </div>
        </div>
      </div>

      {/* Main Narrative Section: Vietnamese & English Side-by-Side or Stacked */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Vietnamese Story Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-pink-100 shadow-cute space-y-3 relative">
          <div className="flex items-center gap-2 text-rose-600 font-black text-xs uppercase tracking-wider">
            <Quote className="w-4 h-4" />
            <span>Câu chuyện văn hoá / Cultural Story (Tiếng Việt)</span>
          </div>
          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
            {story.storyVi}
          </p>
        </div>

        {/* English Translation Card */}
        <div className="bg-pink-50/40 rounded-3xl p-5 sm:p-6 border-2 border-pink-100 shadow-cute space-y-3 relative">
          <div className="flex items-center gap-2 text-slate-600 font-black text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Ý nghĩa & Ngữ cảnh / English Context & Explanation</span>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line italic">
            {story.storyEn}
          </p>
        </div>
      </div>

      {/* Polite Etiquette Tip for Foreigners (Golden Advice) */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/70 rounded-3xl p-5 sm:p-6 border-2 border-emerald-200 shadow-cute space-y-2">
        <div className="flex items-center gap-2 text-emerald-800 font-black text-xs uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-emerald-600" />
          <span>Mẹo Lịch Thiệp / Polite Etiquette Tip</span>
        </div>
        <p className="text-xs sm:text-sm font-black text-emerald-950 leading-relaxed">
          {story.politeTipVi}
        </p>
        <p className="text-xs text-emerald-800 font-medium italic pt-1 border-t border-emerald-200/60">
          💡 {story.politeTipEn}
        </p>
      </div>

      {/* Quick Cultural Practice Box */}
      <div className="p-4 rounded-3xl bg-amber-50/80 border-2 border-amber-200 text-xs text-amber-900 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🤝</span>
          <div>
            <div className="font-black text-slate-900">
              Hãy thử áp dụng ngay hôm nay! · Try it out today!
            </div>
            <div className="text-[11px] text-amber-800">
              Nói một câu tiếng Việt kèm nụ cười thân thiện sẽ khiến người bản xứ vô cùng quý mến bạn · A warm smile with Vietnamese words wins local hearts.
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => playVietnameseAudio(story.politeTipVi)}
          className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-[11px] transition-all cursor-pointer shadow-xs"
        >
          Nghe mẹo lịch sự / Listen Tip 🔊
        </button>
      </div>
    </div>
  );
};
