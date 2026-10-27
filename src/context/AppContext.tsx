import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { FamilyMember, ProfileType } from '../types';
import { INITIAL_FAMILY_MEMBERS } from '../data/lessonsData';

interface AppContextType {
  familyMembers: FamilyMember[];
  activeProfile: FamilyMember;
  activeProfileId: string;
  currentLessonId: number;
  activeLessonTab: 'tu_vung' | 'hoi_thoai' | 'van_hoa' | 'bai_tap' | 'hoc' | 'luyen' | 'choi' | 've_nha';
  teacherPin: string;
  dailyStreak: number;
  bilingualMode: 'both' | 'vi' | 'en';
  mainView: 'foundations' | 'lessons' | 'exercises' | 'teacher';
  isLoggedIn: boolean;
  isTeacherModeOpen: boolean;
  isPassportOpen: boolean;
  isProfileModalOpen: boolean;
  isVndModalOpen: boolean;
  
  // Actions
  setIsLoggedIn: (logged: boolean) => void;
  logout: () => void;
  setMainView: (view: 'foundations' | 'lessons' | 'exercises' | 'teacher') => void;
  switchProfile: (memberId: string) => void;
  updateActiveProfile: (name: string, avatar: string) => void;
  addClassStudent: (name: string, avatar: string) => void;
  enterTeacherMode: () => void;
  setCurrentLessonId: (id: number) => void;
  setActiveLessonTab: (tab: 'tu_vung' | 'hoi_thoai' | 'van_hoa' | 'bai_tap' | 'hoc' | 'luyen' | 'choi' | 've_nha') => void;
  addPoints: (points: number, memberId?: string) => void;
  awardStamp: (lessonId: number, memberId?: string) => void;
  toggleHomework: (taskId: string, memberId?: string) => void;
  updateTeacherPin: (newPin: string) => boolean;
  setBilingualMode: (mode: 'both' | 'vi' | 'en') => void;
  setIsTeacherModeOpen: (open: boolean) => void;
  setIsPassportOpen: (open: boolean) => void;
  setIsProfileModalOpen: (open: boolean) => void;
  setIsVndModalOpen: (open: boolean) => void;
  loginByName: (name: string, avatar?: string, type?: ProfileType) => void;
  getPersonalShareLink: (memberName?: string) => string;
  saveQuizScore: (lessonId: number, score: number, memberId?: string) => void;
  resetAllData: () => void;
}

const STORAGE_KEY_MEMBERS = 'hoc_tieng_viet_learners_v2';
const STORAGE_KEY_ACTIVE_ID = 'hoc_tieng_viet_active_id_v2';
const STORAGE_KEY_PIN = 'hoc_tieng_viet_teacher_pin_v1';
const STORAGE_KEY_STREAK = 'hoc_tieng_viet_streak_v1';
const STORAGE_KEY_LAST_VISIT = 'hoc_tieng_viet_last_visit_v1';
const STORAGE_KEY_BILINGUAL = 'hoc_tieng_viet_bilingual_v1';

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Learner Profile List (Class Roster / Learner)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MEMBERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // If old format had 5 hardcoded family members, reset to clean cute learner
          if (parsed.some((m: FamilyMember) => m.name === 'Alex' || m.name === 'Sarah')) {
            return INITIAL_FAMILY_MEMBERS;
          }
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_FAMILY_MEMBERS;
  });

  // 2. Active Profile ID
  const [activeProfileId, setActiveProfileId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
      if (saved && saved !== 'member-1' && saved !== 'member-4' && saved !== 'member-5') {
        return saved;
      }
    } catch {
      // ignore
    }
    return INITIAL_FAMILY_MEMBERS[0]?.id || 'learner-1';
  });

  // 3. Navigation & Modal states
  const [mainView, setMainView] = useState<'foundations' | 'lessons' | 'exercises' | 'teacher'>('foundations');
  const [isLoggedIn, setIsLoggedInState] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('name') || urlParams.get('user')) return true;
        const saved = localStorage.getItem('hoc_tieng_viet_logged_in_v1');
        if (saved !== null) return saved === 'true';
      }
    } catch {
      // ignore
    }
    return false; // Default: show welcome entry screen first
  });
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [activeLessonTab, setActiveLessonTab] = useState<'tu_vung' | 'hoi_thoai' | 'van_hoa' | 'bai_tap' | 'hoc' | 'luyen' | 'choi' | 've_nha'>('tu_vung');
  const [isTeacherModeOpen, setIsTeacherModeOpen] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isVndModalOpen, setIsVndModalOpen] = useState(false);

  // 4. Teacher PIN (default 1234)
  const [teacherPin, setTeacherPin] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PIN);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return '1234';
  });

  // 5. Bilingual Mode
  const [bilingualMode, setBilingualModeState] = useState<'both' | 'vi' | 'en'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BILINGUAL) as 'both' | 'vi' | 'en';
      if (saved) return saved;
    } catch {
      // ignore
    }
    return 'both';
  });

  // 6. Streak calculation
  const [dailyStreak, setDailyStreak] = useState<number>(() => {
    try {
      const savedStreak = localStorage.getItem(STORAGE_KEY_STREAK);
      const lastVisit = localStorage.getItem(STORAGE_KEY_LAST_VISIT);
      const todayStr = new Date().toDateString();

      if (!lastVisit) {
        localStorage.setItem(STORAGE_KEY_LAST_VISIT, todayStr);
        localStorage.setItem(STORAGE_KEY_STREAK, '1');
        return 1;
      }

      if (lastVisit === todayStr) {
        return savedStreak ? parseInt(savedStreak, 10) : 1;
      }

      const lastDate = new Date(lastVisit);
      const todayDate = new Date(todayStr);
      const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        const newStreak = (savedStreak ? parseInt(savedStreak, 10) : 1) + 1;
        localStorage.setItem(STORAGE_KEY_LAST_VISIT, todayStr);
        localStorage.setItem(STORAGE_KEY_STREAK, newStreak.toString());
        return newStreak;
      } else {
        localStorage.setItem(STORAGE_KEY_LAST_VISIT, todayStr);
        localStorage.setItem(STORAGE_KEY_STREAK, '1');
        return 1;
      }
    } catch {
      return 1;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(familyMembers));
    } catch {}
  }, [familyMembers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_ID, activeProfileId);
    } catch {}
  }, [activeProfileId]);

  const activeProfile = useMemo(() => {
    return familyMembers.find((m) => m.id === activeProfileId) || familyMembers[0] || INITIAL_FAMILY_MEMBERS[0];
  }, [familyMembers, activeProfileId]);

  const setIsLoggedIn = useCallback((logged: boolean) => {
    setIsLoggedInState(logged);
    try {
      localStorage.setItem('hoc_tieng_viet_logged_in_v1', logged ? 'true' : 'false');
    } catch {}
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  const switchProfile = useCallback((memberId: string) => {
    setActiveProfileId(memberId);
    setIsLoggedInState(true);
    try {
      localStorage.setItem('hoc_tieng_viet_logged_in_v1', 'true');
    } catch {}
  }, []);

  const updateActiveProfile = useCallback((name: string, avatar: string) => {
    setFamilyMembers((prev) =>
      prev.map((m) => (m.id === activeProfileId ? { ...m, name: name.trim() || m.name, avatar } : m))
    );
  }, [activeProfileId]);

  const addClassStudent = useCallback((name: string, avatar: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const newId = `student-${Date.now()}`;
    const newStudent: FamilyMember = {
      id: newId,
      name: trimmed,
      vietnameseRole: 'Học viên',
      englishRole: 'Student',
      avatar: avatar || '🌸',
      points: 50,
      stamps: [1],
      completedHomework: [],
      quizHighScores: {}
    };
    setFamilyMembers((prev) => [...prev, newStudent]);
  }, []);

  const enterTeacherMode = useCallback(() => {
    setIsLoggedInState(true);
    setIsTeacherModeOpen(true);
    setMainView('teacher');
  }, []);

  const setBilingualMode = useCallback((mode: 'both' | 'vi' | 'en') => {
    setBilingualModeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY_BILINGUAL, mode);
    } catch {}
  }, []);

  const updateTeacherPin = useCallback((newPin: string): boolean => {
    if (!/^\d{4}$/.test(newPin)) return false;
    setTeacherPin(newPin);
    try {
      localStorage.setItem(STORAGE_KEY_PIN, newPin);
    } catch {}
    return true;
  }, []);

  const addPoints = useCallback((pointsToAdd: number, targetMemberId?: string) => {
    const idToUpdate = targetMemberId || activeProfileId;
    setFamilyMembers((prev) =>
      prev.map((member) => {
        if (member.id === idToUpdate) {
          return { ...member, points: Math.max(0, member.points + pointsToAdd) };
        }
        return member;
      })
    );
  }, [activeProfileId]);

  const awardStamp = useCallback((lessonId: number, targetMemberId?: string) => {
    const idToUpdate = targetMemberId || activeProfileId;
    setFamilyMembers((prev) =>
      prev.map((member) => {
        if (member.id === idToUpdate) {
          const currentStamps = member.stamps || [];
          if (!currentStamps.includes(lessonId)) {
            return {
              ...member,
              stamps: [...currentStamps, lessonId],
              points: member.points + 50
            };
          }
        }
        return member;
      })
    );
  }, [activeProfileId]);

  const toggleHomework = useCallback((taskId: string, targetMemberId?: string) => {
    const idToUpdate = targetMemberId || activeProfileId;
    setFamilyMembers((prev) =>
      prev.map((member) => {
        if (member.id === idToUpdate) {
          const completed = member.completedHomework || [];
          const isDone = completed.includes(taskId);
          const newCompleted = isDone
            ? completed.filter((id) => id !== taskId)
            : [...completed, taskId];
          return {
            ...member,
            completedHomework: newCompleted,
            points: isDone ? Math.max(0, member.points - 20) : member.points + 20
          };
        }
        return member;
      })
    );
  }, [activeProfileId]);

  const saveQuizScore = useCallback((lessonId: number, score: number, targetMemberId?: string) => {
    const idToUpdate = targetMemberId || activeProfileId;
    setFamilyMembers((prev) =>
      prev.map((member) => {
        if (member.id === idToUpdate) {
          const currentHigh = member.quizHighScores?.[lessonId] || 0;
          return {
            ...member,
            quizHighScores: {
              ...(member.quizHighScores || {}),
              [lessonId]: Math.max(currentHigh, score)
            }
          };
        }
        return member;
      })
    );
  }, [activeProfileId]);

  // Read URL params ?name=... on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name') || urlParams.get('user');
        if (nameParam) {
          const cleanName = decodeURIComponent(nameParam).trim();
          if (cleanName) {
            loginByName(cleanName);
          }
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const loginByName = useCallback((nameInput: string, avatar?: string, customType?: ProfileType) => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;

    // Check if matches existing profile
    const existing = familyMembers.find(
      (m) => m.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (existing) {
      if (avatar && avatar !== existing.avatar) {
        setFamilyMembers((prev) =>
          prev.map((m) => (m.id === existing.id ? { ...m, avatar } : m))
        );
      }
      setActiveProfileId(existing.id);
      setIsLoggedInState(true);
      try {
        localStorage.setItem('hoc_tieng_viet_logged_in_v1', 'true');
      } catch {}
      return;
    }

    // Otherwise create a new profile for this user
    const newId = `user-${Date.now()}`;
    const detectedType: ProfileType = customType || (trimmed.toLowerCase().includes('bé') ? 'be' : 'adult');
    const newMember: FamilyMember = {
      id: newId,
      name: trimmed,
      vietnameseRole: 'Học viên',
      englishRole: 'Learner',
      type: detectedType,
      age: 8,
      avatar: avatar || '🐰',
      points: 100,
      stamps: [1],
      completedHomework: [],
      quizHighScores: {}
    };

    setFamilyMembers((prev) => [...prev, newMember]);
    setActiveProfileId(newId);
    setIsLoggedInState(true);
    try {
      localStorage.setItem('hoc_tieng_viet_logged_in_v1', 'true');
    } catch {}
  }, [familyMembers]);

  const getPersonalShareLink = useCallback((memberName?: string) => {
    const targetName = memberName || activeProfile.name;
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('name', targetName);
      return url.toString();
    }
    return `?name=${encodeURIComponent(targetName)}`;
  }, [activeProfile]);

  const resetAllData = useCallback(() => {
    setFamilyMembers(INITIAL_FAMILY_MEMBERS);
    setActiveProfileId("learner-1");
    setTeacherPin("1234");
    setDailyStreak(1);
    try {
      localStorage.removeItem(STORAGE_KEY_MEMBERS);
      localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
      localStorage.removeItem(STORAGE_KEY_PIN);
      localStorage.removeItem(STORAGE_KEY_STREAK);
      localStorage.removeItem(STORAGE_KEY_LAST_VISIT);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => ({
    familyMembers,
    activeProfile,
    activeProfileId,
    currentLessonId,
    activeLessonTab,
    teacherPin,
    dailyStreak,
    bilingualMode,
    mainView,
    isLoggedIn,
    isTeacherModeOpen,
    isPassportOpen,
    isProfileModalOpen,
    isVndModalOpen,
    setIsLoggedIn,
    logout,
    setMainView,
    switchProfile,
    updateActiveProfile,
    addClassStudent,
    enterTeacherMode,
    setCurrentLessonId,
    setActiveLessonTab,
    addPoints,
    awardStamp,
    toggleHomework,
    updateTeacherPin,
    setBilingualMode,
    setIsTeacherModeOpen,
    setIsPassportOpen,
    setIsProfileModalOpen,
    setIsVndModalOpen,
    loginByName,
    getPersonalShareLink,
    saveQuizScore,
    resetAllData
  }), [
    familyMembers,
    activeProfile,
    activeProfileId,
    currentLessonId,
    activeLessonTab,
    teacherPin,
    dailyStreak,
    bilingualMode,
    mainView,
    isLoggedIn,
    isTeacherModeOpen,
    isPassportOpen,
    isProfileModalOpen,
    isVndModalOpen,
    setIsLoggedIn,
    logout,
    setMainView,
    switchProfile,
    updateActiveProfile,
    addClassStudent,
    enterTeacherMode,
    setCurrentLessonId,
    setActiveLessonTab,
    addPoints,
    awardStamp,
    toggleHomework,
    updateTeacherPin,
    setBilingualMode,
    setIsTeacherModeOpen,
    setIsPassportOpen,
    setIsProfileModalOpen,
    setIsVndModalOpen,
    loginByName,
    getPersonalShareLink,
    saveQuizScore,
    resetAllData
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
