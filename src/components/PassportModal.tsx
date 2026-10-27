import React from 'react';
import { useApp } from '../context/AppContext';
import { LESSONS_DATA } from '../data/lessonsData';
import { X, Stamp, Flame, Award, Coins, CheckCircle2, Lock, Sparkles, MapPin } from 'lucide-react';

export const PassportModal: React.FC = () => {
  const {
    activeProfile,
    dailyStreak,
    isPassportOpen,
    setIsPassportOpen,
    setIsVndModalOpen
  } = useApp();

  if (!isPassportOpen) return null;

  const vndAmount = activeProfile.points * 1000;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-cute border-2 border-amber-300 flex flex-col">
        {/* Passport Header Cover */}
        <div className="relative p-6 bg-gradient-to-br from-amber-100/90 via-pink-50/80 to-white border-b-2 border-amber-200/80 text-center">
          <button
            type="button"
            onClick={() => setIsPassportOpen(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-600 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-white border-2 border-amber-300 text-amber-600 text-2xl shadow-xs mb-2">
            🌸
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-widest text-amber-900 uppercase">
            HỘ CHIẾU HỌC TẬP / LEARNING PASSPORT
          </h2>
          <p className="text-xs text-amber-800 font-bold tracking-wider uppercase">
            Saigon Learning Passport · Practical Vietnamese 🇻🇳
          </p>
        </div>

        {/* Passport Bio Strip */}
        <div className="px-6 py-4 bg-pastel-mesh border-b-2 border-pink-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2.5 rounded-3xl bg-white border-2 border-pink-200 shadow-xs">
              {activeProfile.avatar}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-slate-800">{activeProfile.name}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-extrabold border border-pink-200">
                  {activeProfile.vietnameseRole}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Thị thực / Saigon Visa · {activeProfile.stamps.length}/5 địa danh / landmarks unlocked
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="text-center px-3 py-1.5 rounded-2xl bg-white border border-orange-200 shadow-xs">
              <div className="flex items-center justify-center gap-1 text-orange-600 font-black text-sm">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span>{dailyStreak}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">Ngày / Streak</span>
            </div>

            <div className="text-center px-3 py-1.5 rounded-2xl bg-white border border-amber-200 shadow-xs">
              <div className="flex items-center justify-center gap-1 text-amber-600 font-black text-sm font-mono">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{activeProfile.points}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">Điểm / Points</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsPassportOpen(false);
                setIsVndModalOpen(true);
              }}
              className="text-center px-3 py-1.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs cursor-pointer"
            >
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-black text-sm font-mono">
                <Coins className="w-4 h-4 text-emerald-600" />
                <span>{vndAmount.toLocaleString('vi-VN')}₫</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Ví tiền / Wallet</span>
            </button>
          </div>
        </div>

        {/* 5 Landmark Stamps Grid (Official Saigon Visa Stamps) */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <Stamp className="w-4 h-4 text-amber-600" />
              <span>5 Con Dấu Địa Danh / 5 Landmark Stamps:</span>
            </h3>
            <span className="text-xs text-rose-600 font-bold">
              {activeProfile.stamps.length === 5 ? '🎉 Hoàn tất 5 dấu! / All 5 Stamps!' : `Còn ${5 - activeProfile.stamps.length} dấu nữa / ${5 - activeProfile.stamps.length} remaining`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {LESSONS_DATA.map((lesson) => {
              const isStamped = activeProfile.stamps.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  className={`relative p-4 rounded-3xl border-2 transition-all flex items-start gap-3.5 overflow-hidden ${
                    isStamped
                      ? 'bg-gradient-to-br from-amber-50/80 via-white to-pink-50/60 border-amber-300 shadow-sm'
                      : 'bg-slate-50/70 border-dashed border-slate-200 opacity-70'
                  }`}
                >
                  {/* Stamp Seal Graphic */}
                  <div
                    className={`w-14 h-14 rounded-full flex flex-col items-center justify-center shrink-0 border-2 font-black transition-all ${
                      isStamped
                        ? 'bg-rose-50 border-rose-400 text-rose-600 shadow-xs rotate-[-6deg]'
                        : 'bg-slate-100 border-slate-300 text-slate-400'
                    }`}
                  >
                    {isStamped ? (
                      <>
                        <span className="text-lg leading-none">{lesson.icon}</span>
                        <span className="text-[8px] font-black uppercase tracking-tighter mt-0.5">
                          ĐẠT / EARNED
                        </span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-slate-400" />
                        <span className="text-[8px] font-bold mt-0.5">KHÓA / LOCK</span>
                      </>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        Bài / Lesson {lesson.id}
                      </span>
                      {isStamped && (
                        <span className="text-[10px] text-emerald-700 font-extrabold flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Đã đóng dấu / Stamped</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-black text-slate-800 mt-1 truncate">
                      {lesson.stampTitleVi}
                    </h4>

                    <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                      <span className="truncate">{lesson.landmarkVi}</span>
                    </p>

                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                      {lesson.landmarkStoryVi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-amber-50/60 border-t border-amber-200/80 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
          <span className="font-semibold text-amber-900">
            💡 Hoàn thành Quiz hoặc Bài tập để nhận con dấu địa danh · Complete quizzes & exercises to earn landmark stamps.
          </span>
          <button
            type="button"
            onClick={() => setIsPassportOpen(false)}
            className="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors shadow-xs cursor-pointer"
          >
            Đóng Hộ Chiếu / Close
          </button>
        </div>
      </div>
    </div>
  );
};
