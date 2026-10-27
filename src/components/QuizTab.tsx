import React, { useState } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { useApp } from '../context/AppContext';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  Volume2,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { QuizIllustration } from './QuizIllustration';

interface QuizTabProps {
  lesson: Lesson;
}

export const QuizTab: React.FC<QuizTabProps> = ({ lesson }) => {
  const { activeProfile, addPoints, awardStamp, saveQuizScore, setIsPassportOpen } = useApp();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answersLog, setAnswersLog] = useState<{ isCorrect: boolean; q: QuizQuestion }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Single unified question bank for all learners
  const questions = lesson.quiz;
  const currentQ = questions[currentQIndex] || questions[0];

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    setIsSubmitted(true);

    if (isCorrect) {
      const pts = 25;
      setScore((prev) => prev + pts);
      addPoints(pts);
      playVietnameseAudio('Chính xác, quá giỏi!', undefined, undefined, 1.0);
    } else {
      playVietnameseAudio('Chưa chính xác, cố lên nghen!', undefined, undefined, 0.9);
    }

    setAnswersLog((prev) => [...prev, { isCorrect, q: currentQ }]);
  };

  const handleNextQuestion = () => {
    stopAnyAudio();
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Quiz completed!
      setQuizFinished(true);
      const finalScorePercent = Math.round(((answersLog.length > 0 ? (score / (questions.length * 25)) : 1)) * 100);
      saveQuizScore(lesson.id, finalScorePercent);

      // Award stamp
      awardStamp(lesson.id);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setAnswersLog([]);
    setQuizFinished(false);
  };

  const handleSpeakQuestion = () => {
    playVietnameseAudio(currentQ.promptVi);
  };

  if (quizFinished) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 text-center max-w-xl mx-auto shadow-xl space-y-5 animate-in zoom-in-95">
        <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center text-4xl mx-auto shadow-inner">
          🎉
        </div>

        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Chúc mừng {activeProfile.name}!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Bạn đã hoàn thành phần luyện tập {lesson.titleVi}
          </p>
          <p className="text-xs text-amber-800 font-medium italic mt-0.5">
            You completed the quiz for {lesson.titleEn}!
          </p>
        </div>

        {/* Score & Stamp Badge */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-around">
          <div>
            <div className="text-xs uppercase text-amber-800 font-bold">
              Điểm thưởng / Points
            </div>
            <div className="text-3xl font-black font-mono text-amber-600 mt-0.5">
              +{score} <span className="text-sm font-normal">pts</span>
            </div>
          </div>

          <div className="h-10 w-px bg-amber-200" />

          <div>
            <div className="text-xs uppercase text-emerald-800 font-bold">
              Con dấu Hộ chiếu / Stamp
            </div>
            <div className="text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{lesson.stampTitleVi}</span>
            </div>
          </div>
        </div>

        {/* Breakdown of answers */}
        <div className="space-y-2 text-left">
          <div className="text-xs font-bold uppercase text-slate-500">
            Xem lại câu hỏi / Review Answers:
          </div>
          {answersLog.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 ${
                item.isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
              }`}
            >
              {item.isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="min-w-0 space-y-0.5">
                <p className="font-semibold text-slate-800">{item.q.promptVi}</p>
                <p className="text-slate-500 italic text-[11px]">{item.q.promptEn}</p>
                <p className="text-slate-700 text-xs mt-1">
                  Đáp án đúng / Correct answer: <strong className="text-emerald-700">{item.q.correctAnswer}</strong>
                </p>
                <p className="text-slate-600 text-[11px] italic">{item.q.explanationVi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3">
          <button
            type="button"
            onClick={handleRestartQuiz}
            className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Luyện tập lại / Try Again</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPassportOpen(true)}
            className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Award className="w-4 h-4" />
            <span>Mở Hộ Chiếu / Passport</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Quiz Progress Strip (Bilingual) */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-2">
        <div className="flex items-center gap-2">
          <span>Câu / Question {currentQIndex + 1} / {questions.length}</span>
        </div>

        <div className="font-mono text-amber-700 font-bold">
          +{score} pts
        </div>
      </div>

      {/* Question Card (Bilingual) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 shadow-md space-y-6">
        {/* Question Header & Audio Trigger */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {currentQ.promptVi}
            </h3>

            <button
              type="button"
              onClick={handleSpeakQuestion}
              className="p-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors shrink-0"
              title="Nghe câu hỏi / Listen to question"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
            {currentQ.promptEn}
          </p>

          {currentQ.northernContext && (
            <div className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg inline-block font-medium mt-1">
              💡 {currentQ.northernContext}
            </div>
          )}
        </div>

        {/* Nhìn hình đoán chữ: Picture Illustration Card */}
        <QuizIllustration
          questionId={currentQ.id}
          type={currentQ.type}
          pictureEmoji={currentQ.pictureEmoji}
        />

        {/* Options List */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === currentQ.correctAnswer;

            let buttonClass = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';

            if (isSelected) {
              buttonClass = 'border-amber-500 bg-amber-50/60 text-slate-950 font-bold shadow-xs';
            }

            if (isSubmitted) {
              if (isCorrect) {
                buttonClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
              } else if (isSelected && !isCorrect) {
                buttonClass = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
              } else {
                buttonClass = 'border-slate-100 opacity-50 bg-slate-50 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleSelectOption(opt)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 text-sm sm:text-base ${buttonClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div>
                    <span className="font-semibold text-sm sm:text-base">{opt}</span>
                    {currentQ.optionsEn && currentQ.optionsEn[idx] && (
                      <span className="block text-xs text-slate-400 font-normal italic mt-0.5">
                        {currentQ.optionsEn[idx]}
                      </span>
                    )}
                  </div>
                </div>

                {isSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Feedback Explanation (Bilingual) */}
        {isSubmitted && (
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1 animate-in fade-in">
            <div className="font-bold flex items-center gap-1.5">
              <span>{selectedOption === currentQ.correctAnswer ? '🎉 Chính xác! / Correct!' : '💡 Lời giải thích / Explanation:'}</span>
            </div>
            <p className="leading-relaxed font-medium">{currentQ.explanationVi}</p>
            <p className="text-[11px] text-slate-600 italic">{currentQ.explanationEn}</p>
          </div>
        )}

        {/* Bottom Action Button */}
        <div className="pt-2 flex justify-end">
          {!isSubmitted ? (
            <button
              type="button"
              disabled={!selectedOption}
              onClick={handleSubmitAnswer}
              className="py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 text-white font-bold text-xs transition-colors shadow-xs"
            >
              Kiểm tra đáp án / Check Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-xs"
            >
              <span>{currentQIndex < questions.length - 1 ? 'Câu tiếp theo / Next Question' : 'Xem kết quả / Finish'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
