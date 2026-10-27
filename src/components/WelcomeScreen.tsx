import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CUTE_AVATARS } from '../data/lessonsData';
import { ArrowRight, MapPin, Sparkles, GraduationCap, Heart, Volume2, BookOpen, Star } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { loginByName, enterTeacherMode } = useApp();
  const [nameInput, setNameInput] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🐰');

  const nameSuggestions = ['Bé Bắp', 'An An', 'Minh Trí', 'Maya', 'Ken', 'Bảo Ngọc'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      loginByName(nameInput.trim(), selectedAvatar);
    }
  };

  const handlePickSuggestion = (name: string) => {
    setNameInput(name);
  };

  return (
    <div className="min-h-screen bg-pastel-mesh text-slate-800 flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900 relative overflow-hidden">
      {/* Decorative Pastel Floaters */}
      <div className="absolute top-10 left-8 w-28 h-28 bg-pink-200/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-36 right-10 w-36 h-36 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top minimal bar with cute pastel branding */}
      <header className="max-w-6xl w-full mx-auto px-6 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-300 via-rose-300 to-amber-200 text-white flex items-center justify-center font-black text-2xl shadow-cute animate-cute-float">
            🌸
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-slate-800 tracking-tight leading-tight">
                Tiếng Việt Xinh Xắn
              </h1>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                Sài Gòn Cute
              </span>
            </div>
            <p className="text-[11px] font-semibold text-rose-500">
              Southern Vietnamese · Pastel Edition 🇻🇳
            </p>
          </div>
        </div>

        {/* Quick Teacher Entrance from Top Bar */}
        <button
          type="button"
          onClick={enterTeacherMode}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-purple-100/90 hover:bg-purple-200 text-purple-800 border-2 border-purple-200 text-xs font-bold transition-all shadow-sm active:scale-95"
        >
          <GraduationCap className="w-4 h-4 text-purple-600" />
          <span>Chế độ Giáo Viên / Teacher</span>
        </button>
      </header>

      {/* Main Center Content */}
      <main className="max-w-5xl w-full mx-auto px-6 py-6 flex-1 flex flex-col justify-center items-center text-center space-y-8 relative z-10">
        {/* Hero Title & Subtitles */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 text-pink-800 text-xs font-bold shadow-xs">
            <span className="text-base">✨</span>
            <span>Tiếng Việt Giao Tiếp Đời Thường · Practical Conversational Vietnamese</span>
            <span className="text-base">🧁</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Học Tiếng Việt & Luyện Tập
            <span className="block text-xl sm:text-2xl text-slate-500 font-bold mt-1">
              Learn Vietnamese & Practice Quizzes
            </span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-rose-600">
            Nền Tảng Cơ Bản · 10 Bài Học Đời Sống · Bảng Điểm Tự Động / Foundations · 10 Life Lessons · Scorecard
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Học bảng chữ cái, dấu thanh, 10 bài hội thoại thực tế (mua sắm, tính tiền, hỏi đường, thuê nhà...) và làm bài tập nhìn hình đoán chữ để lưu kết quả gửi giáo viên!
            <span className="block text-slate-400 italic text-xs mt-1">
              Master the alphabet, tones, 10 practical life lessons, and take illustrated quizzes to track scores for your teacher!
            </span>
          </p>
        </div>

        {/* Dual Entrance Section: Student & Teacher Mode */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl w-full text-left">
          {/* Card 1: Student Entry (7 Cols) */}
          <div className="md:col-span-7 bg-white/95 rounded-4xl p-6 sm:p-8 border-2 border-pink-200/90 shadow-cute space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                  Dành cho Học Viên / For Learners
                </span>
                <h3 className="text-xl font-black text-slate-800 mt-1">
                  Vào Học Ngay / Start Learning 🎒
                </h3>
              </div>
              <span className="text-3xl animate-cute-wiggle">🐰</span>
            </div>

            {/* Avatar Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 flex items-center justify-between">
                <span>Chọn linh vật đại diện / Choose Avatar:</span>
                <span className="text-pink-600 font-semibold">{selectedAvatar}</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {CUTE_AVATARS.map((av) => {
                  const isSelected = selectedAvatar === av.emoji;
                  return (
                    <button
                      key={av.emoji}
                      type="button"
                      onClick={() => setSelectedAvatar(av.emoji)}
                      className={`p-2.5 rounded-2xl border-2 text-2xl transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? `${av.bg} ${av.border} scale-105 shadow-sm ring-2 ring-pink-300 ring-offset-1`
                          : 'bg-slate-50/70 border-slate-200/80 hover:bg-pink-50/50'
                      }`}
                      title={av.nameVi}
                    >
                      <span className="leading-none">{av.emoji}</span>
                      <span className="text-[9px] font-bold text-slate-600 mt-1 truncate w-full text-center">
                        {av.nameVi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name Input & Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  <span>Tên hoặc biệt danh của bạn</span>
                  <span className="text-slate-400 font-normal ml-1">/ Your Name or Nickname:</span>
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ví dụ: David, Sarah, Ken, Bé Bắp... / e.g. David, Sarah..."
                  className="w-full py-3.5 px-4 rounded-2xl bg-pink-50/40 border-2 border-pink-200 focus:border-rose-400 focus:bg-white focus:outline-none text-sm font-bold text-slate-800 transition-all placeholder:text-slate-400"
                  autoFocus
                />
              </div>

              {/* Quick suggestions */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-semibold text-slate-400">Gợi ý / Suggestions:</span>
                {nameSuggestions.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handlePickSuggestion(name)}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-pink-100 hover:text-pink-700 text-slate-600 text-[11px] font-bold transition-colors"
                  >
                    {name}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={!nameInput.trim()}
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 disabled:opacity-40 text-white font-black text-sm flex items-center justify-center gap-2 shadow-cute transition-all active:scale-98 cursor-pointer"
              >
                <span>Vào Học Ngay / Start Learning</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </form>
          </div>

          {/* Card 2: Teacher Mode Entrance (5 Cols) */}
          <div className="md:col-span-5 bg-gradient-to-br from-purple-50/95 via-pink-50/80 to-white/95 rounded-4xl p-6 sm:p-7 border-2 border-purple-200/90 shadow-cute flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Chế độ Giáo Viên / Teacher</span>
                </span>
                <span className="text-2xl">👩‍🏫</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-purple-950">
                Lớp Học & Giảng Dạy / Teaching Suite
              </h3>

              <p className="text-xs text-purple-800/80 leading-relaxed font-medium">
                Công cụ hỗ trợ giáo viên và phụ huynh giảng dạy theo tiết học chuẩn / Classroom suite for teachers & instructors:
              </p>

              <ul className="space-y-2 text-xs text-purple-900 font-semibold">
                <li className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-purple-100">
                  <span className="text-base">📽️</span>
                  <span>Trình chiếu bài giảng / Slides & Projector view</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-purple-100">
                  <span className="text-base">⏱️</span>
                  <span>Đồng hồ 60 phút tiết học / 60-min Classroom timer</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-purple-100">
                  <span className="text-base">⭐</span>
                  <span>Tracking điểm & khen thưởng / Roster & Stamp awards</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-purple-100">
                  <span className="text-base">💬</span>
                  <span>Luyện nói & phân vai / Roleplay & Audio drills</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={enterTeacherMode}
                className="w-full py-3.5 px-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-pastel-purple transition-all active:scale-98 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Mở Chế Độ Giáo Viên / Open Teacher Mode</span>
              </button>
              <p className="text-[10px] text-center text-purple-600/80 mt-2 font-medium">
                Mã PIN mặc định / Default PIN: 1234 · Vào ngay không cần chờ
              </p>
            </div>
          </div>
        </div>

        {/* 3 Cute Pastel Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full text-left pt-2">
          <div className="p-4 rounded-3xl bg-amber-50/80 border-2 border-amber-200/80 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-2xl bg-amber-200/80 text-amber-900 flex items-center justify-center text-sm font-bold">
              🗣️
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm">Giao Tiếp Thực Tế / Practical Vietnamese</h4>
            <p className="text-[11px] text-amber-800 font-semibold">Everyday Real-Life Language</p>
            <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
              Từ vựng mua bán, trả giá, hỏi đường, gọi món, đi taxi và giao tiếp hàng ngày tự nhiên.
            </p>
          </div>

          <div className="p-4 rounded-3xl bg-pink-50/80 border-2 border-pink-200/80 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-2xl bg-pink-200/80 text-pink-900 flex items-center justify-center text-sm font-bold">
              🎙️
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm">Phát Âm & Đánh Vần / Phonics & Audio</h4>
            <p className="text-[11px] text-pink-800 font-semibold">Native Audio Pronunciation</p>
            <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
              Từng từ đều có công thức đánh vần ghép âm, nghĩa tiếng Anh và âm thanh phát âm bản xứ.
            </p>
          </div>

          <div className="p-4 rounded-3xl bg-emerald-50/80 border-2 border-emerald-200/80 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-2xl bg-emerald-200/80 text-emerald-900 flex items-center justify-center text-sm font-bold">
              📊
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm">Bảng Điểm & Báo Cáo / Tracking & Report</h4>
            <p className="text-[11px] text-emerald-800 font-semibold">Instant Scorecard for Teachers</p>
            <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
              Lưu điểm tự động sau mỗi bài tập và 1-click sao chép báo cáo kết quả gửi thầy cô dễ dàng.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl w-full mx-auto px-6 py-4 border-t border-pink-200/60 text-center text-xs text-slate-400 relative z-10 flex items-center justify-between flex-wrap gap-2">
        <span className="font-medium text-pink-700">🌸 Học Tiếng Việt Sài Gòn · Giao diện Pastel Cute</span>
        <button
          type="button"
          onClick={enterTeacherMode}
          className="text-purple-700 hover:underline font-bold text-xs inline-flex items-center gap-1"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Dành cho Giáo viên / Teacher Mode</span>
        </button>
      </footer>
    </div>
  );
};
