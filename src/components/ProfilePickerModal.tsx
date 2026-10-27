import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { CUTE_AVATARS } from '../data/lessonsData';
import { X, Check, Copy, Sparkles, GraduationCap, Coins, Stamp, Flame, LogOut } from 'lucide-react';

export const ProfilePickerModal: React.FC = () => {
  const {
    activeProfile,
    updateActiveProfile,
    getPersonalShareLink,
    isProfileModalOpen,
    setIsProfileModalOpen,
    enterTeacherMode,
    logout,
    dailyStreak
  } = useApp();

  const [editName, setEditName] = useState(activeProfile?.name || '');
  const [selectedAvatar, setSelectedAvatar] = useState(activeProfile?.avatar || '🐰');
  const [copiedLink, setCopiedLink] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (activeProfile) {
      setEditName(activeProfile.name);
      setSelectedAvatar(activeProfile.avatar || '🐰');
    }
  }, [activeProfile, isProfileModalOpen]);

  if (!isProfileModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editName.trim()) {
      updateActiveProfile(editName.trim(), selectedAvatar);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setIsProfileModalOpen(false);
      }, 1000);
    }
  };

  const handleCopyLink = () => {
    const link = getPersonalShareLink(editName || activeProfile.name);
    navigator.clipboard.writeText(link).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const vndFormatted = (activeProfile.points * 1000).toLocaleString('vi-VN');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 shadow-cute border-2 border-pink-200 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-pink-100">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl p-2 rounded-2xl bg-pink-100 text-pink-700">
              {selectedAvatar}
            </span>
            <div>
              <h2 className="text-lg font-black text-slate-800 tracking-tight">
                Hồ Sơ Học Viên / My Profile
              </h2>
              <p className="text-xs text-rose-500 font-semibold">
                Tùy chỉnh linh vật & tên gọi đáng yêu của bạn 🌸
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsProfileModalOpen(false)}
            className="w-9 h-9 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Learning Badges / Stats Bar */}
        <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-3xl bg-pastel-mesh border-2 border-pink-100 text-center">
          <div className="p-2 rounded-2xl bg-white/80 border border-amber-200">
            <div className="flex items-center justify-center gap-1 text-amber-700 font-black text-sm">
              <Coins className="w-4 h-4 text-amber-500" />
              <span>{vndFormatted}₫</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold block mt-0.5">Tiền tệ / Money (₫)</span>
          </div>

          <div className="p-2 rounded-2xl bg-white/80 border border-rose-200">
            <div className="flex items-center justify-center gap-1 text-rose-700 font-black text-sm">
              <Stamp className="w-4 h-4 text-rose-500" />
              <span>{activeProfile.stamps.length}/5</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold block mt-0.5">Dấu / Stamps</span>
          </div>

          <div className="p-2 rounded-2xl bg-white/80 border border-orange-200">
            <div className="flex items-center justify-center gap-1 text-orange-700 font-black text-sm">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{dailyStreak} ngày / days</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold block mt-0.5">Chuỗi / Day Streak</span>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="space-y-4">
          {/* Avatar Grid */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Đổi linh vật đại diện / Choose Avatar:</span>
              <span className="text-pink-600 font-bold text-xs">Đang chọn / Selected: {selectedAvatar}</span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {CUTE_AVATARS.map((av) => {
                const isSelected = selectedAvatar === av.emoji;
                return (
                  <button
                    key={av.emoji}
                    type="button"
                    onClick={() => setSelectedAvatar(av.emoji)}
                    className={`p-2.5 rounded-2xl border-2 text-2xl transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? `${av.bg} ${av.border} scale-105 shadow-sm ring-2 ring-pink-300 ring-offset-1`
                        : 'bg-slate-50/80 border-slate-200/80 hover:bg-pink-50'
                    }`}
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

          {/* Name input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              <span>Tên hiển thị của bạn / Display Name:</span>
            </label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Nhập tên mới (Ví dụ: David, Sarah...) / Enter new name..."
              className="w-full py-3 px-4 text-sm font-bold rounded-2xl bg-pink-50/40 border-2 border-pink-200 focus:border-rose-400 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={!editName.trim()}
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Đã lưu thành công! / Saved! ✨</span>
                </>
              ) : (
                <span>Lưu Thay Đổi / Save Profile</span>
              )}
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-pink-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Sao chép link đăng nhập nhanh cho hồ sơ này / Copy personal access link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Đã chép / Copied' : 'Chép Link / Copy Link'}</span>
            </button>
          </div>
        </form>

        {/* Quick Portal Switchers */}
        <div className="pt-4 border-t border-pink-100 flex items-center justify-between gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => {
              setIsProfileModalOpen(false);
              enterTeacherMode();
            }}
            className="px-3.5 py-2 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-purple-700" />
            <span>Chế Độ Giáo Viên / Teacher Mode</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsProfileModalOpen(false);
              logout();
            }}
            className="px-3 py-2 rounded-2xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đổi hồ sơ / Switch Learner</span>
          </button>
        </div>
      </div>
    </div>
  );
};
