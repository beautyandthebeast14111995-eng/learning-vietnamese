import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { LessonContainer } from './components/LessonContainer';
import { FoundationsView } from './components/FoundationsView';
import { ExercisesAndTrackingView } from './components/ExercisesAndTrackingView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PassportModal } from './components/PassportModal';
import { ProfilePickerModal } from './components/ProfilePickerModal';
import { VndWalletModal } from './components/VndWalletModal';
import { TeacherModeModal } from './components/TeacherModeModal';
import { BottomNav } from './components/BottomNav';
import { BookOpen, Check, Copy, Flame, CheckSquare, GraduationCap, Edit3, LogOut, Sparkles } from 'lucide-react';

const MainLayout: React.FC = () => {
  const {
    isLoggedIn,
    activeProfile,
    mainView,
    setMainView,
    getPersonalShareLink,
    dailyStreak,
    logout,
    enterTeacherMode,
    setIsPassportOpen,
    setIsVndModalOpen,
    setIsProfileModalOpen
  } = useApp();

  const [copiedLink, setCopiedLink] = useState(false);

  // If user has not entered name/logged in yet, show the clean Welcome/Entry page
  if (!isLoggedIn) {
    return (
      <>
        <WelcomeScreen />
        <TeacherModeModal />
      </>
    );
  }

  const handleCopyCurrentLink = () => {
    const link = getPersonalShareLink(activeProfile.name);
    navigator.clipboard.writeText(link).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const vndFormatted = (activeProfile.points * 1000).toLocaleString('vi-VN');

  return (
    <div className="min-h-screen bg-pastel-mesh text-slate-800 flex flex-col font-sans pb-24 md:pb-12 selection:bg-pink-200 selection:text-pink-900">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-5 space-y-6">
        {/* Cute Pastel Student Identity Banner */}
        <section className="bg-white/95 rounded-4xl p-5 sm:p-6 border-2 border-pink-200/90 shadow-cute flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
          {/* Decorative soft glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-pink-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="text-4xl sm:text-5xl p-3 rounded-3xl bg-pink-100/80 border-2 border-pink-200 text-pink-700 shadow-sm shrink-0 animate-cute-wiggle">
              {activeProfile.avatar}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                  Chào {activeProfile.name} 🌸
                </h2>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                  {activeProfile.vietnameseRole} · {activeProfile.englishRole}
                </span>
              </div>

              <p className="text-xs text-rose-500 font-semibold">
                Chào mừng bạn đến với lớp học Tiếng Sài Gòn xinh xắn và dễ nhớ!
              </p>

              {/* Badges / Metrics */}
              <div className="flex items-center gap-3 text-xs text-slate-600 flex-wrap pt-1">
                <span className="font-bold inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  <span>Điểm thưởng: <strong className="font-mono text-amber-800">{activeProfile.points}</strong> pts</span>
                </span>
                <span className="text-pink-200" aria-hidden="true">•</span>
                <button
                  type="button"
                  onClick={() => setMainView('exercises')}
                  className="hover:text-emerald-700 font-bold text-emerald-700 inline-flex items-center gap-1 cursor-pointer bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bài tập: <strong className="font-mono text-emerald-800">{Object.keys(activeProfile.quizHighScores || {}).length}/5</strong> bài</span>
                </button>
                <span className="text-pink-200" aria-hidden="true">•</span>
                <button
                  type="button"
                  onClick={handleCopyCurrentLink}
                  className="text-pink-600 hover:text-pink-800 inline-flex items-center gap-1 font-bold cursor-pointer"
                  title="Sao chép link đăng nhập nhanh cho hồ sơ này"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Đã chép link ✨' : 'Chép link học'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Profile & Teacher Action Buttons */}
          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-pink-100 relative z-10 flex-wrap">
            <button
              type="button"
              onClick={() => setIsProfileModalOpen(true)}
              className="py-2 px-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-700 border-2 border-pink-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Đổi Linh Vật / Tên</span>
            </button>

            <button
              type="button"
              onClick={enterTeacherMode}
              className="py-2 px-3.5 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-900 border-2 border-purple-200 text-xs font-black transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-purple-700" />
              <span>Chế độ Giáo Viên</span>
            </button>

            <button
              type="button"
              onClick={logout}
              className="p-2 rounded-2xl border-2 border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-slate-600 text-xs transition-colors cursor-pointer"
              title="Đổi người học khác"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 3 Core Pillars Switcher (Foundations, 5 Lessons, Exercises & Scorecard) */}
        <div className="flex items-center p-1.5 bg-white/95 rounded-3xl max-w-2xl mx-auto border-2 border-pink-200/90 shadow-cute gap-1">
          {/* Pillar 1: Nội Dung Cơ Bản */}
          <button
            type="button"
            onClick={() => setMainView('foundations')}
            className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mainView === 'foundations'
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="text-base leading-none">🔤</span>
            <span>1. Nền Tảng Cơ Bản · Basics</span>
          </button>

          {/* Pillar 2: 10 Bài Học */}
          <button
            type="button"
            onClick={() => setMainView('lessons')}
            className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mainView === 'lessons'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-900" />
            <span>2. 10 Bài Học · Lessons</span>
          </button>

          {/* Pillar 3: Bài Tập & Tracking Điểm */}
          <button
            type="button"
            onClick={() => setMainView('exercises')}
            className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mainView === 'exercises'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-cute'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4 text-emerald-900" />
            <span>3. Bài Tập & Bảng Điểm · Exercises</span>
          </button>
        </div>

        {/* Main Content Pane */}
        <section>
          {mainView === 'foundations' && <FoundationsView />}
          {mainView === 'lessons' && <LessonContainer />}
          {mainView === 'exercises' && <ExercisesAndTrackingView />}
        </section>
      </main>

      {/* Cute Pastel Footer */}
      <footer className="border-t-2 border-pink-200/60 bg-white/80 backdrop-blur-xs py-6 mt-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span>🌸 🇻🇳</span>
            <span className="font-bold text-slate-800">Học Tiếng Việt – Sài Gòn Xinh Xắn</span>
            <span className="text-pink-200" aria-hidden="true">•</span>
            <span className="text-rose-500">Southern Vietnamese · Pastel Cute</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={enterTeacherMode}
              className="hover:text-purple-800 font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Chế độ Giáo Viên / Teacher Mode (PIN 1234)</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PassportModal />
      <ProfilePickerModal />
      <VndWalletModal />
      <TeacherModeModal />

      {/* Mobile Navigation */}
      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
