import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LESSONS_DATA } from '../data/lessonsData';
import { QuizQuestion, Lesson } from '../types';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Image as ImageIcon,
  BookOpen,
  Send,
  Star,
  Trophy,
  ChevronRight
} from 'lucide-react';
import { QuizIllustration } from './QuizIllustration';

export const ExercisesAndTrackingView: React.FC = () => {
  const { activeProfile, saveQuizScore, addPoints, awardStamp } = useApp();

  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [isExercising, setIsExercising] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [sessionCorrectCount, setSessionCorrectCount] = useState<number>(0);
  const [answersLog, setAnswersLog] = useState<{ isCorrect: boolean; q: QuizQuestion; chosen: string }[]>([]);
  const [isSessionFinished, setIsSessionFinished] = useState<boolean>(false);
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  const currentLesson = LESSONS_DATA.find((l) => l.id === activeLessonId) || LESSONS_DATA[0];
  const questions: QuizQuestion[] = currentLesson.quiz;
  const currentQ: QuizQuestion = questions[currentQIndex] || questions[0];

  // Calculate scores across all 5 lessons
  const totalScore = LESSONS_DATA.reduce((acc, l) => {
    return acc + (activeProfile.quizHighScores?.[l.id] || 0);
  }, 0);

  const completedLessonsCount = LESSONS_DATA.filter((l) => {
    return (activeProfile.quizHighScores?.[l.id] || 0) > 0;
  }).length;

  const averageScore = completedLessonsCount > 0 ? Math.round(totalScore / completedLessonsCount) : 0;

  // Start exercise for a specific lesson
  const startExercise = (lessonId: number) => {
    stopAnyAudio();
    setActiveLessonId(lessonId);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setSessionCorrectCount(0);
    setAnswersLog([]);
    setIsSessionFinished(false);
    setIsExercising(true);
  };

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    setIsSubmitted(true);

    if (isCorrect) {
      setSessionCorrectCount((prev) => prev + 1);
      addPoints(25);
      playVietnameseAudio('Chính xác, quá giỏi!', undefined, undefined, 1.0);
    } else {
      playVietnameseAudio('Chưa chính xác, cố lên nghen!', undefined, undefined, 0.95);
    }

    setAnswersLog((prev) => [...prev, { isCorrect, q: currentQ, chosen: selectedOption }]);
  };

  const handleNextQuestion = () => {
    stopAnyAudio();
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Finished all questions in this session
      const totalQuestions = questions.length;
      const finalPercentage = Math.round(((sessionCorrectCount + (selectedOption === currentQ.correctAnswer ? 0 : 0)) / totalQuestions) * 100);
      
      saveQuizScore(activeLessonId, finalPercentage);
      if (finalPercentage >= 70) {
        awardStamp(activeLessonId);
      }
      setIsSessionFinished(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  // Copy structured progress report to clipboard for teacher
  const handleCopyReport = () => {
    const lines = [
      `🌸 BÁO CÁO KẾT QUẢ BÀI TẬP TIẾNG VIỆT (Southern Vietnamese)`,
      `👤 Học viên: ${activeProfile.name} ${activeProfile.avatar}`,
      `📅 Ngày: ${new Date().toLocaleDateString('vi-VN')}`,
      `--------------------------------------------------`,
      ...LESSONS_DATA.map((l) => {
        const score = activeProfile.quizHighScores?.[l.id];
        if (score !== undefined && score > 0) {
          const status = score >= 90 ? 'Xuất sắc ⭐' : score >= 70 ? 'Đạt chuẩn 👍' : 'Cần cố gắng 💪';
          return `• ${l.titleVi}: ${score}/100đ (${status})`;
        }
        return `• ${l.titleVi}: Chưa hoàn thành ⏳`;
      }),
      `--------------------------------------------------`,
      `🏆 Tổng điểm: ${totalScore}/${LESSONS_DATA.length * 100}đ | Điểm trung bình: ${averageScore}/100đ`,
      `🎯 Đã hoàn thành: ${completedLessonsCount}/${LESSONS_DATA.length} bài học`
    ];

    const reportText = lines.join('\n');
    navigator.clipboard.writeText(reportText).catch(() => {});
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Student Scorecard & Tracking Banner */}
      <div className="bg-white/95 rounded-4xl p-6 sm:p-7 border-2 border-pink-200/90 shadow-cute relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-pink-100 border-2 border-pink-200 flex items-center justify-center text-4xl shadow-cute shrink-0 animate-cute-wiggle">
              {activeProfile.avatar}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                  Hồ Sơ Học Viên / Learner Profile
                </span>
                <span className="text-xs text-rose-500 font-bold">
                  Tracking Điểm Tự Động / Auto Score Tracking ✨
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                Bảng Điểm Của {activeProfile.name} / {activeProfile.name}'s Scorecard 🎓
              </h2>
              <p className="text-xs text-slate-600 font-medium">
                Hoàn thành bài tập để lưu điểm và gửi báo cáo cho giáo viên · Complete exercises to save scores & share report with teacher.
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="px-4 py-2.5 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center">
              <span className="text-[10px] font-bold uppercase text-amber-800 block">Tổng Điểm / Total Score</span>
              <span className="text-lg font-black font-mono text-amber-700">{totalScore} <span className="text-xs font-normal">/ {LESSONS_DATA.length * 100}đ</span></span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center">
              <span className="text-[10px] font-bold uppercase text-emerald-800 block">Đã Hoàn Thành / Completed</span>
              <span className="text-lg font-black font-mono text-emerald-700">{completedLessonsCount} <span className="text-xs font-normal">/ {LESSONS_DATA.length} bài / lessons</span></span>
            </div>

            <button
              type="button"
              onClick={handleCopyReport}
              className={`px-4 py-3 rounded-2xl text-xs font-black flex items-center gap-2 transition-all shadow-cute cursor-pointer active:scale-95 ${
                copiedReport
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white'
              }`}
              title="Sao chép toàn bộ kết quả bài tập để gửi cho giáo viên / Copy score report for teacher"
            >
              {copiedReport ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedReport ? 'Đã Chép Báo Cáo! / Copied! ✨' : 'Chép Báo Cáo Cho Thầy Cô / Copy Report for Teacher 📋'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main View: Exercise Player OR Lessons Exercise Hub */}
      {isExercising ? (
        /* ================== ACTIVE EXERCISE PLAYER ================== */
        <div className="space-y-4 animate-in fade-in zoom-in-98 duration-200">
          {/* Top Bar for Quiz */}
          <div className="flex items-center justify-between bg-white/90 p-4 rounded-3xl border-2 border-pink-100 shadow-cute">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsExercising(false)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                ← Quay lại danh sách / Back to list
              </button>
              <span className="text-xs font-black text-slate-800 hidden sm:inline">
                {currentLesson.titleVi} ({currentLesson.titleEn})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500">
                Câu / Question <strong className="text-rose-600 font-mono text-sm">{currentQIndex + 1}</strong> / {questions.length}
              </span>
              <div className="w-24 sm:w-32 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-400 to-rose-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Exercise Session Finished View */}
          {isSessionFinished ? (
            <div className="bg-white rounded-4xl p-8 sm:p-10 border-2 border-pink-200 text-center max-w-2xl mx-auto shadow-cute space-y-6 animate-in zoom-in-95">
              <div className="w-24 h-24 rounded-full bg-pink-100 border-4 border-pink-300 flex items-center justify-center text-5xl mx-auto shadow-inner animate-cute-wiggle">
                🎉
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                  Hoàn Thành Bài Tập! / Exercise Finished! 🎉
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Chúc mừng {activeProfile.name} đã hoàn thành bài tập / Congratulations on finishing <strong>{currentLesson.titleVi} ({currentLesson.titleEn})</strong>
                </p>
              </div>

              {/* Score Display Card */}
              <div className="p-5 rounded-3xl bg-pink-50/70 border-2 border-pink-200 flex items-center justify-around">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Số Câu Đúng / Correct Answers</span>
                  <span className="text-3xl font-black text-rose-600 font-mono">
                    {sessionCorrectCount} <span className="text-sm font-normal text-slate-500">/ {questions.length}</span>
                  </span>
                </div>

                <div className="h-12 w-px bg-pink-200" />

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Điểm Đạt Được / Score Earned</span>
                  <span className="text-3xl font-black text-emerald-600 font-mono">
                    {Math.round((sessionCorrectCount / questions.length) * 100)} <span className="text-sm font-normal text-slate-500">/ 100đ</span>
                  </span>
                </div>
              </div>

              {/* Review answers breakdown */}
              <div className="space-y-2.5 text-left max-h-80 overflow-y-auto pr-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Chi tiết từng câu hỏi / Question Review:
                </span>
                {answersLog.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border-2 text-xs flex items-start gap-3 ${
                      item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                    }`}
                  >
                    {item.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0 space-y-1">
                      <p className="font-bold text-slate-800">{item.q.promptVi}</p>
                      <p className="text-[11px] text-slate-500 italic">{item.q.promptEn}</p>
                      <p className="text-slate-700 text-xs">
                        Đáp án đúng / Correct answer: <strong className="text-emerald-700">{item.q.correctAnswer}</strong>
                      </p>
                      <p className="text-[11px] text-slate-600 italic">{item.q.explanationVi}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => startExercise(activeLessonId)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm lại bài này / Retake Quiz</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExercising(false)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-black text-xs flex items-center justify-center gap-2 transition-all shadow-cute cursor-pointer"
                >
                  <span>Xem bảng điểm tổng hợp / View Scorecard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* ================== CURRENT QUESTION CARD ================== */
            <div className="bg-white rounded-4xl p-6 sm:p-8 border-2 border-pink-200 shadow-cute space-y-6">
              {/* Question Header & Type Tag */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200 flex items-center gap-1">
                    {currentQ.type === 'picture_word' && <>🖼️ Nhìn hình đoán chữ / Picture Word</>}
                    {currentQ.type === 'multiple_choice' && <>🎯 Trắc nghiệm chọn câu đúng / Multiple Choice</>}
                    {currentQ.type === 'cultural_riddle' && <>🧩 Câu đố văn hoá Nam Bộ / Cultural Riddle</>}
                  </span>

                  <button
                    type="button"
                    onClick={() => playVietnameseAudio(currentQ.promptVi)}
                    className="p-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-800 transition-colors cursor-pointer"
                    title="Nghe câu hỏi / Listen to question"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-snug">
                  {currentQ.promptVi}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic font-medium">
                  {currentQ.promptEn}
                </p>
              </div>

              {/* DẠNG 1: NHÌN HÌNH ĐOÁN CHỮ (Special Visual Card) */}
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

                  let btnStyle = 'border-pink-100 bg-white hover:border-pink-300 text-slate-800';

                  if (isSelected) {
                    btnStyle = 'border-rose-400 bg-pink-50/80 text-rose-950 font-bold shadow-xs';
                  }

                  if (isSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
                    } else {
                      btnStyle = 'border-slate-100 opacity-50 bg-slate-50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 text-xs sm:text-sm cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 text-xs font-black flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div>
                          <span className="font-bold text-sm">{opt}</span>
                          {currentQ.optionsEn && currentQ.optionsEn[idx] && (
                            <span className="block text-[11px] text-slate-400 font-normal italic mt-0.5">
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

              {/* Explanation Box */}
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-pink-50/80 border-2 border-pink-200 text-xs text-slate-800 space-y-1 animate-in fade-in">
                  <div className="font-black text-rose-700 flex items-center gap-1.5">
                    <span>{selectedOption === currentQ.correctAnswer ? '🎉 Chính xác, giỏi quá! / Correct, well done!' : '💡 Lời giải thích / Explanation:'}</span>
                  </div>
                  <p className="leading-relaxed font-semibold">{currentQ.explanationVi}</p>
                  <p className="text-[11px] text-slate-500 italic">{currentQ.explanationEn}</p>
                </div>
              )}

              {/* Bottom Action Button */}
              <div className="pt-2 flex justify-end">
                {!isSubmitted ? (
                  <button
                    type="button"
                    disabled={!selectedOption}
                    onClick={handleSubmitAnswer}
                    className="py-3 px-6 rounded-2xl bg-rose-500 hover:bg-rose-600 disabled:opacity-40 text-white font-black text-xs transition-all shadow-cute cursor-pointer active:scale-95"
                  >
                    Kiểm tra đáp án / Check Answer ✨
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="py-3 px-6 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-black text-xs flex items-center gap-2 transition-all shadow-cute cursor-pointer active:scale-95"
                  >
                    <span>{currentQIndex < questions.length - 1 ? 'Câu tiếp theo / Next Question' : 'Xem kết quả / View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ================== LESSONS EXERCISE HUB & SCORECARD ================== */
        <div className="space-y-6">
          {/* Section 1: 5 Lesson Exercise Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-800">
                  Chọn Bài Tập Để Thực Hành / Choose an Exercise to Practice 📝
                </h3>
                <p className="text-xs text-slate-500">
                  Mỗi bài gồm: Nhìn hình đoán chữ · Trắc nghiệm · Câu đố văn hoá / Picture matching · Multiple choice · Cultural riddles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LESSONS_DATA.map((lesson) => {
                const highScore = activeProfile.quizHighScores?.[lesson.id] || 0;
                const isCompleted = highScore > 0;

                return (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-3xl p-5 border-2 border-pink-100 hover:border-pink-300 transition-all shadow-cute flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-3xl p-2 rounded-2xl bg-pink-50 border border-pink-100">
                          {lesson.icon}
                        </span>

                        {isCompleted ? (
                          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                            <span>{highScore}/100đ</span>
                          </span>
                        ) : (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                            Chưa làm / Not taken ⏳
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="font-black text-slate-800 text-sm leading-snug">
                          {lesson.titleVi}
                        </h4>
                        <p className="text-xs text-slate-400 italic">
                          {lesson.titleEn}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 pt-1">
                        <span className="px-2 py-0.5 rounded-lg bg-pink-50 text-pink-700">
                          {lesson.quiz.length} câu hỏi / questions
                        </span>
                        <span>•</span>
                        <span>Nhìn hình & Trắc nghiệm / Pictures & Quiz</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => startExercise(lesson.id)}
                      className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 ${
                        isCompleted
                          ? 'bg-pink-50 hover:bg-pink-100 text-pink-700 border-2 border-pink-200'
                          : 'bg-rose-500 hover:bg-rose-600 text-white shadow-cute'
                      }`}
                    >
                      <span>{isCompleted ? 'Làm lại / Retake Quiz' : 'Bắt đầu làm bài / Start Quiz ✏️'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Detailed Progress Scorecard Table */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-pink-100 shadow-cute space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 font-black text-slate-800 text-sm sm:text-base">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Bảng Tổng Hợp Điểm Bài Tập / Progress & Scorecard Tracking</span>
              </div>

              <button
                type="button"
                onClick={handleCopyReport}
                className="text-xs font-bold text-pink-600 hover:text-pink-800 flex items-center gap-1 cursor-pointer"
              >
                {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedReport ? 'Đã sao chép! / Copied!' : 'Sao chép bảng điểm / Copy Scorecard'}</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-pink-100 text-slate-500 uppercase font-black text-[10px]">
                    <th className="py-2.5 px-3">Bài học / Lesson</th>
                    <th className="py-2.5 px-3">Chủ đề / Topic</th>
                    <th className="py-2.5 px-3 text-center">Số câu / Qs</th>
                    <th className="py-2.5 px-3 text-center">Điểm cao / High Score</th>
                    <th className="py-2.5 px-3 text-center">Đánh giá / Rating</th>
                    <th className="py-2.5 px-3 text-right">Thao tác / Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-50">
                  {LESSONS_DATA.map((lesson) => {
                    const score = activeProfile.quizHighScores?.[lesson.id];
                    const hasDone = score !== undefined && score > 0;

                    return (
                      <tr key={lesson.id} className="hover:bg-pink-50/40 transition-colors">
                        <td className="py-3 px-3 font-black text-slate-800 whitespace-nowrap">
                          {lesson.icon} Bài {lesson.id}
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-700">
                          {lesson.titleVi.split(':')[1]?.trim() || lesson.titleVi}
                        </td>
                        <td className="py-3 px-3 text-center font-mono text-slate-500">
                          {lesson.quiz.length}
                        </td>
                        <td className="py-3 px-3 text-center font-black font-mono text-sm">
                          {hasDone ? (
                            <span className="text-emerald-600">{score}/100</span>
                          ) : (
                            <span className="text-slate-300">---</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-center">
                          {hasDone ? (
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                              score >= 90
                                ? 'bg-amber-100 text-amber-800'
                                : score >= 70
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {score >= 90 ? 'Xuất sắc / Excellent ⭐' : score >= 70 ? 'Đạt chuẩn / Good 👍' : 'Cố gắng / Try again 💪'}
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 italic">Chưa làm / Not done ⏳</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => startExercise(lesson.id)}
                            className="text-pink-600 hover:text-pink-800 font-bold hover:underline cursor-pointer"
                          >
                            {hasDone ? 'Làm lại / Retake' : 'Làm bài / Start'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
