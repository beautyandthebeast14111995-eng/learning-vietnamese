import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, GraduationCap, Flame, CheckSquare } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    activeProfile,
    dailyStreak,
    mainView,
    setMainView,
    enterTeacherMode,
    setIsProfileModalOpen
  } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-pink-100/90 shadow-cute">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div
          onClick={() => setMainView('foundations')}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 text-white flex items-center justify-center font-black text-xl shadow-cute animate-cute-float">
            🌸
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-slate-800 tracking-tight leading-none">
                Học Tiếng Việt <span className="text-xs font-bold text-slate-400 font-normal">/ Learn Vietnamese</span>
              </h1>
              <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                Giao Tiếp
              </span>
            </div>
            <p className="text-[11px] font-bold text-rose-500 tracking-tight leading-tight mt-0.5">
              Thực Tế & Dễ Hiểu · Practical & Cultural Vietnamese 🇻🇳
            </p>
          </div>
        </div>

        {/* 3 Core Primary Nav Items (Matching User Requirements) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-pink-50/70 border border-pink-200/80">
          {/* Item 1: Nội dung cơ bản */}
          <button
            type="button"
            onClick={() => setMainView('foundations')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
              mainView === 'foundations'
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="text-sm leading-none">🔤</span>
            <span>1. Nền Tảng Cơ Bản · Basics</span>
          </button>

          {/* Item 2: 10 Bài học */}
          <button
            type="button"
            onClick={() => setMainView('lessons')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
              mainView === 'lessons'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-900" />
            <span>2. 10 Bài Học · Lessons</span>
          </button>

          {/* Item 3: Bài tập & Tracking điểm */}
          <button
            type="button"
            onClick={() => setMainView('exercises')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
              mainView === 'exercises'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5 text-emerald-900" />
            <span>3. Bài Tập & Bảng Điểm · Exercises</span>
          </button>
        </nav>

        {/* Right Zone: Teacher Mode + Student Identity */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Teacher Mode Button */}
          <button
            type="button"
            onClick={enterTeacherMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black text-purple-900 bg-purple-100 hover:bg-purple-200 border-2 border-purple-200 transition-all whitespace-nowrap shadow-xs cursor-pointer active:scale-95"
            title="Dành cho giáo viên: Trình chiếu slide và quản lý bài tập / Teacher & Classroom Suite"
          >
            <GraduationCap className="w-4 h-4 text-purple-700" />
            <span className="hidden sm:inline">Giáo Viên · Teacher</span>
          </button>

          {/* Daily Streak */}
          <div
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold shadow-xs"
            title="Chuỗi ngày học liên tục / Daily Learning Streak"
          >
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
            <span className="font-mono tabular-nums">{dailyStreak}</span>
            <span className="text-[10px] text-orange-600">ngày / days</span>
          </div>

          {/* Student Profile */}
          <button
            type="button"
            onClick={() => setIsProfileModalOpen(true)}
            className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-2xl bg-white border-2 border-pink-200 text-slate-800 hover:border-pink-300 transition-all shadow-xs cursor-pointer active:scale-95"
            title="Đổi tên / avatar học viên"
          >
            <span className="text-xl sm:text-base leading-none">{activeProfile.avatar}</span>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-black leading-tight truncate max-w-[80px]">
                {activeProfile.name}
              </div>
              <div className="text-[10px] text-rose-500 font-bold">
                {activeProfile.points} pts
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
