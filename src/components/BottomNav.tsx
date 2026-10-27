import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, GraduationCap, CheckSquare } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const {
    activeProfile,
    mainView,
    setMainView,
    enterTeacherMode,
    setIsProfileModalOpen
  } = useApp();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-pink-100 px-2 py-1 shadow-cute">
      <div className="grid grid-cols-5 items-center h-15">
        {/* Tab 1: Foundations (Nền Tảng Cơ Bản) */}
        <button
          type="button"
          onClick={() => setMainView('foundations')}
          className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] transition-all cursor-pointer ${
            mainView === 'foundations' ? 'text-purple-600 font-black scale-105' : 'text-slate-500'
          }`}
        >
          <span className="text-base leading-none">🔤</span>
          <span className="text-[10px] mt-0.5 tracking-tight font-bold">Cơ bản / Basics</span>
        </button>

        {/* Tab 2: Lessons (10 Bài học) */}
        <button
          type="button"
          onClick={() => setMainView('lessons')}
          className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] transition-all cursor-pointer ${
            mainView === 'lessons' ? 'text-amber-600 font-black scale-105' : 'text-slate-500'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-bold">10 Bài / Lessons</span>
        </button>

        {/* Tab 3: Exercises & Scorecard (Bài tập & Bảng điểm) */}
        <button
          type="button"
          onClick={() => setMainView('exercises')}
          className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] transition-all cursor-pointer ${
            mainView === 'exercises' ? 'text-emerald-600 font-black scale-105' : 'text-slate-500'
          }`}
        >
          <CheckSquare className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-bold">Bài tập / Quiz</span>
        </button>

        {/* Tab 4: Teacher Mode */}
        <button
          type="button"
          onClick={enterTeacherMode}
          className="flex flex-col items-center justify-center min-h-[44px] min-w-[44px] text-purple-700 hover:text-purple-900 transition-all cursor-pointer active:scale-95"
        >
          <div className="p-1 rounded-xl bg-purple-100 border border-purple-200">
            <GraduationCap className="w-4 h-4 text-purple-700" />
          </div>
          <span className="text-[9px] font-black mt-0.5 text-purple-800">Giáo Viên / Teacher</span>
        </button>

        {/* Tab 5: Cute Student Profile */}
        <button
          type="button"
          onClick={() => setIsProfileModalOpen(true)}
          className="flex flex-col items-center justify-center min-h-[44px] min-w-[44px] text-slate-700 transition-all cursor-pointer"
        >
          <span className="text-xl leading-none">{activeProfile.avatar}</span>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight truncate max-w-[55px]">
            {activeProfile.name}
          </span>
        </button>
      </div>
    </nav>
  );
};
