export interface AlphabetLetter {
  letter: string;
  upper: string;
  lower: string;
  southernName: string; // Tên gọi theo kiểu miền Nam
  phonetic: string;
  exampleWordVi: string;
  exampleWordEn: string;
  emoji: string;
  type: 'vowel' | 'consonant';
  southernTip?: string;
}

export interface ToneInfo {
  nameVi: string;
  nameEn: string;
  symbol: string;
  pitchDescriptionVi: string;
  pitchDescriptionEn: string;
  southernSpecialNote: string;
  exampleSeries: {
    word: string;
    meaning: string;
    tone: string;
  }[];
}

export interface SouthernPronunciationRule {
  id: string;
  titleVi: string;
  titleEn: string;
  ruleVi: string;
  ruleEn: string;
  examples: {
    standard: string;
    southernSound: string;
    meaning: string;
  }[];
  explanation: string;
}

export interface SyllableComponent {
  initials: { symbol: string; name: string; sound: string }[];
  vowels: { symbol: string; sound: string; example: string }[];
  tones: { symbol: string; mark: string; name: string }[];
}

export const VIETNAMESE_ALPHABET: AlphabetLetter[] = [
  { letter: "A", upper: "A", lower: "a", southernName: "A", phonetic: "ah", exampleWordVi: "Áo", exampleWordEn: "Shirt", emoji: "👕", type: "vowel" },
  { letter: "Ă", upper: "Ă", lower: "ă", southernName: "Á", phonetic: "ah (short)", exampleWordVi: "Ăn cơm", exampleWordEn: "Eat rice", emoji: "🍚", type: "vowel", southernTip: "Nguyên âm ngắn, luôn đi cùng âm cuối." },
  { letter: "Â", upper: "Â", lower: "â", southernName: "Ớ", phonetic: "uh (short)", exampleWordVi: "Ấm trà", exampleWordEn: "Teapot", emoji: "🫖", type: "vowel" },
  { letter: "B", upper: "B", lower: "b", southernName: "Bê / Bờ", phonetic: "buh", exampleWordVi: "Ba", exampleWordEn: "Dad", emoji: "👨", type: "consonant" },
  { letter: "C", upper: "C", lower: "c", southernName: "Xê / Cờ", phonetic: "kuh", exampleWordVi: "Cá", exampleWordEn: "Fish", emoji: "🐟", type: "consonant" },
  { letter: "D", upper: "D", lower: "d", southernName: "Dê / Dờ", phonetic: "yuh", exampleWordVi: "Dù", exampleWordEn: "Umbrella", emoji: "☂️", type: "consonant", southernTip: "Ở miền Nam phát âm như chữ 'Y' trong tiếng Anh (yuh), không phát âm là zờ." },
  { letter: "Đ", upper: "Đ", lower: "đ", southernName: "Đê / Đờ", phonetic: "duh", exampleWordVi: "Đường", exampleWordEn: "Street / Sugar", emoji: "🛣️", type: "consonant" },
  { letter: "E", upper: "E", lower: "e", southernName: "E", phonetic: "eh", exampleWordVi: "Em út", exampleWordEn: "Youngest child", emoji: "🧒", type: "vowel" },
  { letter: "Ê", upper: "Ê", lower: "ê", southernName: "Ê", phonetic: "ay", exampleWordVi: "Ếch", exampleWordEn: "Frog", emoji: "🐸", type: "vowel" },
  { letter: "G", upper: "G", lower: "g", southernName: "Giê / Gờ", phonetic: "guh", exampleWordVi: "Gà", exampleWordEn: "Chicken", emoji: "🐔", type: "consonant" },
  { letter: "H", upper: "H", lower: "h", southernName: "Hát / Hờ", phonetic: "huh", exampleWordVi: "Hẻm", exampleWordEn: "Alley", emoji: "🏘️", type: "consonant" },
  { letter: "I", upper: "I", lower: "i", southernName: "I ngắn", phonetic: "ee", exampleWordVi: "Ít đường", exampleWordEn: "Less sugar", emoji: "📉", type: "vowel" },
  { letter: "K", upper: "K", lower: "k", southernName: "Ca / Cờ", phonetic: "kuh", exampleWordVi: "Kẹo", exampleWordEn: "Candy", emoji: "🍬", type: "consonant" },
  { letter: "L", upper: "L", lower: "l", southernName: "E-lờ / Lờ", phonetic: "luh", exampleWordVi: "Ly trà", exampleWordEn: "Glass of tea", emoji: "🥛", type: "consonant" },
  { letter: "M", upper: "M", lower: "m", southernName: "Em-mờ / Mờ", phonetic: "muh", exampleWordVi: "Má", exampleWordEn: "Mom", emoji: "👩", type: "consonant" },
  { letter: "N", upper: "N", lower: "n", southernName: "En-nờ / Nờ", phonetic: "nuh", exampleWordVi: "Nón", exampleWordEn: "Hat / Helmet", emoji: "⛑️", type: "consonant" },
  { letter: "O", upper: "O", lower: "o", southernName: "O", phonetic: "aw", exampleWordVi: "Ong", exampleWordEn: "Bee", emoji: "🐝", type: "vowel" },
  { letter: "Ô", upper: "Ô", lower: "ô", southernName: "Ô", phonetic: "oh", exampleWordVi: "Ốc", exampleWordEn: "Snails", emoji: "🐚", type: "vowel" },
  { letter: "Ơ", upper: "Ơ", lower: "ơ", southernName: "Ơ", phonetic: "uh", exampleWordVi: "Ớt", exampleWordEn: "Chili", emoji: "🌶️", type: "vowel" },
  { letter: "P", upper: "P", lower: "p", southernName: "Pê / Pờ", phonetic: "puh", exampleWordVi: "Phở", exampleWordEn: "Pho soup", emoji: "🍜", type: "consonant" },
  { letter: "Q", upper: "Q", lower: "q", southernName: "Quy / Quờ", phonetic: "kwuh", exampleWordVi: "Quẹo", exampleWordEn: "Turn (direction)", emoji: "↪️", type: "consonant", southernTip: "Luôn đi kèm chữ 'u' tạo thành 'qu' (quẹo phải, quà, quê)." },
  { letter: "R", upper: "R", lower: "r", southernName: "E-rờ / Rờ", phonetic: "ruh / guh", exampleWordVi: "Rau muống", exampleWordEn: "Morning glory greens", emoji: "🥬", type: "consonant", southernTip: "Người Nam phát âm nhẹ hoặc ngả sang 'gờ' nhẹ nhàng." },
  { letter: "S", upper: "S", lower: "s", southernName: "Ép-sì / Sờ nặng", phonetic: "sh / s", exampleWordVi: "Sài Gòn", exampleWordEn: "Saigon", emoji: "🏙️", type: "consonant", southernTip: "Người Nam uốn lưỡi rõ ràng phân biệt chữ 'S' và chữ 'X'." },
  { letter: "T", upper: "T", lower: "t", southernName: "Tê / Tờ", phonetic: "tuh", exampleWordVi: "Tiền", exampleWordEn: "Money", emoji: "💵", type: "consonant" },
  { letter: "U", upper: "U", lower: "u", southernName: "U", phonetic: "oo", exampleWordVi: "Uống nước", exampleWordEn: "Drink water", emoji: "🧃", type: "vowel" },
  { letter: "Ư", upper: "Ư", lower: "ư", southernName: "Ư", phonetic: "eu", exampleWordVi: "Ươm mầm", exampleWordEn: "Sprout", emoji: "🌱", type: "vowel" },
  { letter: "V", upper: "V", lower: "v", southernName: "Vê / Vờ", phonetic: "yuh / vuh", exampleWordVi: "Vui vẻ", exampleWordEn: "Joyful", emoji: "😄", type: "consonant", southernTip: "Đặc trưng lớn nhất của Nam Bộ: Chữ V phát âm ngả sang 'D' (về nhà -> dề nhà)." },
  { letter: "X", upper: "X", lower: "x", southernName: "Ích-xì / Xờ nhẹ", phonetic: "s (light)", exampleWordVi: "Xe máy", exampleWordEn: "Motorbike", emoji: "🛵", type: "consonant" },
  { letter: "Y", upper: "Y", lower: "y", southernName: "Y dài", phonetic: "ee", exampleWordVi: "Yêu thương", exampleWordEn: "Love", emoji: "❤️", type: "vowel" }
];

export const VIETNAMESE_TONES: ToneInfo[] = [
  {
    nameVi: "Thanh Ngang (Không dấu)",
    nameEn: "Flat / Level Tone",
    symbol: "—",
    pitchDescriptionVi: "Giọng đều, ngang, thư thái không lên không xuống.",
    pitchDescriptionEn: "Mid-level flat tone, calm and relaxed.",
    southernSpecialNote: "Người miền Nam phát âm thanh ngang rất tự nhiên, mềm và thả lỏng cơ miệng.",
    exampleSeries: [
      { word: "Ba", meaning: "Dad (Father)", tone: "Ngang" },
      { word: "Ma", meaning: "Ghost", tone: "Ngang" },
      { word: "Ca", meaning: "Sing / Cup", tone: "Ngang" }
    ]
  },
  {
    nameVi: "Thanh Huyền (Dấu \)",
    nameEn: "Falling Tone",
    symbol: "\\",
    pitchDescriptionVi: "Hạ thấp giọng nhẹ nhàng từ đầu đến cuối.",
    pitchDescriptionEn: "Gentle low falling pitch.",
    southernSpecialNote: "Trầm ấm, thường kéo dài êm ái hơn ở cuối câu.",
    exampleSeries: [
      { word: "Bà", meaning: "Grandmother", tone: "Huyền" },
      { word: "Mà", meaning: "But / That", tone: "Huyền" },
      { word: "Cà", meaning: "Eggplant / Coffee (cà phê)", tone: "Huyền" }
    ]
  },
  {
    nameVi: "Thanh Sắc (Dấu /)",
    nameEn: "High Rising Tone",
    symbol: "/",
    pitchDescriptionVi: "Lên cao vút và nhanh, âm thanh sáng.",
    pitchDescriptionEn: "Sharp high rising pitch.",
    southernSpecialNote: "Người Sài Gòn nói dấu sắc rất sáng và ngọt ngào (ví dụ: 'Má ơi!').",
    exampleSeries: [
      { word: "Bá", meaning: "Count / Senior uncle", tone: "Sắc" },
      { word: "Má", meaning: "Mom (Mother)", tone: "Sắc" },
      { word: "Cá", meaning: "Fish", tone: "Sắc" }
    ]
  },
  {
    nameVi: "Thanh Hỏi (Dấu ?) & Thanh Ngã (Dấu ~)",
    nameEn: "Southern Merged Dip Tone (Hỏi-Ngã nhập một)",
    symbol: "? / ~",
    pitchDescriptionVi: "ĐẶC TRƯNG MIỀN NAM: Người Nam Bộ đọc dấu Hỏi (?) và dấu Ngã (~) GIỐNG HỆT NHAU, chỉ hạ giọng nhẹ rồi hơi cong lên, KHÔNG ngắt cổ họng!",
    pitchDescriptionEn: "SOUTHERN TRADEMARK: In Southern Vietnamese, Hỏi (?) and Ngã (~) merge into the exact same melodic dipping tone. No harsh glottal stop!",
    southernSpecialNote: "Đây là bí quyết quan trọng nhất: khi học tiếng Sài Gòn, bạn không cần lo lắng về sự khác biệt giữa hỏi và ngã khi nói!",
    exampleSeries: [
      { word: "Bả", meaning: "Her / That lady (Bà ấy)", tone: "Hỏi" },
      { word: "Mã", meaning: "Appearance / Horse", tone: "Ngã (đọc như hỏi)" },
      { word: "Đã", meaning: "Satisfying / Past tense (Quá đã)", tone: "Ngã (đọc như hỏi)" }
    ]
  },
  {
    nameVi: "Thanh Nặng (Dấu .)",
    nameEn: "Low Dropped Tone",
    symbol: ".",
    pitchDescriptionVi: "Rơi nhanh xuống đáy, âm gọn và dứt khoát.",
    pitchDescriptionEn: "Heavy dropped low tone, short and curt.",
    southernSpecialNote: "Ở miền Nam, dấu nặng thường rơi rất sâu và ngắt nhanh, tạo sự khỏe khoắn (ví dụ: 'Dạ', 'Lại', 'Mẹ/Mạ').",
    exampleSeries: [
      { word: "Bạ", meaning: "Random (bạ đâu hay đó)", tone: "Nặng" },
      { word: "Mạ", meaning: "Young rice seedling", tone: "Nặng" },
      { word: "Dạ", meaning: "Polite yes in Southern speech", tone: "Nặng" }
    ]
  }
];

export const SOUTHERN_PRONUNCIATION_RULES: SouthernPronunciationRule[] = [
  {
    id: "rule-vd",
    titleVi: "Chữ 'V' phát âm thành 'D' (hoặc 'Dui/Dề')",
    titleEn: "Initial 'V' pronounced as 'D/Y'",
    ruleVi: "Người miền Nam hầu như không phát âm chữ 'V' răng cắn môi như tiếng Anh. Thay vào đó, chữ 'V' đọc nhẹ như chữ 'D' (âm 'y' lướt).",
    ruleEn: "Southerners rarely bite the lower lip for 'V'. Instead, 'V' softens into a smooth 'D/Y' sound.",
    examples: [
      { standard: "Về nhà", southernSound: "Dề nhà", meaning: "Go home" },
      { standard: "Vui vẻ", southernSound: "Dui dẻ", meaning: "Happy / Fun" },
      { standard: "Vào trong", southernSound: "Dô trong", meaning: "Go inside" },
      { standard: "Vâng lời", southernSound: "Dạ lời", meaning: "Obedient" }
    ],
    explanation: "Đây là nét đặc trưng số 1 của ngữ điệu Sài Gòn và miền Tây sông nước."
  },
  {
    id: "rule-hoi-nga",
    titleVi: "Dấu Hỏi (?) và Dấu Ngã (~) đọc gộp làm một",
    titleEn: "Dấu Hỏi and Dấu Ngã Sound Identical",
    ruleVi: "Không có sự phân biệt âm giữa hỏi và ngã khi nói. Cả hai đều đọc như một làn sóng hạ nhẹ rồi lên nhẹ, vô cùng êm tai.",
    ruleEn: "No acoustic difference in speech. Both dip softly and rise gently, eliminating stressful glottal snaps.",
    examples: [
      { standard: "Quá đã (ngã)", southernSound: "Quá đả (hỏi)", meaning: "Super awesome!" },
      { standard: "Nghĩ ngợi (ngã)", southernSound: "Nghỉ ngợi (hỏi)", meaning: "Thinking" },
      { standard: "Sữa đá (ngã)", southernSound: "Sửa đá (hỏi)", meaning: "Iced milk coffee" }
    ],
    explanation: "Người nước ngoài học tiếng Việt ở Sài Gòn đỡ được 50% độ khó của thanh điệu nhờ quy tắc này!"
  },
  {
    id: "rule-n-ng",
    titleVi: "Âm cuối -n chuyển thành -ng",
    titleEn: "Final -n shifts toward -ng",
    ruleVi: "Các vần kết thúc bằng -n (an, ăn, ơn, un) khi nói nhanh ở miền Nam thường mở rộng vòm họng thành -ng.",
    ruleEn: "Final -n rhymes (an, ăn, ơn) frequently broaden into -ng in natural conversation.",
    examples: [
      { standard: "Ăn cơm", southernSound: "Ăng cơm", meaning: "Eat rice" },
      { standard: "Ban ngày", southernSound: "Bang ngày", meaning: "Daytime" },
      { standard: "Cảm ơn", southernSound: "Cảm ơng", meaning: "Thank you" }
    ],
    explanation: "Khiến giọng nói Sài Gòn nghe rất tròn vành, hào sảng."
  },
  {
    id: "rule-t-c",
    titleVi: "Âm cuối -t chuyển thành -c",
    titleEn: "Final -t shifts toward -c",
    ruleVi: "Các từ có vần -at, -ăt, -ât ở Nam Bộ thường đọc như -ac, -ăc, -âc.",
    ruleEn: "Words ending with -at/-ăt/-ât often sound like -ac/-ăc/-âc in the South.",
    examples: [
      { standard: "Mắt (eyes)", southernSound: "Mắc (như mắc áo)", meaning: "Eyes" },
      { standard: "Bát (bowl)", southernSound: "Bác (nhưng người Nam dùng 'chén')", meaning: "Bowl" },
      { standard: "Hát (sing)", southernSound: "Hác", meaning: "Sing" }
    ],
    explanation: "Đó là lý do 'Mắc quá' (đắt) và 'Đôi mắt' nghe rất gần gũi trong phương ngữ Nam."
  }
];

export const SYLLABLE_COMPONENTS: SyllableComponent = {
  initials: [
    { symbol: "b", name: "Bờ", sound: "b" },
    { symbol: "c", name: "Cờ", sound: "k" },
    { symbol: "d", name: "Dờ (âm y)", sound: "y" },
    { symbol: "đ", name: "Đờ", sound: "d" },
    { symbol: "m", name: "Mờ", sound: "m" },
    { symbol: "n", name: "Nờ", sound: "n" },
    { symbol: "s", name: "Sờ (uốn lưỡi)", sound: "sh" },
    { symbol: "t", name: "Tờ", sound: "t" },
    { symbol: "th", name: "Thờ", sound: "th" },
    { symbol: "qu", name: "Quờ", sound: "kw" },
    { symbol: "ng", name: "Ngờ", sound: "ng" }
  ],
  vowels: [
    { symbol: "a", sound: "ah", example: "ba, má" },
    { symbol: "an", sound: "ang", example: "bàn, bạn" },
    { symbol: "am", sound: "ahm", example: "cám, lam" },
    { symbol: "ay", sound: "eye", example: "tay, bay" },
    { symbol: "e", sound: "eh", example: "mẹ, me" },
    { symbol: "ê", sound: "ay", example: "bê, về" },
    { symbol: "i", sound: "ee", example: "đi, mì" },
    { symbol: "o", sound: "aw", example: "bò, có" },
    { symbol: "ô", sound: "oh", example: "cô, phố" },
    { symbol: "u", sound: "oo", example: "dù, thú" },
    { symbol: "ơm", sound: "uhm", example: "cơm, thơm" }
  ],
  tones: [
    { symbol: "", mark: "Không dấu (Ngang)", name: "Ngang" },
    { symbol: "huyen", mark: "Dấu Huyền (`)", name: "Huyền" },
    { symbol: "sac", mark: "Dấu Sắc (´)", name: "Sắc" },
    { symbol: "hoi", mark: "Dấu Hỏi (?)", name: "Hỏi" },
    { symbol: "nga", mark: "Dấu Ngã (~)", name: "Ngã (đọc như hỏi)" },
    { symbol: "nang", mark: "Dấu Nặng (.)", name: "Nặng" }
  ]
};

// Syllable blending lookup logic
export function blendVietnameseSyllable(initial: string, vowel: string, tone: string): { word: string; spellingFormula: string } {
  // Mapping tone onto vowel
  const toneMap: Record<string, Record<string, string>> = {
    "": { a: "a", an: "an", am: "am", ay: "ay", e: "e", ê: "ê", i: "i", o: "o", ô: "ô", u: "u", ơm: "ơm" },
    "huyen": { a: "à", an: "àn", am: "àm", ay: "ày", e: "è", ê: "ề", i: "ì", o: "ò", ô: "ồ", u: "ù", ơm: "ờm" },
    "sac": { a: "á", an: "án", am: "ám", ay: "áy", e: "é", ê: "ế", i: "í", o: "ó", ô: "ố", u: "ú", ơm: "ớm" },
    "hoi": { a: "ả", an: "ản", am: "ảm", ay: "ảy", e: "ẻ", ê: "ể", i: "ỉ", o: "ỏ", ô: "ổ", u: "ủ", ơm: "ởm" },
    "nga": { a: "ã", an: "ãn", am: "ãm", ay: "ãy", e: "ẽ", ê: "ễ", i: "ĩ", o: "õ", ô: "ỗ", u: "ũ", ơm: "ỡm" },
    "nang": { a: "ạ", an: "ạn", am: "ạm", ay: "ạy", e: "ẹ", ê: "ệ", i: "ị", o: "ọ", ô: "ộ", u: "ụ", ơm: "ợm" }
  };

  const vowelWithTone = (toneMap[tone] && toneMap[tone][vowel]) || vowel;
  const word = `${initial}${vowelWithTone}`;

  // Phonics spelling formula e.g. "Bờ - A - BA - Sắc - BÁ"
  const toneName = tone === "huyen" ? "Huyền" : tone === "sac" ? "Sắc" : tone === "hoi" ? "Hỏi" : tone === "nga" ? "Ngã" : tone === "nang" ? "Nặng" : "";
  const formula = toneName
    ? `${initial.toUpperCase()} - ${vowel.toUpperCase()} - ${initial.toUpperCase()}${vowel.toUpperCase()} - ${toneName.toUpperCase()} ➔ ${word.toUpperCase()}`
    : `${initial.toUpperCase()} - ${vowel.toUpperCase()} ➔ ${word.toUpperCase()}`;

  return { word, spellingFormula: formula };
}

export const VIETNAMESE_NUMBERS = [
  { number: 0, wordVi: "Không", phonetic: "khom", meaningEn: "Zero", emoji: "0️⃣", noteVi: "Số không" },
  { number: 1, wordVi: "Một", phonetic: "moht", meaningEn: "One", emoji: "1️⃣", noteVi: "Đứng riêng đọc là một" },
  { number: 2, wordVi: "Hai", phonetic: "high", meaningEn: "Two", emoji: "2️⃣", noteVi: "Người Nam hay gọi anh hai, chị hai" },
  { number: 3, wordVi: "Ba", phonetic: "bah", meaningEn: "Three", emoji: "3️⃣", noteVi: "Cùng âm với từ 'Ba' (Bố)" },
  { number: 4, wordVi: "Bốn / Tư", phonetic: "boh-n / too", meaningEn: "Four", emoji: "4️⃣", noteVi: "Từ 24 trở lên đọc là 'hai mươi tư'" },
  { number: 5, wordVi: "Năm / Lăm", phonetic: "nah-m / lah-m", meaningEn: "Five", emoji: "5️⃣", noteVi: "Từ 15, 25 đọc là 'mười lăm', 'hai mươi lăm'" },
  { number: 6, wordVi: "Sáu", phonetic: "sow", meaningEn: "Six", emoji: "6️⃣", noteVi: "Uốn lưỡi nhẹ" },
  { number: 7, wordVi: "Bảy", phonetic: "bye", meaningEn: "Seven", emoji: "7️⃣", noteVi: "Nam Bộ phát âm dấu hỏi êm" },
  { number: 8, wordVi: "Tám", phonetic: "tahm", meaningEn: "Eight", emoji: "8️⃣", noteVi: "Thanh sắc lên giọng" },
  { number: 9, wordVi: "Chín", phonetic: "cheen", meaningEn: "Nine", emoji: "9️⃣", noteVi: "Số 9 may mắn" },
  { number: 10, wordVi: "Mười", phonetic: "moo-ee", meaningEn: "Ten", emoji: "🔟", noteVi: "Tròn một chục" },
  { number: 20, wordVi: "Hai mươi / Hai chục", phonetic: "high mooy / high chook", meaningEn: "Twenty", emoji: "2️⃣0️⃣", noteVi: "Người Nam rất hay dùng từ 'chục' (hai chục, ba chục)" },
  { number: 21, wordVi: "Hai mươi mốt", phonetic: "high mooy moht", meaningEn: "Twenty-one", emoji: "2️⃣1️⃣", noteVi: "Số 1 ở hàng đơn vị đổi thành 'mốt'" },
  { number: 50, wordVi: "Năm mươi / Năm chục", phonetic: "nahm mooy / nahm chook", meaningEn: "Fifty", emoji: "5️⃣0️⃣", noteVi: "50 ngàn đồng = năm chục ngàn" },
  { number: 100, wordVi: "Một trăm", phonetic: "moht chahm", meaningEn: "One hundred", emoji: "💯", noteVi: "100 ngàn = một trăm ngàn" },
  { number: 1000, wordVi: "Một ngàn", phonetic: "moht ngahn", meaningEn: "One thousand (VND)", emoji: "💵", noteVi: "Nam Bộ luôn gọi là 'ngàn' (không gọi là 'nghìn')" }
];
