export type ProfileType = 'member' | 'be' | 'teen' | 'adult';

export interface FamilyMember {
  id: string;
  name: string;
  vietnameseRole: string;
  englishRole: string;
  type?: ProfileType;
  age?: number;
  avatar: string;
  points: number;
  stamps: number[];
  completedHomework: string[];
  quizHighScores: Record<number, number>; // lessonId -> score (0 - 100)
}

export interface Flashcard {
  id: string;
  termVi: string; // Từ tiếng Việt (Nam Bộ)
  phonetic: string; // Phiên âm
  spellingFormula?: string; // Cách đánh vần e.g. "B - A ➔ BA" hay "C - A - CA - SẮC ➔ CÁ"
  meaningEn: string; // Nghĩa tiếng Anh
  northernNote?: string; // Ghi chú từ miền Bắc
  southernUsageTip?: string; // Cách dùng Nam Bộ
  emoji: string; // Hình ảnh / Icon minh họa
  exampleVi: string; // Câu ví dụ tiếng Việt
  exampleEn: string; // Câu ví dụ tiếng Anh
  audioUrl?: string;
  targetLevel?: string;
}

export type QuestionType = 'multiple_choice' | 'picture_word' | 'fill_blank' | 'cultural_riddle' | 'southern_vs_northern';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  promptVi: string;
  promptEn: string;
  pictureEmoji?: string; // Cho dạng nhìn hình đoán chữ
  options: string[];
  optionsEn?: string[];
  correctAnswer: string;
  explanationVi: string;
  explanationEn: string;
  northernContext?: string;
  audioHint?: string;
  forLevel?: string;
}

export interface CulturalStory {
  titleVi: string;
  titleEn: string;
  habitVi: string; // Thói quen đặc trưng
  habitEn: string;
  storyVi: string; // Câu chuyện văn hoá, lịch sự
  storyEn: string;
  politeTipVi: string; // Mẹo giao tiếp lịch thiệp
  politeTipEn: string;
  emoji: string;
  landmarkVi?: string;
}

export interface NumberItem {
  number: number;
  wordVi: string;
  phonetic: string;
  meaningEn: string;
  noteVi?: string;
  noteEn?: string;
  emoji?: string;
}

export interface HomeworkTask {
  id: string;
  titleVi: string;
  titleEn: string;
  scenarioVi: string;
  scenarioEn: string;
  points: number;
  saigonTip: string;
  saigonTipEn?: string;
  suitableFor?: string | string[];
}

export interface GameItem {
  id: string;
  question: string;
  questionEn: string;
  options: string[];
  correct: string;
  hint?: string;
  hintEn?: string;
  secondaryInfo?: string;
}

export interface TeacherSlide {
  id: number;
  titleVi: string;
  titleEn: string;
  phase: 'review' | 'new_content' | 'game' | 'talk_time' | 'wrap_up';
  contentVi: string[];
  contentEn: string[];
  teacherNotes: string;
  roleplayPrompts?: {
    be: string;
    teen: string;
    adult: string;
  };
}

export interface DialogueRole {
  id: string;
  nameVi: string;
  nameEn: string;
  avatar: string;
}

export interface DialogueLine {
  id: string;
  speakerId: string;
  speakerVi: string;
  speakerEn: string;
  avatar: string;
  textVi: string;
  textEn: string;
  phonetic?: string;
  audioUrl?: string;
  southernNote?: string;
  northernEquivalent?: string;
}

export interface Dialogue {
  id: string;
  titleVi: string;
  titleEn: string;
  contextVi: string;
  contextEn: string;
  landmarkVi: string;
  roles: DialogueRole[];
  lines: DialogueLine[];
  culturalTakeawayVi: string;
  culturalTakeawayEn: string;
}

export interface CulturalHeritageTerm {
  termVi: string;
  termEn: string;
  phonetic: string;
  explanationVi: string;
  explanationEn: string;
}

export interface CulturalHeritage {
  titleVi: string;
  titleEn: string;
  categoryVi: string;
  categoryEn: string;
  emoji: string;
  historyVi: string;
  historyEn: string;
  culturalSignificanceVi: string;
  culturalSignificanceEn: string;
  funFactVi: string;
  funFactEn: string;
  keyTerms: CulturalHeritageTerm[];
}

export interface Lesson {
  id: number;
  titleVi: string;
  titleEn: string;
  subtitleVi: string;
  subtitleEn: string;
  icon: string;
  themeColor: string;
  stampTitleVi: string;
  stampTitleEn: string;
  culturalStory?: CulturalStory;
  landmarkVi: string;
  landmarkEn: string;
  culturalTraitVi: string;
  culturalTraitEn: string;
  landmarkStoryVi: string;
  landmarkStoryEn: string;
  culturalHeritage?: CulturalHeritage;
  flashcards: Flashcard[];
  dialogue?: Dialogue;
  quiz: QuizQuestion[];
  gameTitleVi: string;
  gameTitleEn: string;
  gameDescriptionVi: string;
  gameDescriptionEn: string;
  gameItems: GameItem[];
  homework: HomeworkTask[];
  teacherSlides: TeacherSlide[];
}
