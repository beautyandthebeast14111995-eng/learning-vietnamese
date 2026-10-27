import React from 'react';
import { Lesson, HomeworkTask } from '../types';
import { useApp } from '../context/AppContext';
import { playVietnameseAudio } from '../utils/audio';
import { PronunciationRecorder } from './PronunciationRecorder';
import confetti from 'canvas-confetti';
import { CheckSquare, Square, Volume2, Sparkles, MapPin, CheckCircle2, Mic, Landmark } from 'lucide-react';

interface HomeworkTabProps {
  lesson: Lesson;
}

export const HomeworkTab: React.FC<HomeworkTabProps> = ({ lesson }) => {
  const { activeProfile, toggleHomework } = useApp();

  const handleToggle = (task: HomeworkTask) => {
    const isCompleted = activeProfile.completedHomework.includes(task.id);
    toggleHomework(task.id);

    if (!isCompleted) {
      playVietnameseAudio('Xuất sắc! Đã hoàn thành bài tập thu âm!');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleSpeakScenario = (task: HomeworkTask) => {
    playVietnameseAudio(task.scenarioVi);
  };

  const completedCount = lesson.homework.filter((t) =>
    activeProfile.completedHomework.includes(t.id)
  ).length;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>BÀI TẬP VỀ NHÀ / Homework: Voice Recording</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              {completedCount} / {lesson.homework.length} hoàn thành / done
            </span>
          </h3>
          <p className="text-xs text-slate-500">
            Thu âm giọng nói của bạn để luyện phát âm chuẩn · Record and compare with native Vietnamese pronunciation!
          </p>
        </div>
      </div>

      {/* Cultural Landmark Highlight for Homework */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center shrink-0">
          <Landmark className="w-5 h-5 text-amber-800" />
        </div>
        <div className="text-xs">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <span>Địa danh bài học / Lesson Landmark: {lesson.landmarkVi}</span>
          </div>
          <p className="text-slate-600 mt-0.5 leading-relaxed">
            {lesson.landmarkStoryVi}
          </p>
        </div>
      </div>

      {/* Homework Tasks List with Embedded Voice Recorders */}
      <div className="space-y-4">
        {lesson.homework.map((task) => {
          const isDone = activeProfile.completedHomework.includes(task.id);

          return (
            <div
              key={task.id}
              className={`p-5 rounded-3xl border-2 transition-all space-y-4 ${
                isDone
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => handleToggle(task)}
                    className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                    title={isDone ? 'Bỏ đánh dấu / Uncheck' : 'Đánh dấu đã hoàn thành / Check complete'}
                  >
                    {isDone ? (
                      <CheckSquare className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </button>

                  <div>
                    <h4
                      className={`text-base font-bold leading-tight ${
                        isDone ? 'text-emerald-950 line-through opacity-80' : 'text-slate-900'
                      }`}
                    >
                      {task.titleVi}
                    </h4>
                    <p className="text-xs text-slate-500 italic mt-0.5">
                      {task.titleEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSpeakScenario(task)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Nghe phát âm / Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono font-bold px-2 py-1 rounded-lg bg-amber-100 text-amber-900">
                    +{task.points} pts
                  </span>
                </div>
              </div>

              {/* Target phrase to record */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-amber-700" />
                  <span>Câu cần thu âm / Practice Phrase:</span>
                </div>
                <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  "{task.scenarioVi}"
                </p>
                <p className="text-slate-500 italic text-xs">
                  "{task.scenarioEn}"
                </p>
              </div>

              {/* Embedded Voice Recorder for this homework task! */}
              <div>
                <PronunciationRecorder modelText={task.scenarioVi} />
              </div>

              {/* Checkbox Action Button */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Bí kíp / Tip: {task.saigonTip}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggle(task)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isDone
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {isDone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Đã hoàn thành / Done</span>
                    </>
                  ) : (
                    <span>Xác nhận hoàn thành / Complete (+{task.points} pts)</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
