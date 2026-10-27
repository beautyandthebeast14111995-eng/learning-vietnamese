import React, { useState } from 'react';
import { Lesson, Flashcard } from '../types';
import { useApp } from '../context/AppContext';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import { Volume2, ChevronLeft, ChevronRight, Sparkles, Layers, Grid, BookOpen } from 'lucide-react';

interface FlashcardsTabProps {
  lesson: Lesson;
}

export const FlashcardsTab: React.FC<FlashcardsTabProps> = ({ lesson }) => {
  const { addPoints } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [learnedCards, setLearnedCards] = useState<string[]>([]);

  const cards = lesson.flashcards;
  const currentCard = cards[currentIndex] || cards[0];

  const handlePlayAudio = (card: Flashcard) => {
    setIsPlayingAudio(true);
    playVietnameseAudio(card.termVi, card.audioUrl, () => {
      setIsPlayingAudio(false);
    });

    if (!learnedCards.includes(card.id)) {
      setLearnedCards((prev) => [...prev, card.id]);
      addPoints(5);
    }
  };

  const handlePlaySpelling = (card: Flashcard) => {
    if (card.spellingFormula) {
      playVietnameseAudio(card.spellingFormula.replace(/➔/g, 'ra'));
    } else {
      playVietnameseAudio(card.termVi);
    }
  };

  const handlePlaySentenceAudio = (card: Flashcard) => {
    setIsPlayingAudio(true);
    playVietnameseAudio(card.exampleVi, undefined, () => {
      setIsPlayingAudio(false);
    });
  };

  return (
    <div className="space-y-6">
      {/* Tab Header Controls */}
      <div className="flex items-center justify-between gap-3 flex-wrap bg-white/95 p-4 rounded-3xl border-2 border-pink-100 shadow-cute">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
            <span>Từ Vựng, Nghĩa & Đánh Vần</span>
            <span className="text-xs font-bold text-slate-400 font-normal">/ Vocabulary & Phonics</span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              {cards.length} từ / words
            </span>
          </h3>
          <p className="text-xs text-rose-500 font-semibold">
            Hình ảnh minh họa, ghép âm đánh vần & âm thanh chuẩn / Illustrations, spelling formula & audio
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-pink-50/70 rounded-2xl border border-pink-200">
          <button
            type="button"
            onClick={() => setViewMode('carousel')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'carousel'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Thẻ từng từ / Flashcard</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5 text-pink-500" />
            <span>Tất cả từ / Grid</span>
          </button>
        </div>
      </div>

      {viewMode === 'carousel' ? (
        /* Carousel View */
        <div className="space-y-4">
          <div className="relative bg-white rounded-4xl p-6 sm:p-8 border-2 border-pink-200/90 shadow-cute flex flex-col justify-between min-h-[420px]">
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-pink-100">
              <span className="font-mono font-bold text-rose-600">
                Từ vựng / Word {currentIndex + 1} of {cards.length}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-pink-100 text-pink-800 text-[10px] font-black uppercase tracking-wider">
                Phát Âm Bản Xứ / Native Audio
              </span>
            </div>

            {/* Core Card Anatomy */}
            <div className="my-4 text-center space-y-4">
              {/* Emoji illustration */}
              <div className="mx-auto w-24 h-24 rounded-3xl bg-pastel-mesh border-2 border-pink-200 flex items-center justify-center text-5xl shadow-sm transition-transform hover:scale-105">
                {currentCard.emoji}
              </div>

              {/* Southern Main Term (Big Primary Typography) */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <h2 className="font-black text-slate-800 tracking-tight text-3xl sm:text-5xl">
                    {currentCard.termVi}
                  </h2>

                  {/* Speaker Button */}
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(currentCard)}
                    className="w-12 h-12 rounded-2xl bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 flex items-center justify-center shadow-cute transition-all cursor-pointer"
                    title="Nghe phát âm chuẩn / Listen to native audio"
                  >
                    <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                  </button>
                </div>

                <p className="text-xs font-mono text-slate-400">/{currentCard.phonetic}/</p>
                <p className="text-base sm:text-lg font-black text-rose-600">
                  {currentCard.meaningEn}
                </p>
              </div>

              {/* Phonics & Spelling Formula (KEY FEATURE) */}
              {currentCard.spellingFormula && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/80 shadow-xs">
                  <span className="text-xs font-black text-purple-800">🔤 Cách đánh vần / Spelling:</span>
                  <span className="text-xs sm:text-sm font-black text-purple-950 font-mono">
                    {currentCard.spellingFormula}
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePlaySpelling(currentCard)}
                    className="p-1 rounded-lg bg-purple-200 text-purple-800 hover:bg-purple-300 transition-colors ml-1"
                    title="Nghe đánh vần / Listen to phonics"
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Example sentence with click-to-listen */}
              <div
                onClick={() => handlePlaySentenceAudio(currentCard)}
                className="max-w-xl mx-auto p-3.5 rounded-3xl bg-pink-50/50 border border-pink-100 hover:border-pink-300 transition-colors cursor-pointer text-left space-y-1"
                title="Bấm để nghe câu ví dụ này / Click to listen to example sentence"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black text-slate-400">Câu ví dụ thực tế / Example Sentence:</span>
                  <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  "{currentCard.exampleVi}"
                </p>
                <p className="text-xs text-slate-500 italic">
                  "{currentCard.exampleEn}"
                </p>
              </div>

              {/* Southern cultural tip / Northern comparison */}
              <div className="flex items-center justify-center gap-2 flex-wrap text-[11px] pt-1">
                {currentCard.southernUsageTip && (
                  <span className="px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
                    💡 {currentCard.southernUsageTip}
                  </span>
                )}
                {currentCard.northernNote && (
                  <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 font-medium">
                    {currentCard.northernNote}
                  </span>
                )}
              </div>
            </div>

            {/* Navigation Carousel Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-pink-100">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-pink-50 hover:bg-pink-100 disabled:opacity-30 text-xs font-black text-pink-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>← Từ trước / Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'bg-rose-500 w-6' : 'bg-pink-200 w-2.5'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={currentIndex === cards.length - 1}
                onClick={() => setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1))}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-rose-500 hover:bg-rose-600 disabled:opacity-30 text-xs font-black text-white transition-colors cursor-pointer shadow-xs"
              >
                <span>Từ kế tiếp / Next →</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-4xl p-5 border-2 border-pink-100 shadow-xs flex flex-col justify-between space-y-3 hover:border-pink-300 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl p-2.5 rounded-3xl bg-pink-50 border border-pink-200">
                  {card.emoji}
                </span>

                <button
                  type="button"
                  onClick={() => handlePlayAudio(card)}
                  className="p-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-800">{card.termVi}</h4>
                <p className="text-xs text-rose-600 font-bold">{card.meaningEn}</p>
                <p className="text-[11px] font-mono text-slate-400">/{card.phonetic}/</p>
              </div>

              {card.spellingFormula && (
                <div className="p-2 rounded-xl bg-purple-50 text-[11px] font-bold text-purple-900 border border-purple-100 font-mono">
                  {card.spellingFormula}
                </div>
              )}

              <p className="text-xs text-slate-600 font-medium italic">
                "{card.exampleVi}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
