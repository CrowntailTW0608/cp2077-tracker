import React from 'react';
import {
  Network,
  Users,
  Car,
  Trophy,
  FolderArchive,
  Compass,
  CheckSquare,
  Sparkles,
  Layers,
  ChevronRight,
  Crosshair,
  Skull,
  Briefcase,
  Cpu
} from 'lucide-react';

export type SidebarTab =
  | 'quests'
  | 'characters'
  | 'vehicles'
  | 'endings'
  | 'weapons'
  | 'tarot'
  | 'cyberpsychos'
  | 'fixers'
  | 'builds';

interface SidebarProps {
  activeTab: SidebarTab;
  onSelectTab: (tab: SidebarTab) => void;
  viewMode: 'flowchart' | 'checklist';
  onToggleViewMode: (mode: 'flowchart' | 'checklist') => void;
  questCount: number;
  completedQuestCount: number;
  vehicleCount: number;
  ownedVehicleCount: number;
  characterCount: number;
  unlockedEndingsCount: number;
  totalEndingsCount: number;
  weaponsCount?: number;
  ownedWeaponsCount?: number;
  tarotCount?: number;
  collectedTarotCount?: number;
  cyberpsychoCount?: number;
  capturedCyberpsychoCount?: number;
  fixersCount?: number;
  completedFixersCount?: number;
  buildsCount?: number;
  onOpenSaveModal: () => void;
  activeSlotName: string;
  isCollapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  viewMode,
  onToggleViewMode,
  questCount,
  completedQuestCount,
  vehicleCount,
  ownedVehicleCount,
  characterCount,
  unlockedEndingsCount,
  totalEndingsCount,
  weaponsCount = 18,
  ownedWeaponsCount = 0,
  tarotCount = 24,
  collectedTarotCount = 0,
  cyberpsychoCount = 17,
  capturedCyberpsychoCount = 0,
  fixersCount = 8,
  completedFixersCount = 0,
  buildsCount = 5,
  onOpenSaveModal,
  activeSlotName,
  isCollapsed,
}) => {
  const questPercent = Math.round((completedQuestCount / questCount) * 100) || 0;

  return (
    <aside
      className={`shrink-0 bg-[#0d1117] border-r border-[#21262d] flex flex-col justify-between h-[calc(100vh-61px)] sticky top-[61px] select-none transition-all duration-300 z-20 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Top Nav Items */}
      <div className="p-2.5 space-y-3 overflow-y-auto overflow-x-hidden">
        {/* Navigation Category Label (Only shown when expanded) */}
        {!isCollapsed && (
          <div className="px-1 pt-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
            系統功能導航
          </div>
        )}

        {/* Playthrough Status - Hidden or Minimized when collapsed */}
        {!isCollapsed ? (
          <div className="p-2.5 rounded bg-[#161b22] border border-[#30363d] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>當前遊玩進度</span>
              <span className="text-amber-400 font-bold">{questPercent}%</span>
            </div>
            <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-cyan-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${questPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>已完成任務</span>
              <span className="text-neutral-200">{completedQuestCount} / {questCount}</span>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center p-1.5 rounded bg-[#161b22] border border-[#30363d]"
            title={`當前推進進度: ${questPercent}% (${completedQuestCount}/${questCount})`}
          >
            <span className="text-[10px] font-mono font-bold text-amber-400">{questPercent}%</span>
            <div className="w-8 bg-[#21262d] h-1 rounded-full overflow-hidden mt-1">
              <div
                className="bg-amber-400 h-full rounded-full"
                style={{ width: `${questPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Function Navigation */}
        <div className="space-y-1.5">
          {/* 1. 任務推進表 */}
          <button
            onClick={() => onSelectTab('quests')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'quests'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title="任務推進表 (全主線/分歧/DLC/隱藏)"
          >
            <div className="flex items-center gap-2.5">
              <Network className={`w-4 h-4 shrink-0 ${activeTab === 'quests' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">任務推進表</div>
                  <div className="text-[10px] text-neutral-400 font-mono">全主線/分歧/DLC/隱藏</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262d] text-neutral-300">
                {completedQuestCount}
              </span>
            )}
          </button>

          {/* Sub-toggle for View Mode (only when Quests tab is active) */}
          {activeTab === 'quests' && (
            <div className={`${isCollapsed ? 'py-1 space-y-1 flex flex-col items-center' : 'ml-6 pl-2 border-l border-amber-500/30 py-1 space-y-1'}`}>
              <button
                onClick={() => onToggleViewMode('flowchart')}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center p-1.5 w-10' : 'justify-between w-full px-2.5 py-1.5'
                } rounded text-[11px] font-mono transition-colors ${
                  viewMode === 'flowchart'
                    ? 'bg-cyan-950/50 border border-cyan-500/40 text-cyan-300'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#161b22]'
                }`}
                title="流程圖節點樹視角"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  {!isCollapsed && <span>流程圖節點樹</span>}
                </div>
                {!isCollapsed && viewMode === 'flowchart' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </button>

              <button
                onClick={() => onToggleViewMode('checklist')}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center p-1.5 w-10' : 'justify-between w-full px-2.5 py-1.5'
                } rounded text-[11px] font-mono transition-colors ${
                  viewMode === 'checklist'
                    ? 'bg-cyan-950/50 border border-cyan-500/40 text-cyan-300'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#161b22]'
                }`}
                title="分幕階層清單視角"
              >
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5" />
                  {!isCollapsed && <span>分幕階層清單</span>}
                </div>
                {!isCollapsed && viewMode === 'checklist' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </button>
            </div>
          )}

          {/* 2. 關鍵人物表 */}
          <button
            onClick={() => onSelectTab('characters')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'characters'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title="關鍵人物檔案庫 (任務互動/陣營/浪漫命運)"
          >
            <div className="flex items-center gap-2.5">
              <Users className={`w-4 h-4 shrink-0 ${activeTab === 'characters' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">關鍵人物檔案庫</div>
                  <div className="text-[10px] text-neutral-400 font-mono">任務互動/陣營/浪漫命運</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262d] text-neutral-300">
                {characterCount}
              </span>
            )}
          </button>

          {/* 3. 專屬交通工具 */}
          <button
            onClick={() => onSelectTab('vehicles')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'vehicles'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`專屬載具車庫 (已收藏 ${ownedVehicleCount}/${vehicleCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Car className={`w-4 h-4 shrink-0 ${activeTab === 'vehicles' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">專屬載具車庫</div>
                  <div className="text-[10px] text-neutral-400 font-mono">初始座車/石中劍/德拉曼</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262d] text-cyan-400">
                {ownedVehicleCount}/{vehicleCount}
              </span>
            )}
          </button>

          {/* 4. 結局推導總覽 */}
          <button
            onClick={() => onSelectTab('endings')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'endings'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`全結局條件推導 (已達成 ${unlockedEndingsCount}/${totalEndingsCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Trophy className={`w-4 h-4 shrink-0 ${activeTab === 'endings' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">全結局條件推導</div>
                  <div className="text-[10px] text-neutral-400 font-mono">11種結局實時解鎖計算</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                {unlockedEndingsCount}/{totalEndingsCount}
              </span>
            )}
          </button>

          {/* Divider Label (when expanded) */}
          {!isCollapsed && (
            <div className="px-1 pt-2 pb-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold border-t border-[#21262d]">
              擴充百科與進度指南
            </div>
          )}

          {/* 5. 不朽軍火庫 */}
          <button
            onClick={() => onSelectTab('weapons')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'weapons'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`不朽軍火庫 (已收藏 ${ownedWeaponsCount}/${weaponsCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Crosshair className={`w-4 h-4 shrink-0 ${activeTab === 'weapons' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">不朽軍火庫</div>
                  <div className="text-[10px] text-neutral-400 font-mono">易錯過警告/特殊詞條</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262d] text-amber-400">
                {ownedWeaponsCount}/{weaponsCount}
              </span>
            )}
          </button>

          {/* 6. 塔羅牌壁畫 */}
          <button
            onClick={() => onSelectTab('tarot')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'tarot'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`塔羅壁畫預言 (已掃描 ${collectedTarotCount}/${tarotCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className={`w-4 h-4 shrink-0 ${activeTab === 'tarot' ? 'text-purple-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">塔羅壁畫預言</div>
                  <div className="text-[10px] text-neutral-400 font-mono">24大秘儀/米絲蒂解讀</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800">
                {collectedTarotCount}/{tarotCount}
              </span>
            )}
          </button>

          {/* 7. 賽博精神病患逮捕錄 */}
          <button
            onClick={() => onSelectTab('cyberpsychos')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'cyberpsychos'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`賽博精神病患逮捕錄 (已活捉 ${capturedCyberpsychoCount}/${cyberpsychoCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Skull className={`w-4 h-4 shrink-0 ${activeTab === 'cyberpsychos' ? 'text-red-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">賽博精神病患</div>
                  <div className="text-[10px] text-neutral-400 font-mono">17名目標/非致命壓制</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800">
                {capturedCyberpsychoCount}/{cyberpsychoCount}
              </span>
            )}
          </button>

          {/* 8. 合事佬區域委託進度網 */}
          <button
            onClick={() => onSelectTab('fixers')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'fixers'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`合事佬委託網 (全清轄區 ${completedFixersCount}/${fixersCount})`}
          >
            <div className="flex items-center gap-2.5">
              <Briefcase className={`w-4 h-4 shrink-0 ${activeTab === 'fixers' ? 'text-cyan-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">合事佬委託網</div>
                  <div className="text-[10px] text-neutral-400 font-mono">8大巨頭/終極白虎白刀</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800">
                {completedFixersCount}/{fixersCount}
              </span>
            )}
          </button>

          {/* 9. 2.0 專屬戰鬥流派 */}
          <button
            onClick={() => onSelectTab('builds')}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center px-1 py-2.5' : 'justify-between px-3 py-2.5'
            } rounded text-xs font-medium transition-colors ${
              activeTab === 'builds'
                ? 'bg-amber-500/15 border border-amber-500/50 text-amber-300 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]'
                : 'text-neutral-300 hover:bg-[#161b22] hover:text-white border border-transparent'
            }`}
            title={`2.0 專屬戰鬥流派 (${buildsCount} 大流派配點推薦)`}
          >
            <div className="flex items-center gap-2.5">
              <Cpu className={`w-4 h-4 shrink-0 ${activeTab === 'builds' ? 'text-amber-400' : 'text-neutral-400'}`} />
              {!isCollapsed && (
                <div className="text-left">
                  <div className="font-bold">2.0 戰鬥流派配點</div>
                  <div className="text-[10px] text-neutral-400 font-mono">時慢忍客/黑牆/狂暴坦</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800">
                {buildsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Save Slot Section */}
      <div className="p-2.5 border-t border-[#21262d] bg-[#090c10]/80">
        <button
          onClick={onOpenSaveModal}
          className={`w-full flex items-center ${
            isCollapsed ? 'justify-center p-2' : 'justify-between p-2.5'
          } rounded bg-[#161b22] border border-[#30363d] hover:border-amber-500/40 text-neutral-300 hover:text-white transition-colors group`}
          title={`周目存檔: ${activeSlotName}`}
        >
          <div className="flex items-center gap-2.5 text-left truncate">
            <FolderArchive className="w-4 h-4 text-cyan-400 group-hover:text-amber-400 transition-colors shrink-0" />
            {!isCollapsed && (
              <div className="truncate">
                <div className="text-[10px] text-neutral-400 font-mono uppercase">多重周目存檔</div>
                <div className="text-xs font-bold text-neutral-100 truncate">{activeSlotName}</div>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
          )}
        </button>
      </div>
    </aside>
  );
};
