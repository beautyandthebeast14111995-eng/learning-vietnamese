import React from 'react';
import { useApp } from '../context/AppContext';
import { LESSONS_DATA } from '../data/lessonsData';
import { FlashcardsTab } from './FlashcardsTab';
import { DialogueTab } from './DialogueTab';
import { CulturalStoryTab } from './CulturalStoryTab';
import { QuizTab } from './QuizTab';
import { BookOpen, MessageSquare, HelpCircle, Heart, Star, Sparkles, GraduationCap } from 'lucide-react';

export const LessonContainer: React.FC = () => {
  const {
    currentLessonId,
    setCurrentLessonId,
    activeLessonTab,
    setActiveLessonTab,
    activeProfile,
    enterTeacherMode
  } = useApp();

  const lesson = LESSONS_DATA.find((l) => l.id === currentLessonId) || LESSONS_DATA[0];
  const lessonScore = activeProfile.quizHighScores?.[lesson.id];

  // Map activeLessonTab to current selection
  const currentTab =
    activeLessonTab === 'hoc' || activeLessonTab === 'tu_vung'
      ? 'tu_vung'
      : activeLessonTab === 'hoi_thoai'
      ? 'hoi_thoai'
      : activeLessonTab === 'van_hoa'
      ? 'van_hoa'
      : 'bai_tap';

  return (
    <div className="space-y-6">
      {/* 5 Lesson Horizontal Switcher Carousel / Tab strip */}
      <div className="overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-2 sm:gap-3 min-w-max">
          {LESSONS_DATA.map((item) => {
            const isSelected = item.id === currentLessonId;
            const score = activeProfile.quizHighScores?.[item.id];
            const isCompleted = score !== undefined && score > 0;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentLessonId(item.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-3xl border-2 transition-all text-left whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'border-rose-400 bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 text-slate-950 font-black shadow-cute scale-102'
                    : 'border-pink-100 bg-white hover:border-pink-200 text-slate-700'
                }`}
              >
                <span className="text-2xl leading-none">{item.icon}</span>
                <div>
                  <div className="text-xs sm:text-sm font-black leading-tight flex items-center gap-1.5">
                    <span>{item.titleVi.split(':')[0]}</span>
                    {isCompleted && (
                      <span className={`text-[10px] px-2 py-0.2 rounded-full font-extrabold flex items-center gap-0.5 ${
                        isSelected ? 'bg-slate-900 text-amber-300' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <span>{score}đ</span>
                      </span>
                    )}
                  </div>
                  <div className={`text-[10px] truncate max-w-[150px] font-bold ${
                    isSelected ? 'text-slate-900' : 'text-slate-400'
                  }`}>
                    {item.titleVi.split(':')[1]?.trim() || item.titleVi}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Lesson Hero Banner */}
      <div className="bg-gradient-to-br from-pink-100/70 via-rose-50/50 to-amber-50/60 rounded-4xl p-5 sm:p-6 border-2 border-pink-200/90 shadow-cute space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-rose-800 uppercase tracking-wider">
              <span>{lesson.icon}</span>
              <span>{lesson.titleVi.split(':')[0]} · Giao Tiếp Thực Tế & Văn Hóa Đời Sống</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              {lesson.titleVi.split(':')[1]?.trim() || lesson.titleVi}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-bold">
              {lesson.subtitleVi}
              <span className="block text-slate-400 text-xs mt-0.5 font-medium italic">{lesson.subtitleEn}</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Quick Teacher Mode Trigger */}
            <button
              type="button"
              onClick={enterTeacherMode}
              className="px-3.5 py-2 rounded-2xl bg-purple-100/90 hover:bg-purple-200 text-purple-900 border-2 border-purple-200 text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
              title="Mở giáo án trình chiếu và tiết học 60 phút / Open Classroom Slides & Timer"
            >
              <GraduationCap className="w-4 h-4 text-purple-700" />
              <span>Giáo Viên / Teacher</span>
            </button>

            {/* Score Tracker Badge */}
            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="text-[10px] uppercase font-black text-slate-400 block">Điểm bài tập / Score</span>
                <span className="text-xs font-black text-rose-700">
                  {lessonScore !== undefined && lessonScore > 0 ? `${lessonScore}/100đ` : 'Chưa làm / Not taken'}
                </span>
              </div>
              <div className={`w-11 h-11 rounded-3xl flex items-center justify-center text-xl border-2 shadow-xs ${
                lessonScore !== undefined && lessonScore >= 70
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                  : 'bg-white border-pink-200 text-slate-300'
              }`}>
                {lessonScore !== undefined && lessonScore >= 70 ? '🌟' : '✏️'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Lesson Sub-Tabs (Full Bilingual) */}
      <div className="flex items-center p-1.5 rounded-3xl bg-white/95 border-2 border-pink-100 gap-1 overflow-x-auto shadow-cute">
        {/* Sub-tab 1: Từ Vựng & Đánh Vần */}
        <button
          type="button"
          onClick={() => setActiveLessonTab('tu_vung')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex flex-col items-center justify-center gap-0.5 transition-all whitespace-nowrap cursor-pointer ${
            currentTab === 'tu_vung'
              ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-cute'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>TỪ VỰNG & ĐÁNH VẦN</span>
          </div>
          <span className="text-[10px] font-bold opacity-85">Vocabulary & Phonics</span>
        </button>

        {/* Sub-tab 2: Hội Thoại Ngắn */}
        <button
          type="button"
          onClick={() => setActiveLessonTab('hoi_thoai')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex flex-col items-center justify-center gap-0.5 transition-all whitespace-nowrap cursor-pointer ${
            currentTab === 'hoi_thoai'
              ? 'bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-cute'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            <span>HỘI THOẠI NGẮN</span>
          </div>
          <span className="text-[10px] font-bold opacity-85">Short Dialogue</span>
        </button>

        {/* Sub-tab 3: Câu Chuyện Văn Hóa & Thói Quen Miền Nam */}
        <button
          type="button"
          onClick={() => setActiveLessonTab('van_hoa')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex flex-col items-center justify-center gap-0.5 transition-all whitespace-nowrap cursor-pointer ${
            currentTab === 'van_hoa'
              ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-cute'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-600" />
            <span>VĂN HOÁ & THÓI QUEN</span>
          </div>
          <span className="text-[10px] font-bold opacity-85">Culture & Habits</span>
        </button>

        {/* Sub-tab 4: Bài Tập & Tracking */}
        <button
          type="button"
          onClick={() => setActiveLessonTab('bai_tap')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex flex-col items-center justify-center gap-0.5 transition-all whitespace-nowrap cursor-pointer ${
            currentTab === 'bai_tap'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-cute'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>BÀI TẬP & TRACKING</span>
          </div>
          <span className="text-[10px] font-bold opacity-85">Quiz & Scorecard</span>
        </button>
      </div>

      {/* Tab Panes */}
      <div className="pt-2">
        {currentTab === 'tu_vung' && <FlashcardsTab lesson={lesson} />}
        {currentTab === 'hoi_thoai' && <DialogueTab lesson={lesson} />}
        {currentTab === 'van_hoa' && <CulturalStoryTab lesson={lesson} />}
        {currentTab === 'bai_tap' && <QuizTab lesson={lesson} />}
      </div>
    </div>
  );
};
