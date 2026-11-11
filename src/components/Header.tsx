import React from 'react';
import {
  Eye,
  EyeOff,
  Search,
  Trophy,
  Disc3,
  ShieldAlert,
  Sparkles,
  FolderArchive,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { EndingStatus, SaveSlot } from '../types/quest';
import { SidebarTab } from './Sidebar';

interface HeaderProps {
  spoilerMode: boolean;
  onToggleSpoiler: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSlot: SaveSlot;
  onOpenSaveSlotModal: () => void;
  endings: EndingStatus[];
  onOpenEndingsModal: () => void;
  activeTab: SidebarTab;
  isSidebarCollapsed: boolean;
  onToggleSidebarCollapse: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  spoilerMode,
  onToggleSpoiler,
  searchQuery,
  onSearchChange,
  activeSlot,
  onOpenSaveSlotModal,
  endings,
  onOpenEndingsModal,
  activeTab,
  isSidebarCollapsed,
  onToggleSidebarCollapse,
}) => {
  const unlockedCount = endings.filter((e) => e.isUnlocked).length;

  const tabLabels: Record<SidebarTab, string> = {
    quests: '任務推進與分歧路線圖',
    characters: '核心關聯人物檔案庫',
    vehicles: '專屬載具與傳奇車庫',
    endings: '全結局推導與解鎖條件',
    weapons: '不朽軍火庫與特殊武器圖鑑',
    tarot: '塔羅牌壁畫塗鴉與命運解讀',
    cyberpsychos: '賽博精神病患逮捕錄 (17名目標)',
    fixers: '合事佬區域委託進度與終極獎勵',
    builds: '夜城 2.0 專屬戰鬥流派配點推薦'
  };

  return (
    <header className="sticky top-0 z-30 bg-[#090c10]/95 backdrop-blur-md border-b border-[#21262d] px-4 lg:px-6 py-3">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Title, Brand & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          {/* Quick Sidebar Collapse / Expand Button */}
          <button
            onClick={onToggleSidebarCollapse}
            className="p-2 rounded border border-[#30363d] bg-[#161b22] text-neutral-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
            title={isSidebarCollapsed ? '展開側邊欄' : '折疊側邊欄'}
          >
            {isSidebarCollapsed ? (
              <PanelLeftOpen className="w-4 h-4 text-amber-400" />
            ) : (
              <PanelLeftClose className="w-4 h-4 text-neutral-400" />
            )}
          </button>

          <div className="flex items-center justify-center w-10 h-10 rounded border border-amber-500/40 bg-amber-500/10 text-amber-400 font-mono font-bold tracking-wider text-sm shadow-[0_0_12px_rgba(245,158,11,0.15)]">
            2077
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                CYBERPUNK 2077 // PHANTOM LIBERTY
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 rounded">
                v2.1 HUD
              </span>
            </div>
            <h1 className="text-base font-bold text-neutral-100 flex items-center gap-2">
              {tabLabels[activeTab] || '任務推進網絡'}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="搜尋任務、人物、車輛、不朽裝備..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#161b22] border border-[#30363d] focus:border-amber-500/70 focus:outline-none rounded text-neutral-200 placeholder-neutral-500 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Spoiler Mode Toggle */}
          <button
            onClick={onToggleSpoiler}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
              spoilerMode
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40'
                : 'bg-red-950/40 border-red-500/40 text-red-300 hover:bg-red-900/40'
            }`}
            title={spoilerMode ? '防劇透模式已開啟：隱藏關鍵反轉' : '防劇透已關閉：直接顯示全分支後果'}
          >
            {spoilerMode ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>防劇透保護</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>全劇透全顯</span>
              </>
            )}
          </button>

          {/* Endings Calculator Modal Trigger */}
          <button
            onClick={onOpenEndingsModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-purple-500/40 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40 hover:border-purple-400 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>結局推導</span>
            <span className="font-bold text-amber-400">
              {unlockedCount}/{endings.length}
            </span>
          </button>

          {/* Active Save Slot Trigger */}
          <button
            onClick={onOpenSaveSlotModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-[#30363d] bg-[#161b22] text-neutral-300 hover:bg-[#21262d] hover:border-amber-500/40 transition-colors"
          >
            <FolderArchive className="w-3.5 h-3.5 text-cyan-400" />
            <span className="max-w-[110px] truncate">{activeSlot.name}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
