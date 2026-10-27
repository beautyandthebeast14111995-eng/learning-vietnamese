import { Lesson, FamilyMember } from '../types';
import { ENRICHED_LESSONS } from './enrichedLessons';

export const LESSONS_DATA: Lesson[] = ENRICHED_LESSONS;

export const CUTE_AVATARS = [
  { emoji: "🐰", nameVi: "Bé Thỏ", nameEn: "Bunny", bg: "bg-pink-100", border: "border-pink-300", text: "text-pink-700" },
  { emoji: "🐱", nameVi: "Mèo Con", nameEn: "Kitty", bg: "bg-amber-100", border: "border-amber-300", text: "text-amber-700" },
  { emoji: "🐻", nameVi: "Gấu Nhỏ", nameEn: "Bear", bg: "bg-orange-100", border: "border-orange-300", text: "text-orange-700" },
  { emoji: "🐼", nameVi: "Gấu Trúc", nameEn: "Panda", bg: "bg-emerald-100", border: "border-emerald-300", text: "text-emerald-700" },
  { emoji: "🦊", nameVi: "Cáo Cam", nameEn: "Fox", bg: "bg-rose-100", border: "border-rose-300", text: "text-rose-700" },
  { emoji: "🐣", nameVi: "Gà Con", nameEn: "Chick", bg: "bg-yellow-100", border: "border-yellow-300", text: "text-yellow-700" },
  { emoji: "🌸", nameVi: "Hoa Đào", nameEn: "Sakura", bg: "bg-pink-100", border: "border-pink-300", text: "text-pink-700" },
  { emoji: "🍓", nameVi: "Dâu Tây", nameEn: "Strawberry", bg: "bg-red-100", border: "border-red-300", text: "text-red-700" },
  { emoji: "🥑", nameVi: "Quả Bơ", nameEn: "Avocado", bg: "bg-emerald-100", border: "border-emerald-300", text: "text-emerald-700" },
  { emoji: "⭐", nameVi: "Ngôi Sao", nameEn: "Star", bg: "bg-purple-100", border: "border-purple-300", text: "text-purple-700" },
];

export const INITIAL_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "learner-1",
    name: "Bé Bắp",
    vietnameseRole: "Học viên",
    englishRole: "Learner",
    type: "be" as const,
    age: 8,
    avatar: "🐰",
    points: 120,
    stamps: [1],
    completedHomework: ["hw1-1"],
    quizHighScores: { 1: 100 }
  }
];
