import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  Circle,
  GitBranch,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Award,
  Info,
  User,
  Filter
} from 'lucide-react';
import { QuestNode, QuestCategory } from '../types/quest';

interface ChecklistViewProps {
  quests: QuestNode[];
  completedQuestIds: string[];
  selectedChoiceIds: Record<string, string>;
  onSelectQuest: (quest: QuestNode) => void;
  onToggleQuestCompleted: (questId: string) => void;
  searchQuery: string;
}

interface GroupDefinition {
  id: string;
  title: string;
  categoryFilter: (q: QuestNode) => boolean;
  color: string;
}

const GROUPS: GroupDefinition[] = [
  {
    id: 'prologue_act1',
    title: '第 1 幕與序章 (Prologue & Act 1)',
    categoryFilter: (q) => q.category === 'prologue' || q.category === 'act1',
    color: 'border-amber-500/50 text-amber-400'
  },
  {
    id: 'act2_arasaka',
    title: '第 2 幕：荒坂與竹村五郎線 (Arasaka & Takemura)',
    categoryFilter: (q) => q.category === 'act2_arasaka',
    color: 'border-red-500/50 text-red-400'
  },
  {
    id: 'act2_judy',
    title: '第 2 幕：茱蒂與超夢線 (Judy & Evelyn)',
    categoryFilter: (q) => q.category === 'act2_judy',
    color: 'border-cyan-500/50 text-cyan-400'
  },
  {
    id: 'act2_panam',
    title: '第 2 幕：帕娜與阿德卡多流浪者線 (Panam & Aldecaldos)',
    categoryFilter: (q) => q.category === 'act2_panam',
    color: 'border-emerald-500/50 text-emerald-400'
  },
  {
    id: 'act2_voodoo',
    title: '第 2 幕：巫毒幫與奧特坎寧安線 (Voodoo Boys & Alt)',
    categoryFilter: (q) => q.category === 'act2_voodoo',
    color: 'border-indigo-500/50 text-indigo-400'
  },
  {
    id: 'major_side',
    title: '強尼·銀手與核心夥伴系列 (Johnny & Rogue Quests)',
    categoryFilter: (q) => q.category === 'major_side',
    color: 'border-yellow-500/50 text-yellow-400'
  },
  {
    id: 'phantom_liberty',
    title: '自由幻局 DLC 狗鎮主線 (Phantom Liberty)',
    categoryFilter: (q) => q.category === 'phantom_liberty',
    color: 'border-blue-500/50 text-blue-400'
  },
  {
    id: 'act3_endings',
    title: '第 3 幕與大結局命運線 (Act 3 & Endings)',
    categoryFilter: (q) => q.category === 'act3_endings',
    color: 'border-purple-500/50 text-purple-400'
  },
  {
    id: 'hidden_secrets',
    title: '夜之城八大隱藏秘密任務 (Hidden Secrets)',
    categoryFilter: (q) => q.category === 'hidden_secrets',
    color: 'border-rose-500/50 text-rose-400'
  }
];

export const ChecklistView: React.FC<ChecklistViewProps> = ({
  quests,
  completedQuestIds,
  selectedChoiceIds,
  onSelectQuest,
  onToggleQuestCompleted,
  searchQuery,
}) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const filteredQuests = useMemo(() => {
    if (!searchQuery.trim()) return quests;
    const query = searchQuery.toLowerCase();
    return quests.filter(
      (q) =>
        q.title.toLowerCase().includes(query) ||
        q.titleEn.toLowerCase().includes(query) ||
        q.associatedNpc?.toLowerCase().includes(query) ||
        q.summary.toLowerCase().includes(query) ||
        q.iconicGear?.some((g) => g.toLowerCase().includes(query))
    );
  }, [quests, searchQuery]);

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 max-w-5xl mx-auto w-full select-none">
      {GROUPS.map((group) => {
        const groupQuests = filteredQuests.filter(group.categoryFilter);
        if (groupQuests.length === 0) return null;

        const isCollapsed = !!collapsedGroups[group.id];
        const completedInGroup = groupQuests.filter((q) =>
          completedQuestIds.includes(q.id)
        ).length;
        const progressPercent = Math.round((completedInGroup / groupQuests.length) * 100);

        return (
          <div
            key={group.id}
            className="rounded-lg bg-[#0d1117] border border-[#21262d] overflow-hidden"
          >
            {/* Group Header */}
            <div
              onClick={() => toggleGroup(group.id)}
              className="px-4 py-3 bg-[#161b22] border-b border-[#21262d] flex items-center justify-between cursor-pointer hover:bg-[#1c2128] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
                <h3 className={`text-sm font-bold font-mono ${group.color}`}>
                  {group.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">
                  {completedInGroup} / {groupQuests.length} 完成 ({progressPercent}%)
                </span>
                <div className="w-20 bg-[#21262d] h-1.5 rounded-full overflow-hidden hidden sm:block">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quests List */}
            {!isCollapsed && (
              <div className="divide-y divide-[#21262d]">
                {groupQuests.map((quest) => {
                  const isCompleted = completedQuestIds.includes(quest.id);
                  const selectedChoice = quest.choices?.find(
                    (c) => c.id === selectedChoiceIds[quest.id]
                  );

                  return (
                    <div
                      key={quest.id}
                      onClick={() => onSelectQuest(quest)}
                      className={`p-3 sm:p-4 flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-950/10 hover:bg-emerald-950/20'
                          : 'hover:bg-[#161b22]'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Checkbox */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleQuestCompleted(quest.id);
                          }}
                          className="mt-0.5 text-neutral-400 hover:text-emerald-400 transition-colors shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
                          )}
                        </button>

                        {/* Quest Details */}
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center flex-wrap gap-2">
                            <span
                              className={`text-sm font-bold ${
                                isCompleted ? 'line-through text-neutral-400' : 'text-neutral-100'
                              }`}
                            >
                              {quest.title}
                            </span>
                            <span className="text-xs font-mono text-neutral-500">
                              {quest.titleEn}
                            </span>

                            {quest.isBranchPoint && (
                              <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-red-950/80 border border-red-500/40 text-red-300 rounded flex items-center gap-1">
                                <GitBranch className="w-2.5 h-2.5" />
                                關鍵分岔
                              </span>
                            )}

                            {quest.isPointOfNoReturn && (
                              <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-purple-950/80 border border-purple-500/50 text-purple-300 rounded flex items-center gap-1 animate-pulse">
                                <AlertTriangle className="w-2.5 h-2.5 text-amber-400" />
                                無退路點
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                            {quest.summary}
                          </p>

                          {/* Selected Choice badge */}
                          {selectedChoice && (
                            <div className="mt-1.5 flex items-center gap-1.5 text-xs font-mono text-amber-300 bg-amber-950/30 border border-amber-500/30 px-2 py-0.5 rounded w-fit">
                              <GitBranch className="w-3 h-3 text-amber-400" />
                              <span>已選分支：{selectedChoice.label}</span>
                            </div>
                          )}

                          {/* Rewards chips */}
                          {(quest.iconicGear?.length || quest.keyRewards?.length) ? (
                            <div className="flex items-center flex-wrap gap-1.5 pt-1">
                              {quest.iconicGear?.map((gear, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1"
                                >
                                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                                  {gear}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Right info */}
                      <div className="text-right shrink-0 font-mono text-xs text-neutral-500">
                        {quest.associatedNpc && (
                          <div className="text-neutral-400 flex items-center gap-1 justify-end">
                            <User className="w-3 h-3 text-cyan-400" />
                            <span>{quest.associatedNpc}</span>
                          </div>
                        )}
                        <span className="text-[10px] text-amber-400/80 underline mt-1 block">
                          點擊查看作戰情報 →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
