import React, { useState } from 'react';
import {
  Trophy,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  ChevronRight,
  Flame,
  Layers
} from 'lucide-react';
import { EndingStatus } from '../types/quest';

interface EndingsViewProps {
  endings: EndingStatus[];
  onNavigateToQuest?: (questId: string) => void;
}

export const EndingsView: React.FC<EndingsViewProps> = ({ endings, onNavigateToQuest }) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const baseGameEndings = endings.filter((e) => e.category === 'base_game');
  const dlcEndings = endings.filter((e) => e.category === 'phantom_liberty');

  const unlockedCount = endings.filter((e) => e.isUnlocked).length;

  const renderEndingCard = (ending: EndingStatus) => {
    return (
      <div
        key={ending.id}
        className={`p-5 rounded-lg border transition-all ${
          ending.isUnlocked
            ? 'bg-emerald-950/15 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
            : 'bg-[#161b22] border-[#30363d]'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 text-[10px] font-mono uppercase rounded border font-bold ${
                  ending.category === 'phantom_liberty'
                    ? 'bg-blue-950/60 border-blue-500/40 text-blue-300'
                    : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                }`}
              >
                {ending.category === 'phantom_liberty' ? '自由幻局 DLC' : '本體大結局'}
              </span>

              {ending.isUnlocked ? (
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-emerald-500 text-black font-bold rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  條件已達成
                </span>
              ) : (
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#21262d] text-neutral-400 rounded flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  尚未解鎖
                </span>
              )}
            </div>

            <h3
              className={`text-lg font-black mt-1.5 ${
                ending.isUnlocked ? 'text-emerald-200' : 'text-neutral-100'
              }`}
            >
              {ending.name}
            </h3>
            <div className="text-xs font-mono text-neutral-400">{ending.nameEn}</div>
          </div>
        </div>

        {/* Ending Lore & Epilogue Description */}
        <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed font-sans">
          {ending.description}
        </p>

        {/* Missing Requirements or Completed status */}
        {!ending.isUnlocked && ending.missingRequirements.length > 0 && (
          <div className="mt-4 p-3 rounded bg-red-950/20 border border-red-500/30 text-red-200 space-y-1">
            <div className="text-xs font-bold font-mono flex items-center gap-1 text-red-400">
              <AlertCircle className="w-3.5 h-3.5" />
              尚未滿足的觸發條件：
            </div>
            {ending.missingRequirements.map((req, rIdx) => (
              <div key={rIdx} className="text-xs font-mono pl-4 leading-relaxed">
                • {req}
              </div>
            ))}
          </div>
        )}

        {/* Key Conditions Breakdown */}
        <div className="mt-4 pt-3 border-t border-[#21262d] space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
            完整解鎖步驟協議：
          </div>
          {ending.keyConditions.map((cond, cIdx) => (
            <div
              key={cIdx}
              className="text-xs font-mono text-neutral-300 flex items-start gap-2 leading-relaxed"
            >
              <span className="text-cyan-400 mt-0.5">►</span>
              <span>{cond}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 max-w-5xl mx-auto w-full select-none">
      {/* Top Banner */}
      <div className="p-5 rounded-lg bg-[#161b22] border border-[#30363d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-black text-neutral-100">
              命運結局即時推導系統 (11 種結局)
            </h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            系統會根據您當前存檔中的主線推進、夥伴支線與分岔抉擇，自動推導各個結局是否具備解鎖資格。
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="text-right font-mono">
            <div className="text-2xl font-black text-amber-400">
              {unlockedCount} / {endings.length}
            </div>
            <div className="text-[10px] text-neutral-400 uppercase">當前存檔解鎖數</div>
          </div>
        </div>
      </div>

      {/* Base Game Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#21262d] pb-2">
          <Flame className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold font-mono text-neutral-200 uppercase tracking-wider">
            本體 6 大命運結局 (夜曲 Op55N1 天台衍生)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {baseGameEndings.map(renderEndingCard)}
        </div>
      </div>

      {/* Phantom Liberty Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-[#21262d] pb-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold font-mono text-neutral-200 uppercase tracking-wider">
            自由幻局 DLC 5 大終章 (頌鳥與李德陣營命運)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dlcEndings.map(renderEndingCard)}
        </div>
      </div>
    </div>
  );
};
