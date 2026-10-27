import React, { useState } from 'react';
import { CulturalHeritage, CulturalHeritageTerm } from '../types';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import {
  Compass,
  Volume2,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Landmark,
  Languages
} from 'lucide-react';

interface CulturalHeritageCardProps {
  heritage: CulturalHeritage;
}

export const CulturalHeritageCard: React.FC<CulturalHeritageCardProps> = ({ heritage }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTermVi, setActiveTermVi] = useState<string | null>(null);

  const handleReadSummary = () => {
    stopAnyAudio();
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    const textToRead = `${heritage.titleVi}. ${heritage.historyVi} ${heritage.culturalSignificanceVi}`;
    playVietnameseAudio(textToRead, undefined, () => {
      setIsPlayingAudio(false);
    });
  };

  const handlePlayTerm = (term: CulturalHeritageTerm) => {
    stopAnyAudio();
    setActiveTermVi(term.termVi);
    playVietnameseAudio(term.termVi, undefined, () => {
      setActiveTermVi(null);
    });
  };

  return (
    <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white rounded-3xl p-5 sm:p-7 border-2 border-amber-300/80 shadow-sm space-y-4 transition-all">
      {/* Header bar */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-300 flex items-center justify-center text-3xl shrink-0 shadow-inner">
            {heritage.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                {heritage.categoryVi}
              </span>
              <span className="text-[11px] text-amber-800 font-medium italic">
                / {heritage.categoryEn}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1">
              {heritage.titleVi}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-amber-800 italic">
              {heritage.titleEn}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReadSummary}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              isPlayingAudio
                ? 'bg-rose-600 text-white animate-pulse'
                : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black'
            }`}
            title="Nghe đọc giới thiệu văn hóa lịch sử bằng giọng Sài Gòn"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlayingAudio ? 'Dừng đọc / Stop' : 'Nghe kể / Listen'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl bg-white border border-amber-200 text-amber-900 hover:bg-amber-50 transition-colors"
            title={isExpanded ? 'Thu gọn' : 'Mở rộng'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-2 border-t border-amber-200/60 animate-in fade-in">
          {/* 2-Column: History vs Cultural Significance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Column 1: Historical Origin */}
            <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/70 space-y-2">
              <div className="flex items-center gap-2 font-black text-slate-900 text-xs sm:text-sm">
                <Landmark className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Nguồn gốc & Lịch sử / Historical Origins:</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-xs">
                {heritage.historyVi}
              </p>
              <p className="text-slate-500 italic text-[11px] leading-relaxed pt-1 border-t border-slate-100">
                {heritage.historyEn}
              </p>
            </div>

            {/* Column 2: Cultural Significance */}
            <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/70 space-y-2">
              <div className="flex items-center gap-2 font-black text-slate-900 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Ý nghĩa văn hoá Nam Bộ / Cultural Meaning:</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-xs">
                {heritage.culturalSignificanceVi}
              </p>
              <p className="text-slate-500 italic text-[11px] leading-relaxed pt-1 border-t border-slate-100">
                {heritage.culturalSignificanceEn}
              </p>
            </div>
          </div>

          {/* Fun Fact Callout */}
          <div className="p-3.5 rounded-2xl bg-amber-100/70 border border-amber-300/80 flex items-start gap-3 text-xs">
            <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-black text-amber-950 block">Bạn có biết? / Fun Fact:</span>
              <p className="text-amber-900 leading-relaxed">
                {heritage.funFactVi}
              </p>
              <p className="text-amber-800 italic text-[11px]">
                {heritage.funFactEn}
              </p>
            </div>
          </div>

          {/* Key Cultural Vocabulary Terms */}
          {heritage.keyTerms && heritage.keyTerms.length > 0 && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                <Languages className="w-3.5 h-3.5 text-amber-600" />
                <span>Từ vựng văn hóa cốt lõi / Key Cultural Terms:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {heritage.keyTerms.map((term, idx) => {
                  const isSpeaking = activeTermVi === term.termVi;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-1.5 flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-black text-slate-900 text-xs sm:text-sm leading-tight">
                            {term.termVi}
                          </div>
                          <div className="text-[10px] font-mono font-semibold text-amber-700">
                            /{term.phonetic}/
                          </div>
                          <div className="text-[11px] font-bold text-slate-600">
                            {term.termEn}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handlePlayTerm(term)}
                          className={`p-1.5 rounded-xl transition-all shrink-0 ${
                            isSpeaking
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-amber-50 hover:bg-amber-100 text-amber-800'
                          }`}
                          title="Nghe phát âm từ này"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100 leading-snug">
                        <p className="text-slate-700">{term.explanationVi}</p>
                        <p className="text-slate-400 italic">{term.explanationEn}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
