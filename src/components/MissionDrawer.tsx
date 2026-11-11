import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  GitBranch,
  AlertTriangle,
  Award,
  Sparkles,
  Info,
  Car,
  User,
  Compass,
  Crosshair,
  Lock,
  Unlock,
  ChevronRight,
  ShieldAlert,
  Flame,
  FileText,
  Disc3,
  Radio
} from 'lucide-react';
import { QuestNode } from '../types/quest';

interface MissionDrawerProps {
  quest: QuestNode | null;
  isOpen: boolean;
  onClose: () => void;
  isCompleted: boolean;
  onToggleCompleted: (questId: string) => void;
  selectedChoiceId?: string;
  onSelectChoice: (questId: string, choiceId: string) => void;
  spoilerMode: boolean;
  onNavigateToCharacter?: (characterId: string) => void;
  onNavigateToVehicle?: (vehicleId: string) => void;
}

export const MissionDrawer: React.FC<MissionDrawerProps> = ({
  quest,
  isOpen,
  onClose,
  isCompleted,
  onToggleCompleted,
  selectedChoiceId,
  onSelectChoice,
  spoilerMode,
  onNavigateToCharacter,
  onNavigateToVehicle,
}) => {
  const [localSpoilerRevealed, setLocalSpoilerRevealed] = useState(false);

  if (!isOpen || !quest) return null;

  const showSpoiler = !spoilerMode || localSpoilerRevealed;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-[#0d1117] border-l border-[#30363d] h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header HUD bar */}
        <div className="px-5 py-4 border-b border-[#21262d] bg-[#161b22] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 text-[11px] font-mono uppercase bg-amber-500/15 border border-amber-500/40 text-amber-300 rounded">
              {quest.actLabel}
            </span>
            {quest.isBranchPoint && (
              <span className="px-2 py-0.5 text-[11px] font-mono uppercase bg-red-950/70 border border-red-500/40 text-red-300 rounded flex items-center gap-1">
                <GitBranch className="w-3 h-3 text-red-400" />
                關鍵分岔點
              </span>
            )}
            {quest.isPointOfNoReturn && (
              <span className="px-2 py-0.5 text-[11px] font-mono uppercase bg-purple-950/80 border border-purple-500/50 text-purple-300 rounded flex items-center gap-1 animate-pulse">
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                無退路點
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Mark as Completed Button */}
            <button
              onClick={() => onToggleCompleted(quest.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                isCompleted
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30'
                  : 'bg-[#21262d] border border-[#30363d] text-neutral-300 hover:text-white hover:border-amber-500/50'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>已完成</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-neutral-500" />
                  <span>標記完成</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#21262d] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Mission Main Titles */}
          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              MISSION PROTOCOL // {quest.id}
            </div>
            <h2 className="text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              {quest.title}
            </h2>
            <div className="text-sm font-mono text-amber-400/80 mt-0.5">
              {quest.titleEn}
            </div>
          </div>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
            {quest.associatedNpc && (
              <div className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
                <div className="text-neutral-500 flex items-center gap-1">
                  <User className="w-3 h-3 text-cyan-400" />
                  關聯人物
                </div>
                <div className="font-semibold text-neutral-200 mt-0.5 truncate">
                  {quest.associatedNpc}
                </div>
              </div>
            )}
            <div className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
              <div className="text-neutral-500 flex items-center gap-1">
                <GitBranch className="w-3 h-3 text-amber-400" />
                分支類型
              </div>
              <div className="font-semibold text-neutral-200 mt-0.5">
                {quest.isBranchPoint ? '影響重大後續走向' : '標準推進主線'}
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
              <div className="text-neutral-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                前置任務數
              </div>
              <div className="font-semibold text-neutral-200 mt-0.5">
                {quest.prerequisites.length > 0 ? `${quest.prerequisites.length} 個前置` : '初始開放任務'}
              </div>
            </div>
          </div>

          {/* SECTION 1: 委託起源與情勢背景 (Enriched Background Context) */}
          {quest.backgroundContext && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>委託起源與情勢背景</span>
              </div>
              <div className="p-3.5 rounded bg-[#161b22] border-l-2 border-amber-500/80 border-r border-t border-b border-[#21262d] text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {quest.backgroundContext}
              </div>
            </div>
          )}

          {/* SECTION 2: 作戰階段與行動流程 (Enriched Tactical Objectives) */}
          {quest.tacticalObjectives && quest.tacticalObjectives.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                <Crosshair className="w-4 h-4 text-cyan-400" />
                <span>作戰階段與行動流程</span>
              </div>
              <div className="space-y-2">
                {quest.tacticalObjectives.map((objective, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-[#161b22] border border-[#21262d] hover:border-cyan-500/30 transition-colors flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded shrink-0 bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
                      {objective}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: 實地探索與避坑要點 (Enriched Exploration Secrets) */}
          {quest.explorationSecrets && quest.explorationSecrets.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>實地探索、隱藏收集與避坑提示</span>
              </div>
              <div className="p-3.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 space-y-2 text-xs sm:text-sm">
                {quest.explorationSecrets.map((secret, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{secret}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: 劇情概要 (Story Synopsis with Spoiler Protection) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                <Info className="w-4 h-4 text-neutral-400" />
                <span>任務概要與劇情走向</span>
              </div>
              {spoilerMode && !localSpoilerRevealed && (
                <button
                  onClick={() => setLocalSpoilerRevealed(true)}
                  className="text-[11px] font-mono text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
                >
                  <Unlock className="w-3 h-3" />
                  揭開本任務防劇透遮罩
                </button>
              )}
            </div>

            <div className="p-3.5 rounded bg-[#161b22] border border-[#21262d] text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>{quest.summary}</p>

              {showSpoiler ? (
                <div className="mt-3 pt-3 border-t border-[#30363d] text-amber-200/90 bg-amber-950/20 p-2.5 rounded border border-amber-500/20">
                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    深層劇情透析與事件真相
                  </div>
                  <p>{quest.spoilerSummary}</p>
                </div>
              ) : (
                <div className="mt-3 p-2.5 rounded bg-[#0d1117] border border-[#21262d] text-neutral-500 text-xs italic flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-neutral-400" />
                    深層反轉情報已受防劇透協議保護
                  </span>
                  <button
                    onClick={() => setLocalSpoilerRevealed(true)}
                    className="text-amber-400 not-italic hover:underline text-[11px] font-mono"
                  >
                    點擊解鎖
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 5: 關鍵分岔抉擇 (Interactive Branch Choices) */}
          {quest.choices && quest.choices.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  <GitBranch className="w-4 h-4 text-red-400" />
                  <span>關鍵分岔與互斥抉擇（點選記錄進度）</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  {selectedChoiceId ? '已選擇分支' : '未指定抉擇'}
                </span>
              </div>

              <div className="space-y-3">
                {quest.choices.map((choice) => {
                  const isSelected = selectedChoiceId === choice.id;

                  return (
                    <div
                      key={choice.id}
                      onClick={() => onSelectChoice(quest.id, choice.id)}
                      className={`p-4 rounded border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40'
                          : 'bg-[#161b22] border-[#30363d] hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400'
                                : 'border-neutral-500 bg-transparent'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                          <div>
                            <h4
                              className={`text-sm font-bold ${
                                isSelected ? 'text-amber-300' : 'text-neutral-100'
                              }`}
                            >
                              {choice.label}
                            </h4>
                            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                              {choice.description}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-amber-500 text-black font-bold rounded shrink-0">
                            已選定
                          </span>
                        )}
                      </div>

                      {/* Consequences & Impact */}
                      <div className="mt-3 pl-6 space-y-1.5">
                        {choice.consequences.map((cons, cIdx) => (
                          <div
                            key={cIdx}
                            className="text-xs text-neutral-300 flex items-center gap-1.5 font-mono"
                          >
                            <span className="text-cyan-400">►</span>
                            <span>{cons}</span>
                          </div>
                        ))}

                        {showSpoiler && choice.spoilerDetail && (
                          <div className="mt-2 text-xs p-2 rounded bg-black/40 border border-neutral-700 text-neutral-300">
                            <span className="font-bold text-amber-400 font-mono mr-1">
                              【分支後果分析】
                            </span>
                            {choice.spoilerDetail}
                          </div>
                        )}

                        {choice.rewards && choice.rewards.length > 0 && (
                          <div className="mt-2 flex items-center flex-wrap gap-1.5">
                            {choice.rewards.map((rew, rIdx) => (
                              <span
                                key={rIdx}
                                className="px-2 py-0.5 text-[10px] font-mono bg-purple-950/60 border border-purple-500/40 text-purple-200 rounded flex items-center gap-1"
                              >
                                <Award className="w-3 h-3 text-purple-400" />
                                {rew}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 6: 不朽裝備與核心獎勵 */}
          {(quest.keyRewards?.length || quest.iconicGear?.length) ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                <Award className="w-4 h-4 text-purple-400" />
                <span>重要獎勵與獲取裝備</span>
              </div>
              <div className="p-3.5 rounded bg-[#161b22] border border-[#21262d] flex flex-wrap gap-2">
                {quest.iconicGear?.map((gear, gIdx) => (
                  <span
                    key={gIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-amber-500/10 border border-amber-500/40 text-amber-300 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {gear}
                  </span>
                ))}
                {quest.keyRewards?.map((reward, rIdx) => (
                  <span
                    key={rIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/40 border border-purple-500/40 text-purple-300 flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    {reward}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* SECTION 7: 實用通關技巧 */}
          {quest.tips && (
            <div className="p-3 rounded bg-blue-950/20 border border-blue-500/30 text-blue-200 text-xs sm:text-sm flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold font-mono mr-1">戰術指引：</span>
                {quest.tips}
              </div>
            </div>
          )}

          {/* SECTION 8: 搖滾曲目考據與樂團情懷 (Soundtrack Lore) */}
          {quest.soundtrackLore && (
            <div className="p-3.5 rounded-lg bg-gradient-to-r from-red-950/30 via-[#161b22] to-amber-950/30 border border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  <Disc3 className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>任務曲目名考據 // 搖滾魂電台</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-neutral-400 border border-neutral-700">
                  {quest.soundtrackLore.releaseYear}
                </span>
              </div>

              <div className="bg-[#0d1117] p-3 rounded border border-[#21262d] flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center shrink-0 text-amber-400">
                  <Radio className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-neutral-100 flex items-center gap-2">
                    <span>「{quest.soundtrackLore.songTitle}」</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    原唱樂團 / 藝人：{quest.soundtrackLore.artist}
                  </div>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed border-t border-[#21262d] pt-2">
                    {quest.soundtrackLore.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 border-t border-[#21262d] bg-[#161b22] flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
          <div>
            節點座標：Col {quest.gridPos.column}, Row {quest.gridPos.row}
          </div>
          <button
            onClick={() => onToggleCompleted(quest.id)}
            className="text-amber-400 hover:text-amber-300 underline"
          >
            {isCompleted ? '取消完成狀態' : '快速標記為已完成'}
          </button>
        </div>
      </div>
    </div>
  );
};
