import React, { useState } from 'react';
import { Lesson } from '../types';
import { useApp } from '../context/AppContext';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Gamepad2, CheckCircle2, RotateCcw, Lightbulb } from 'lucide-react';

interface GameTabProps {
  lesson: Lesson;
}

export const GameTab: React.FC<GameTabProps> = ({ lesson }) => {
  const { activeProfile, addPoints } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const items = lesson.gameItems;
  const currentItem = items[currentIndex] || items[0];

  const handleSelectAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentItem.correct;
    if (isCorrect) {
      const pts = 20;
      setGameScore((prev) => prev + pts);
      addPoints(pts);
      playVietnameseAudio('Tuyệt vời quá đã!', undefined, undefined, 1.0);
    } else {
      playVietnameseAudio('Cố lên bạn ơi!', undefined, undefined, 0.9);
    }
  };

  const handleNextItem = () => {
    stopAnyAudio();
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setIsGameOver(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRestartGame = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setGameScore(0);
    setIsGameOver(false);
    setShowHint(false);
  };

  if (isGameOver) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-200 text-center max-w-xl mx-auto shadow-xl space-y-5 animate-in zoom-in-95">
        <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-400 flex items-center justify-center text-4xl mx-auto shadow-inner">
          🎮
        </div>

        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Vượt ải trò chơi thành công!
          </h3>
          <p className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
            Game Completed Successfully!
          </p>
          <p className="text-sm text-slate-600 mt-2">
            {activeProfile.name} đã hoàn thành xuất sắc trò chơi <strong>{lesson.gameTitleVi}</strong>
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <div className="text-xs uppercase text-emerald-800 font-bold">Điểm thưởng trò chơi / Bonus Points</div>
          <div className="text-3xl font-black font-mono text-emerald-600 mt-1">
            +{gameScore} <span className="text-sm font-normal">pts</span>
          </div>
          <p className="text-xs text-emerald-700 mt-1">
            Điểm đã tự động cộng vào Hộ Chiếu và bóp tiền giả ({gameScore * 1000}₫)!
          </p>
        </div>

        <button
          type="button"
          onClick={handleRestartGame}
          className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Chơi lại vòng mới / Play Again</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Game Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-5 text-white shadow-md flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
            {lesson.icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black tracking-tight leading-tight">
              {lesson.gameTitleVi}
            </h3>
            <p className="text-xs text-emerald-100">
              {lesson.gameDescriptionVi}
            </p>
            <p className="text-[11px] text-emerald-200 italic">
              {lesson.gameDescriptionEn}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-emerald-200 uppercase font-bold">Vòng / Round</div>
          <div className="text-base font-black font-mono">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 shadow-md space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Tình huống thực tế Sài Gòn / Real Scenario
          </span>
          <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentItem.question}
          </h4>
          <p className="text-xs text-slate-500 mt-1 italic">
            {currentItem.questionEn}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentItem.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentItem.correct;

            let cardStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-800';

            if (isAnswered) {
              if (isCorrect) {
                cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
              } else if (isSelected && !isCorrect) {
                cardStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
              } else {
                cardStyle = 'border-slate-100 bg-slate-50 opacity-40 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectAnswer(option)}
                className={`p-4 rounded-2xl border-2 text-left transition-all text-sm font-medium flex items-center justify-between gap-2 ${cardStyle}`}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint button */}
        {currentItem.hint && !isAnswered && (
          <div className="pt-2">
            {!showHint ? (
              <button
                type="button"
                onClick={() => setShowHint(true)}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Xem gợi ý văn hóa / Cultural Hint</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Gợi ý văn hóa Sài Gòn:</span>
                </div>
                <p>{currentItem.hint}</p>
                {currentItem.hintEn && (
                  <p className="text-slate-500 italic text-[11px]">{currentItem.hintEn}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Next Item Button */}
        {isAnswered && (
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-600">
              {selectedAnswer === currentItem.correct
                ? '🎉 Đúng rồi! (+20 pts)'
                : '😅 Chưa đúng, cùng ghi nhớ mẫu câu Sài Gòn nhé!'}
            </span>
            <button
              type="button"
              onClick={handleNextItem}
              className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs"
            >
              {currentIndex < items.length - 1 ? 'Vòng kế tiếp / Next ➔' : 'Xem kết quả / Finish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
