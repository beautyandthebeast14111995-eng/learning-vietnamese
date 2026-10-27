import React, { useState } from 'react';
import {
  VIETNAMESE_ALPHABET,
  VIETNAMESE_TONES,
  SOUTHERN_PRONUNCIATION_RULES,
  SYLLABLE_COMPONENTS,
  VIETNAMESE_NUMBERS,
  blendVietnameseSyllable,
  AlphabetLetter
} from '../data/foundationsData';
import { playVietnameseAudio, stopAnyAudio } from '../utils/audio';
import {
  BookOpen,
  Volume2,
  Sparkles,
  Search,
  Filter,
  Layers,
  Music,
  Compass,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Check,
  Hash
} from 'lucide-react';

export const FoundationsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alphabet' | 'tones' | 'accent' | 'numbers' | 'spelling'>('alphabet');
  const [alphabetFilter, setAlphabetFilter] = useState<'all' | 'vowel' | 'consonant'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingItem, setPlayingItem] = useState<string | null>(null);

  // Interactive Syllable Builder State
  const [selectedInitial, setSelectedInitial] = useState(SYLLABLE_COMPONENTS.initials[4].symbol); // 'm'
  const [selectedVowel, setSelectedVowel] = useState(SYLLABLE_COMPONENTS.vowels[0].symbol); // 'a'
  const [selectedTone, setSelectedTone] = useState("sac"); // 'sac' -> 'má'

  const blendedResult = blendVietnameseSyllable(selectedInitial, selectedVowel, selectedTone);

  const handlePlayAudio = (text: string, id: string) => {
    setPlayingItem(id);
    playVietnameseAudio(text, undefined, () => {
      setPlayingItem(null);
    });
  };

  const handlePlaySpellingPhonics = () => {
    const initialName = SYLLABLE_COMPONENTS.initials.find(i => i.symbol === selectedInitial)?.name || selectedInitial;
    const toneName = SYLLABLE_COMPONENTS.tones.find(t => t.symbol === selectedTone)?.name || '';
    const textToSpeak = `${initialName}, ${selectedVowel}, ${selectedInitial}${selectedVowel}, ${toneName}, ${blendedResult.word}`;
    setPlayingItem('spelling-builder');
    playVietnameseAudio(textToSpeak, undefined, () => {
      setPlayingItem(null);
    });
  };

  const filteredAlphabet = VIETNAMESE_ALPHABET.filter((item) => {
    const matchesFilter = alphabetFilter === 'all' || item.type === alphabetFilter;
    const matchesSearch =
      item.letter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.southernName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleWordVi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-purple-100/80 via-pink-50/70 to-white rounded-4xl p-6 sm:p-8 border-2 border-purple-200 shadow-cute space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black">
          <span>🔤 Kiến Thức Nền Tảng</span>
          <span>•</span>
          <span>Vietnamese Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
          Bảng Chữ Cái, Dấu Thanh, Ngữ Điệu & Số Đếm / Alphabet, Tones & Numbers
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
          Nền tảng phát âm chuẩn: bấm vào chữ hoặc số bất kỳ để nghe âm thanh đọc mẫu · Tap any letter or number to hear audio.
        </p>
      </div>

      {/* 5 Pastel Navigation Tabs */}
      <div className="flex items-center p-1.5 rounded-3xl bg-white border-2 border-pink-100 gap-1 overflow-x-auto shadow-cute">
        <button
          type="button"
          onClick={() => setActiveTab('alphabet')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'alphabet'
              ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🔤 Chữ Cái / Alphabet (29)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tones')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'tones'
              ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Music className="w-3.5 h-3.5" />
          <span>6 Dấu Thanh / 6 Tones</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('accent')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'accent'
              ? 'bg-gradient-to-r from-sky-400 to-blue-400 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Ngữ Điệu / Accent</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('numbers')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'numbers'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Hash className="w-3.5 h-3.5" />
          <span>Số Đếm / Numbers & Money</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('spelling')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'spelling'
              ? 'bg-gradient-to-r from-purple-400 to-violet-400 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ghép Âm / Phonics</span>
        </button>
      </div>

      {/* TAB 1: ALPHABET */}
      {activeTab === 'alphabet' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap bg-white p-4 rounded-3xl border-2 border-pink-100 shadow-xs">
            <div className="flex items-center gap-1 p-1 bg-pink-50 rounded-2xl border border-pink-200">
              <button
                type="button"
                onClick={() => setAlphabetFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  alphabetFilter === 'all' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Tất cả / All (29)
              </button>
              <button
                type="button"
                onClick={() => setAlphabetFilter('vowel')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  alphabetFilter === 'vowel' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Nguyên âm / Vowels (12)
              </button>
              <button
                type="button"
                onClick={() => setAlphabetFilter('consonant')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  alphabetFilter === 'consonant' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Phụ âm / Consonants (17)
              </button>
            </div>

            <div className="relative min-w-[200px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm chữ cái hoặc từ ví dụ... / Search letters or words..."
                className="w-full pl-9 pr-3 py-2 text-xs font-bold rounded-2xl bg-pink-50/50 border border-pink-200 focus:outline-none focus:border-rose-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredAlphabet.map((item) => {
              const isPlaying = playingItem === item.letter;
              return (
                <div
                  key={item.letter}
                  onClick={() => handlePlayAudio(`${item.southernName}. ${item.exampleWordVi}`, item.letter)}
                  className={`p-4 rounded-3xl border-2 transition-all cursor-pointer bg-white flex flex-col justify-between space-y-2 hover:-translate-y-1 ${
                    isPlaying
                      ? 'border-amber-400 bg-amber-50 shadow-md ring-2 ring-amber-300'
                      : 'border-pink-100 hover:border-pink-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-800 font-mono">
                      {item.upper} {item.lower}
                    </span>
                    <span className="text-xl">{item.emoji}</span>
                  </div>

                  <div>
                    <div className="text-xs font-black text-rose-600">
                      Tên / Name: {item.southernName}
                    </div>
                    <div className="text-[11px] font-bold text-slate-700 mt-0.5">
                      {item.exampleWordVi} <span className="text-slate-400 font-normal">({item.exampleWordEn})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-pink-50">
                    <span className="text-[9px] font-mono text-slate-400">/{item.phonetic}/</span>
                    <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-amber-600 animate-bounce' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TONES */}
      {activeTab === 'tones' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl bg-amber-50 border-2 border-amber-200 text-xs text-amber-900 font-semibold">
            💡 <strong>Đặc trưng dấu thanh / Tones Guide:</strong> Dấu thanh tạo nên cao độ và âm điệu tự nhiên của tiếng Việt · Vietnamese tones shape pitch, emotion and word meaning.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {VIETNAMESE_TONES.map((tone, idx) => {
              const isPlaying = playingItem === tone.nameVi;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-4xl bg-white border-2 border-pink-100 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-rose-500 p-2 rounded-2xl bg-rose-50 border border-rose-200">
                      {tone.symbol}
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(tone.exampleSeries.map(s => s.word).join(', '), tone.nameVi)}
                      className="p-2 rounded-2xl bg-pink-100 hover:bg-pink-200 text-pink-700 transition-colors cursor-pointer"
                      title="Nghe chuỗi từ ví dụ / Listen to examples"
                    >
                      <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-800">{tone.nameVi}</h3>
                    <p className="text-xs text-rose-600 font-semibold">{tone.nameEn}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{tone.pitchDescriptionVi}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs space-y-1">
                    <span className="font-bold text-slate-700 text-[11px] block">Từ ví dụ / Examples:</span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {tone.exampleSeries.map((ex, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => handlePlayAudio(ex.word, `${tone.nameVi}-${sIdx}`)}
                          className="px-2 py-1 rounded-xl bg-white border border-pink-200 hover:border-rose-400 text-xs font-black text-slate-800 cursor-pointer"
                        >
                          {ex.word}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: ACCENT & SOUTHERN INTONATION */}
      {activeTab === 'accent' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOUTHERN_PRONUNCIATION_RULES.map((rule) => (
              <div
                key={rule.id}
                className="p-5 rounded-4xl bg-white border-2 border-pink-100 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-800">{rule.titleVi}</h3>
                    <p className="text-xs text-sky-600 font-semibold">{rule.titleEn}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {rule.ruleVi}
                </p>

                <div className="space-y-2 pt-2 border-t border-pink-50">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Ví dụ thực tế / Practical Examples:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {rule.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        onClick={() => handlePlayAudio(ex.southernSound, `rule-${rule.id}-${exIdx}`)}
                        className="p-2.5 rounded-2xl bg-pink-50/40 border border-pink-100 hover:border-pink-300 transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-800">{ex.standard} ➔ <span className="text-rose-600 font-black">{ex.southernSound}</span></div>
                          <div className="text-[10px] text-slate-400">{ex.meaning}</div>
                        </div>
                        <Volume2 className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 text-[11px] text-amber-900 border border-amber-200">
                  💡 {rule.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: NUMBERS & CURRENCY */}
      {activeTab === 'numbers' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl bg-emerald-50 border-2 border-emerald-200 text-xs text-emerald-900 font-semibold space-y-1">
            <h3 className="font-black text-sm">💡 Quy tắc vàng đếm số & tiền tệ / Golden Rules for Numbers & Money:</h3>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
              <li><strong>Số 1 ở hàng đơn vị (từ 21 trở lên):</strong> Đọc là <em>Mốt</em> (hai mươi mốt, ba mươi mốt).</li>
              <li><strong>Số 4 ở hàng đơn vị:</strong> Đọc là <em>Tư</em> (hai mươi tư, ba mươi tư).</li>
              <li><strong>Số 5 ở hàng đơn vị:</strong> Đọc là <em>Lăm</em> (mười lăm, hai mươi lăm).</li>
              <li><strong>Tiền tệ:</strong> Luôn nói <em>Ngàn</em> (thay vì 'nghìn') và thích đếm hàng <em>Chục</em> (hai chục ngàn, năm chục ngàn).</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {VIETNAMESE_NUMBERS.map((num, idx) => {
              const isPlaying = playingItem === `num-${num.number}`;
              return (
                <div
                  key={idx}
                  onClick={() => handlePlayAudio(num.wordVi, `num-${num.number}`)}
                  className={`p-4 rounded-3xl border-2 transition-all cursor-pointer bg-white flex flex-col justify-between space-y-2 hover:-translate-y-1 ${
                    isPlaying
                      ? 'border-emerald-400 bg-emerald-50 shadow-md ring-2 ring-emerald-300'
                      : 'border-pink-100 hover:border-emerald-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-emerald-700">
                      {num.number.toLocaleString('vi-VN')}
                    </span>
                    <span className="text-xl">{num.emoji}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-800">{num.wordVi}</h4>
                    <p className="text-[11px] text-slate-400 font-mono">/{num.phonetic}/</p>
                    <p className="text-xs text-emerald-700 font-semibold">{num.meaningEn}</p>
                  </div>

                  {num.noteVi && (
                    <div className="text-[10px] text-slate-500 pt-1 border-t border-pink-50">
                      {num.noteVi}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 5: INTERACTIVE PHONICS SPELLING BUILDER */}
      {activeTab === 'spelling' && (
        <div className="bg-white rounded-4xl p-6 sm:p-8 border-2 border-purple-200 shadow-cute space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Bộ Ghép Vần Tự Động / Interactive Phonics & Spelling Builder
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              Tập Đánh Vần Tiếng Việt / Practice Vietnamese Phonics
            </h3>
            <p className="text-xs text-slate-500">
              Chọn phụ âm đầu, nguyên âm và dấu thanh để nghe cách đánh vần chuẩn từng bước · Select initial, vowel & tone to hear spelling!
            </p>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 1. Initials */}
            <div className="p-4 rounded-3xl bg-pink-50/50 border border-pink-200 space-y-2">
              <span className="text-xs font-black text-pink-800 block">1. Âm đầu / Initial consonant:</span>
              <div className="grid grid-cols-4 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {SYLLABLE_COMPONENTS.initials.map((init) => (
                  <button
                    key={init.symbol}
                    type="button"
                    onClick={() => setSelectedInitial(init.symbol)}
                    className={`py-2 px-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      selectedInitial === init.symbol
                        ? 'bg-pink-500 text-white shadow-xs'
                        : 'bg-white hover:bg-pink-100 text-slate-700'
                    }`}
                  >
                    {init.symbol}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Vowels */}
            <div className="p-4 rounded-3xl bg-amber-50/50 border border-amber-200 space-y-2">
              <span className="text-xs font-black text-amber-800 block">2. Vần / Vowel:</span>
              <div className="grid grid-cols-4 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {SYLLABLE_COMPONENTS.vowels.map((v) => (
                  <button
                    key={v.symbol}
                    type="button"
                    onClick={() => setSelectedVowel(v.symbol)}
                    className={`py-2 px-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      selectedVowel === v.symbol
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'bg-white hover:bg-amber-100 text-slate-700'
                    }`}
                  >
                    {v.symbol}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Tones */}
            <div className="p-4 rounded-3xl bg-purple-50/50 border border-purple-200 space-y-2">
              <span className="text-xs font-black text-purple-800 block">3. Dấu thanh / Tone:</span>
              <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {SYLLABLE_COMPONENTS.tones.map((t) => (
                  <button
                    key={t.symbol}
                    type="button"
                    onClick={() => setSelectedTone(t.symbol)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-left truncate ${
                      selectedTone === t.symbol
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-white hover:bg-purple-100 text-slate-700'
                    }`}
                  >
                    {t.mark}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 border-2 border-purple-200 text-center space-y-3">
            <div className="text-4xl sm:text-6xl font-black text-purple-950 tracking-wide font-mono">
              {blendedResult.word}
            </div>

            <div className="text-xs sm:text-sm font-bold text-purple-800 font-mono">
              Cách đánh vần / Phonics spelling: <strong className="text-rose-600">{blendedResult.spellingFormula}</strong>
            </div>

            <button
              type="button"
              onClick={handlePlaySpellingPhonics}
              className="py-3 px-6 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs inline-flex items-center gap-2 shadow-cute transition-all active:scale-95 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Nghe Đánh Vần Mẫu / Listen to Phonics 🔊</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
