import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { LESSONS_DATA, CUTE_AVATARS } from '../data/lessonsData';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Lock,
  Volume2,
  HelpCircle,
  Users,
  MessageSquare,
  Award,
  Stamp,
  Presentation,
  CheckCircle,
  Plus,
  BookOpen,
  Sparkles,
  Timer,
  GraduationCap,
  KeyRound,
  ShieldCheck,
  UserPlus
} from 'lucide-react';

interface PhaseConfig {
  nameVi: string;
  nameEn: string;
  startMin: number;
  endMin: number;
  color: string;
  badgeBg: string;
}

const PHASES: PhaseConfig[] = [
  { nameVi: 'Ôn tập & Khởi động', nameEn: 'Warm-up & Review', startMin: 0, endMin: 8, color: 'bg-blue-400', badgeBg: 'bg-blue-100 text-blue-800' },
  { nameVi: 'Bài mới & Từ vựng', nameEn: 'Core Vocabulary & Landmarks', startMin: 8, endMin: 23, color: 'bg-emerald-400', badgeBg: 'bg-emerald-100 text-emerald-800' },
  { nameVi: 'Trò chơi tương tác', nameEn: 'Classroom Challenge', startMin: 23, endMin: 45, color: 'bg-amber-400', badgeBg: 'bg-amber-100 text-amber-800' },
  { nameVi: 'Luyện nói & Phân vai', nameEn: 'Speaking & Roleplay', startMin: 45, endMin: 55, color: 'bg-rose-400', badgeBg: 'bg-rose-100 text-rose-800' },
  { nameVi: 'Tổng kết & Dặn dò', nameEn: 'Wrap-up & Homework', startMin: 55, endMin: 60, color: 'bg-purple-400', badgeBg: 'bg-purple-100 text-purple-800' }
];

export const TeacherModeModal: React.FC = () => {
  const {
    isTeacherModeOpen,
    setIsTeacherModeOpen,
    teacherPin,
    updateTeacherPin,
    currentLessonId,
    setCurrentLessonId,
    familyMembers,
    addClassStudent,
    addPoints,
    awardStamp
  } = useApp();

  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPinInput, setNewPinInput] = useState('');
  const [pinSuccessMsg, setPinSuccessMsg] = useState('');

  // Mode tabs: 'slides' | 'timer' | 'dialogue' | 'rewards' | 'guide'
  const [teacherViewTab, setTeacherViewTab] = useState<'slides' | 'timer' | 'dialogue' | 'rewards' | 'guide'>('slides');

  // Lesson & Slides
  const [selectedLessonId, setSelectedLessonId] = useState(currentLessonId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [speakingLineId, setSpeakingLineId] = useState<string | null>(null);

  // New Student Input in Rewards tab
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAvatar, setNewStudentAvatar] = useState('🌸');

  // 60-Minute Classroom Timer (seconds: 0 to 3600)
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lesson = LESSONS_DATA.find((l) => l.id === selectedLessonId) || LESSONS_DATA[0];
  const slides = lesson.teacherSlides;
  const currentSlide = slides[currentSlideIndex] || slides[0];
  const dialogue = lesson.dialogue;

  // Current active phase
  const elapsedMinutes = elapsedSeconds / 60;
  const currentPhaseIndex = PHASES.findIndex(
    (p) => elapsedMinutes >= p.startMin && elapsedMinutes < p.endMin
  );
  const activePhase = PHASES[currentPhaseIndex >= 0 ? currentPhaseIndex : PHASES.length - 1];

  // Keep selected lesson synced with global currentLessonId on open
  useEffect(() => {
    if (isTeacherModeOpen) {
      setSelectedLessonId(currentLessonId);
    }
  }, [isTeacherModeOpen, currentLessonId]);

  // Timer runner
  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = window.setInterval(() => {
        setElapsedSeconds((prev) => {
          if (prev >= 3600) {
            setIsTimerRunning(false);
            return 3600;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  if (!isTeacherModeOpen) return null;

  // Handle PIN verification
  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === teacherPin) {
      setIsAuthenticated(true);
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handleInstantBypass = () => {
    setIsAuthenticated(true);
    setPinError(false);
  };

  const handleUpdatePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (updateTeacherPin(newPinInput)) {
      setPinSuccessMsg('Đã đổi mã PIN thành công!');
      setNewPinInput('');
      setTimeout(() => {
        setIsChangingPin(false);
        setPinSuccessMsg('');
      }, 1500);
    }
  };

  const jumpToPhase = (phase: PhaseConfig) => {
    setElapsedSeconds(phase.startMin * 60);
    if (phase.startMin === 45) {
      setTeacherViewTab('dialogue');
    } else {
      setTeacherViewTab('slides');
      const slideIdx = slides.findIndex((s) => s.phase === phase.nameEn.toLowerCase().replace(/[^a-z_]/g, '_'));
      if (slideIdx >= 0) setCurrentSlideIndex(slideIdx);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleSpeakSlide = () => {
    const textToRead = `${currentSlide.titleVi}. ${currentSlide.contentVi.join('. ')}`;
    playVietnameseAudio(textToRead);
  };

  const handlePlayDialogueLine = (lineId: string, text: string) => {
    stopAnyAudio();
    setSpeakingLineId(lineId);
    playVietnameseAudio(text, undefined, () => {
      setSpeakingLineId(null);
    });
  };

  const handleAwardBonusPoints = (memberId: string, name: string, pts: number = 25) => {
    addPoints(pts, memberId);
    playVietnameseAudio(`Xuất sắc quá ${name} ơi! Thầy cô tặng bạn ${pts} điểm!`);
    try {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    } catch {}
  };

  const handleAwardLessonStamp = (memberId: string) => {
    awardStamp(selectedLessonId, memberId);
    playVietnameseAudio('Chúc mừng bạn đã đạt con dấu thị thực Sài Gòn!');
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
    } catch {}
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStudentName.trim()) {
      addClassStudent(newStudentName.trim(), newStudentAvatar);
      setNewStudentName('');
    }
  };

  // Render PIN Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
        <div className="bg-white rounded-4xl max-w-sm w-full p-7 shadow-cute border-2 border-purple-200 text-center animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-3xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-black text-slate-800">Chế Độ Giáo Viên / Teacher Mode</h2>
          <p className="text-xs text-purple-700 font-semibold mt-1">
            Teacher & Classroom Suite · Mã PIN: <span className="font-mono bg-purple-100 px-2 py-0.5 rounded-md text-purple-900 font-bold">1234</span>
          </p>

          <form onSubmit={handleVerifyPin} className="mt-5 space-y-3">
            <input
              type="password"
              inputMode="numeric"
              maxLength={6}
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                setPinError(false);
              }}
              placeholder="Nhập mã PIN (1234) / Enter PIN (1234)"
              className="w-full text-center text-2xl tracking-widest font-mono font-bold py-3 px-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:bg-purple-50/30 focus:outline-none"
              autoFocus
            />

            {pinError && (
              <p className="text-xs text-rose-600 font-bold">
                Mã PIN chưa đúng / Incorrect PIN (Default: 1234)
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-all shadow-pastel-purple cursor-pointer active:scale-98"
            >
              Mở Lớp Giảng Dạy / Enter Class
            </button>
          </form>

          {/* Quick Bypass Button */}
          <div className="pt-3 border-t border-purple-100 mt-4 space-y-2">
            <button
              type="button"
              onClick={handleInstantBypass}
              className="w-full py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Vào Ngay (Bỏ qua PIN / Instant Access)</span>
            </button>

            <button
              type="button"
              onClick={() => setIsTeacherModeOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
            >
              Quay lại chế độ học viên / Back to Learner Mode
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col bg-slate-900 text-slate-100 overflow-hidden ${
        isFullscreen ? 'p-0' : 'p-2 sm:p-4'
      }`}
    >
      {/* Teacher Mode Top App Bar */}
      <div className="bg-slate-800/95 border-b border-purple-900/60 px-4 py-3 rounded-t-3xl flex items-center justify-between gap-3 shrink-0 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center font-black text-xl shadow-xs">
            👩‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-black text-white tracking-tight">
                Không Gian Giáo Viên / Teacher Suite
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Tiết học 60 phút
              </span>
            </div>
            <p className="text-[11px] text-purple-300 font-medium">
              Phương ngữ Nam Bộ · Bản quyền bài giảng Sài Gòn
            </p>
          </div>
        </div>

        {/* 5 Lesson Selector Pills */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-2xl border border-slate-700 overflow-x-auto">
          {LESSONS_DATA.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => {
                setSelectedLessonId(l.id);
                setCurrentSlideIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedLessonId === l.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{l.icon} Bài {l.id}</span>
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer"
            title="Toàn màn hình trình chiếu"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsTeacherModeOpen(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Thoát / Close</span>
          </button>
        </div>
      </div>

      {/* Sub-bar: 5 Functional Mode Tabs */}
      <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/80 flex items-center justify-between gap-3 shrink-0 overflow-x-auto">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTeacherViewTab('slides')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherViewTab === 'slides'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>1. Giáo Án Trình Chiếu / Slides</span>
          </button>

          <button
            type="button"
            onClick={() => setTeacherViewTab('timer')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherViewTab === 'timer'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>2. Đồng Hồ Tiết Học / Timer ({formatTime(elapsedSeconds)})</span>
          </button>

          <button
            type="button"
            onClick={() => setTeacherViewTab('dialogue')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherViewTab === 'dialogue'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>3. Luyện Nói & Phân Vai / Dialogue</span>
          </button>

          <button
            type="button"
            onClick={() => setTeacherViewTab('rewards')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherViewTab === 'rewards'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>4. Khen Thưởng & Học Sinh / Roster</span>
          </button>

          <button
            type="button"
            onClick={() => setTeacherViewTab('guide')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherViewTab === 'guide'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>5. Mẹo Dạy Giọng Nam / Tips</span>
          </button>
        </div>

        {/* Mini Timer Pill */}
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-xl border border-slate-700 shrink-0">
          <span className="text-xs text-slate-400 font-medium">Tiết:</span>
          <span className="font-mono text-xs font-black text-amber-400">{formatTime(elapsedSeconds)} / 60:00</span>
          <button
            type="button"
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
          >
            {isTimerRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 flex flex-col items-center">
        {/* TAB 1: SLIDES PRESENTATION */}
        {teacherViewTab === 'slides' && (
          <div className="max-w-5xl w-full flex flex-col flex-1 justify-between bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Slide Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${activePhase.badgeBg}`}>
                  Giai đoạn: {currentSlide.phase.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Slide {currentSlideIndex + 1} / {slides.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSpeakSlide}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-purple-400" />
                  <span>Đọc To Slide / Audio Read</span>
                </button>
              </div>
            </div>

            {/* Slide Body (Large Projection Text) */}
            <div className="py-6 sm:py-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {currentSlide.titleVi}
                </h3>
                <p className="text-sm sm:text-base text-purple-300 font-semibold mt-1">
                  {currentSlide.titleEn}
                </p>
              </div>

              {/* Bullet Content */}
              <div className="space-y-3.5">
                {currentSlide.contentVi.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <span className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-base sm:text-xl font-bold text-slate-100 leading-relaxed">
                        {item}
                      </p>
                      {currentSlide.contentEn?.[idx] && (
                        <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                          {currentSlide.contentEn[idx]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Universal Roleplay Prompts (Children, Teens, Adults) */}
              {currentSlide.roleplayPrompts && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Gợi Ý Phân Vai Thực Hành Cho Học Sinh / Roleplay Prompts:</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="font-bold text-emerald-400 block mb-1">🧒 Trẻ em & Người mới bắt đầu:</span>
                      <span className="text-slate-300">{currentSlide.roleplayPrompts.be}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="font-bold text-amber-400 block mb-1">👦 Bạn trẻ & Thiếu niên:</span>
                      <span className="text-slate-300">{currentSlide.roleplayPrompts.teen}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="font-bold text-blue-400 block mb-1">👨‍💼 Người lớn & Phụ huynh:</span>
                      <span className="text-slate-300">{currentSlide.roleplayPrompts.adult}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Teacher Speaker Notes */}
              {currentSlide.teacherNotes && (
                <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-200 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-300">Lời nhắc cho Giáo viên: </strong>
                    <span>{currentSlide.teacherNotes}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                type="button"
                disabled={currentSlideIndex === 0}
                onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-bold transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trang trước / Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlideIndex ? 'bg-purple-500 w-7' : 'bg-slate-700 hover:bg-slate-600 w-2.5'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={currentSlideIndex === slides.length - 1}
                onClick={() => setCurrentSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-30 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Trang kế / Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: 60-MINUTE CLASSROOM TIMER */}
        {teacherViewTab === 'timer' && (
          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                Đồng Hồ 5 Giai Đoạn Tiết Học (Standard 60-min Lesson)
              </span>
              <div className="text-5xl sm:text-7xl font-mono font-black text-white tracking-widest pt-2">
                {formatTime(elapsedSeconds)}
              </div>
              <p className="text-xs text-slate-400">
                Giai đoạn hiện tại: <strong className="text-amber-400">{activePhase.nameVi}</strong> ({activePhase.nameEn})
              </p>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer ${
                  isTimerRunning ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isTimerRunning ? 'Tạm Dừng / Pause' : 'Bắt Đầu / Start'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsTimerRunning(false);
                  setElapsedSeconds(0);
                }}
                className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Đặt Lại / Reset</span>
              </button>
            </div>

            {/* Visual Timeline Bar */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Lộ trình 5 bước trong 60 phút (Bấm để nhảy nhanh):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {PHASES.map((p, idx) => {
                  const isActive = activePhase.nameEn === p.nameEn;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => jumpToPhase(p)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'border-purple-400 bg-purple-500/20 shadow-sm'
                          : 'border-slate-700 bg-slate-800/60 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>{p.startMin} - {p.endMin} phút</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                      </div>
                      <div className="font-bold text-xs text-white mt-1 leading-tight">
                        {p.nameVi}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                        {p.nameEn}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DIALOGUE STUDIO */}
        {teacherViewTab === 'dialogue' && dialogue && (
          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 flex-wrap">
              <div>
                <span className="text-xs uppercase font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-400/20">
                  Luyện nói & Phân vai trực tiếp trên lớp
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                  {dialogue.titleVi}
                </h3>
                <p className="text-xs text-slate-400 italic">
                  {dialogue.titleEn} · {dialogue.landmarkVi}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Các nhân vật:</span>
                <div className="flex items-center gap-1.5 mt-1">
                  {dialogue.roles.map((r) => (
                    <span key={r.id} className="text-xl p-1.5 bg-slate-800 rounded-xl" title={r.nameVi}>
                      {r.avatar}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Script Lines with native audio playback */}
            <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-2">
              {dialogue.lines.map((line) => {
                const isSpeaking = speakingLineId === line.id;
                return (
                  <div
                    key={line.id}
                    className={`p-4 rounded-2xl border transition-all space-y-2 ${
                      isSpeaking
                        ? 'bg-rose-500/15 border-rose-400 shadow-md ring-1 ring-rose-400'
                        : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{line.avatar}</span>
                        <div>
                          <span className="font-bold text-xs text-white">{line.speakerVi}</span>
                          <span className="text-[10px] text-slate-400 ml-1">({line.speakerEn})</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handlePlayDialogueLine(line.id, line.textVi)}
                        className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSpeaking
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isSpeaking ? 'Đang đọc...' : 'Nghe giọng Nam'}</span>
                      </button>
                    </div>

                    <p className="text-base font-bold text-white pl-8">
                      "{line.textVi}"
                    </p>
                    <p className="text-xs text-slate-400 pl-8">
                      {line.textEn}
                    </p>

                    {line.southernNote && (
                      <div className="ml-8 text-[11px] text-amber-300 font-medium bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block">
                        💡 {line.southernNote}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: REWARDS & STUDENT ROSTER */}
        {teacherViewTab === 'rewards' && (
          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 flex-wrap">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Bảng Khen Thưởng & Quản Lý Học Sinh
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">
                  Danh Sách Học Sinh Trong Lớp 🌟
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Thầy / Cô bấm cộng điểm tức thì khi học sinh trả lời đúng hoặc hoàn thành thử thách.
                </p>
              </div>
            </div>

            {/* Add student inline form */}
            <form onSubmit={handleAddStudent} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
                <UserPlus className="w-4 h-4 text-purple-400" />
                <span>Thêm học sinh mới:</span>
              </span>

              <div className="flex items-center gap-1.5">
                {CUTE_AVATARS.slice(0, 5).map((av) => (
                  <button
                    key={av.emoji}
                    type="button"
                    onClick={() => setNewStudentAvatar(av.emoji)}
                    className={`p-1.5 rounded-xl border text-lg ${
                      newStudentAvatar === av.emoji ? 'bg-purple-600 border-purple-400' : 'bg-slate-700 border-slate-600'
                    }`}
                  >
                    {av.emoji}
                  </button>
                ))}
              </div>

              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="Tên học viên (Ví dụ: David, Sarah...) / Student name..."
                className="flex-1 min-w-[180px] py-2 px-3 rounded-xl bg-slate-900 border border-slate-600 text-xs font-bold text-white focus:outline-none focus:border-purple-400"
              />

              <button
                type="submit"
                disabled={!newStudentName.trim()}
                className="py-2 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                + Thêm vào lớp / + Add Student
              </button>
            </form>

            {/* Students List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {familyMembers.map((member) => {
                const isStamped = member.stamps?.includes(selectedLessonId);
                const vndFormatted = (member.points * 1000).toLocaleString('vi-VN');

                return (
                  <div
                    key={member.id}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2 rounded-2xl bg-slate-700">{member.avatar}</span>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {member.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          <span className="font-mono text-amber-400 font-bold">{member.points} pts</span> ·{' '}
                          <span className="text-emerald-400 font-mono">{vndFormatted}₫</span>
                        </div>
                        {/* Student Quiz Scores Tracking for Teacher */}
                        <div className="text-[10px] text-slate-300 mt-1 flex items-center gap-1 flex-wrap">
                          <span className="text-slate-400">Bài tập:</span>
                          {LESSONS_DATA.map((l) => {
                            const sc = member.quizHighScores?.[l.id];
                            return (
                              <span
                                key={l.id}
                                className={`px-1.5 py-0.2 rounded font-mono text-[10px] ${
                                  sc !== undefined && sc > 0
                                    ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-600'
                                    : 'bg-slate-700/80 text-slate-500'
                                }`}
                                title={`Bài ${l.id} (${l.titleVi}): ${sc !== undefined ? sc + 'đ' : 'Chưa nộp'}`}
                              >
                                B{l.id}: {sc !== undefined && sc > 0 ? `${sc}đ` : '-'}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleAwardBonusPoints(member.id, member.name, 25)}
                        className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all active:scale-95 shadow-xs cursor-pointer"
                        title="Thưởng +25 điểm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>+25 pts</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAwardLessonStamp(member.id)}
                        className={`py-1.5 px-2.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                          isStamped
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'
                        }`}
                        title="Đóng dấu hoàn thành bài học"
                      >
                        <Stamp className="w-3.5 h-3.5" />
                        <span>{isStamped ? 'Đã có dấu' : 'Đóng dấu'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: TEACHER DIALECT GUIDE */}
        {teacherViewTab === 'guide' && (
          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">
                Sổ Tay Sư Phạm Phương Ngữ Nam Bộ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                Hướng Dẫn Giảng Dạy Tiếng Sài Gòn
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                  <span>1. Dấu Hỏi & Ngã</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Ở miền Nam, dấu hỏi (?) và dấu ngã (~) đọc gộp gần như giống nhau, êm dịu, không giật giọng ngắt quãng như miền Bắc. Ví dụ: 'sữa' đọc êm gần như 'sửa'.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
                  <span>2. Phụ Âm Cuối -N/-NG và -T/-C</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Đặc trưng Sài Gòn: vần -an và -ang phát âm mở thành -ang (bàn -&gt; bàng). Vần -at và -ac phát âm thành -ac (hát -&gt; hác).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="font-bold text-purple-300 text-sm flex items-center gap-1.5">
                  <span>3. Văn Hóa 'Dạ Thưa' Lịch Thiệp</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Người miền Nam rất chuộng sự ngọt ngào, lễ phép. Luôn rèn học sinh thói quen đặt từ 'Dạ' ở đầu câu khi trả lời người lớn hoặc nhân viên phục vụ: 'Dạ con cảm ơn', 'Dạ hông'.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="font-bold text-rose-300 text-sm flex items-center gap-1.5">
                  <span>4. Mua Sắm & Tiền Tệ</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Sài Gòn gọi tiền là 'ngàn' (không gọi 'nghìn'). Đắt gọi là 'mắc'. Rẽ trái/phải gọi là 'quẹo trái/quẹo phải'.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Change PIN Overlay */}
      {isChangingPin && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xs w-full p-6 text-center animate-in zoom-in-95">
            <h3 className="text-sm font-bold text-white mb-2">Đổi Mã PIN / Change PIN</h3>
            <p className="text-xs text-slate-400 mb-4">Nhập mã PIN mới gồm đúng 4 chữ số / Enter 4-digit PIN:</p>
            <form onSubmit={handleUpdatePin} className="space-y-3">
              <input
                type="text"
                pattern="[0-9]{4}"
                maxLength={4}
                value={newPinInput}
                onChange={(e) => setNewPinInput(e.target.value)}
                placeholder="Nhập PIN mới (Ví dụ: 5678) / New PIN (e.g. 5678)"
                className="w-full text-center text-xl font-mono font-bold py-2 px-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none"
                autoFocus
              />
              {pinSuccessMsg && (
                <p className="text-xs text-emerald-400 font-medium">{pinSuccessMsg}</p>
              )}
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsChangingPin(false)}
                  className="flex-1 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Hủy / Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                >
                  Lưu PIN / Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
