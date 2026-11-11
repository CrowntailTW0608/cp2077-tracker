import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Circle,
  MapPin,
  Trophy,
  Filter
} from 'lucide-react';
import { TAROT_DATA } from '../data/tarotData';
import { TarotCard } from '../types/extra';

interface TarotViewProps {
  collectedTarotIds: string[];
  onToggleCollectedTarot: (tarotId: string) => void;
  onNavigateToQuest?: (questId: string) => void;
  searchQuery: string;
}

export const TarotView: React.FC<TarotViewProps> = ({
  collectedTarotIds,
  onToggleCollectedTarot,
  onNavigateToQuest,
  searchQuery,
}) => {
  const [filterSection, setFilterSection] = useState<'all' | 'base' | 'phantom_liberty'>('all');
  const [showOnlyUncollected, setShowOnlyUncollected] = useState<boolean>(false);

  const filteredTarot = useMemo(() => {
    return TAROT_DATA.filter((card) => {
      // Base vs DLC
      const isDLC = card.category === 'phantom_court';
      if (filterSection === 'base' && isDLC) return false;
      if (filterSection === 'phantom_liberty' && !isDLC) return false;

      // Uncollected
      const isCollected = collectedTarotIds.includes(card.id);
      if (showOnlyUncollected && isCollected) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = card.name.toLowerCase().includes(q) || card.nameEn.toLowerCase().includes(q);
        const matchDistrict = card.district.toLowerCase().includes(q);
        const matchLocation = card.locationDetail.toLowerCase().includes(q);
        const matchMisty = card.interpretation.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchLocation && !matchMisty) return false;
      }

      return true;
    });
  }, [filterSection, showOnlyUncollected, searchQuery, collectedTarotIds]);

  const totalCount = TAROT_DATA.length;
  const collectedCount = collectedTarotIds.length;
  const percent = Math.round((collectedCount / totalCount) * 100) || 0;
  const baseCount = TAROT_DATA.filter((c) => c.category === 'base_major').length;
  const plCount = TAROT_DATA.filter((c) => c.category === 'phantom_court').length;

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-950/40 via-[#161b22] to-amber-950/40 border border-purple-500/40 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded font-bold">
                TAROT GRAFFITI // 塔羅壁畫預言
              </span>
              <span className="text-xs font-mono text-neutral-400">
                夜城 20 大秘儀 + 狗鎮 4 宮廷牌完整全收錄
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              塔羅牌塗鴉與命運解讀
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              每一幅壁畫皆是 Relic 晶片故障與 V 的潛意識投影，映照著夜城各陣營命運與最終結局走向。米絲蒂（Misty）能為你占卜並指引牌面所隱含的哲理與抉擇警示。
            </p>
          </div>

          {/* Stats Box */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-center font-mono">
              <div className="text-[10px] text-neutral-400">壁畫掃描進度</div>
              <div className="text-lg font-bold text-purple-400">
                {collectedCount} <span className="text-xs text-neutral-500">/ {totalCount}</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-amber-950/30 border border-amber-500/30 text-center font-mono">
              <div className="text-[10px] text-amber-300">本體 + 狗鎮</div>
              <div className="text-lg font-bold text-amber-400">
                {baseCount} + {plCount}
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 pt-3 border-t border-[#30363d]/60 flex items-center gap-3">
          <div className="flex-1 bg-[#21262d] h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-purple-300">{percent}%</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#161b22] p-3 rounded-lg border border-[#21262d]">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            分類篩選:
          </span>
          <button
            onClick={() => setFilterSection('all')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              filterSection === 'all'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/60 font-bold'
                : 'bg-[#0d1117] text-neutral-400 hover:text-neutral-200 border border-[#30363d]'
            }`}
          >
            全部壁畫 ({totalCount})
          </button>
          <button
            onClick={() => setFilterSection('base')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              filterSection === 'base'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/60 font-bold'
                : 'bg-[#0d1117] text-neutral-400 hover:text-neutral-200 border border-[#30363d]'
            }`}
          >
            本體 20 大秘儀 ({baseCount})
          </button>
          <button
            onClick={() => setFilterSection('phantom_liberty')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              filterSection === 'phantom_liberty'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 font-bold'
                : 'bg-[#0d1117] text-neutral-400 hover:text-neutral-200 border border-[#30363d]'
            }`}
          >
            往日之影 4 宮廷牌 ({plCount})
          </button>
        </div>

        <button
          onClick={() => setShowOnlyUncollected((v) => !v)}
          className={`px-3 py-1 text-xs font-mono rounded border flex items-center gap-1.5 transition-colors ${
            showOnlyUncollected
              ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
              : 'bg-[#0d1117] border-[#30363d] text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Circle className="w-3.5 h-3.5 text-cyan-400" />
          僅未掃描 ({totalCount - collectedCount})
        </button>
      </div>

      {/* Tarot Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTarot.map((card: TarotCard) => {
          const isCollected = collectedTarotIds.includes(card.id);
          const isDLC = card.category === 'phantom_court';

          return (
            <div
              key={card.id}
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                isCollected
                  ? 'bg-[#161b22]/90 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.1)]'
                  : 'bg-[#161b22]/50 border-[#21262d] hover:border-[#30363d]'
              }`}
            >
              {/* Card Header & Number */}
              <div className="p-4 border-b border-[#21262d]/70 bg-gradient-to-b from-[#1a1f29] to-[#161b22]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                        {card.number}
                      </span>
                      {isDLC && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                          往日之影
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-neutral-100 mt-1 flex items-center gap-2">
                      {card.name}
                    </h3>
                    <div className="text-xs font-mono text-purple-300/80">{card.nameEn}</div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => onToggleCollectedTarot(card.id)}
                    className={`p-1.5 rounded transition-colors ${
                      isCollected
                        ? 'text-purple-400 bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500/30'
                        : 'text-neutral-500 bg-[#0d1117] border border-[#30363d] hover:text-neutral-300'
                    }`}
                    title={isCollected ? '已掃描壁畫（點擊取消）' : '標記已掃描壁畫'}
                  >
                    {isCollected ? (
                      <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
                {/* Location */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{card.district}</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed bg-[#0d1117] p-2 rounded border border-[#21262d]">
                    {card.locationDetail}
                  </p>
                </div>

                {/* Misty's Interpretation */}
                <div className="p-2.5 rounded bg-purple-950/20 border border-purple-500/25 space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-300 font-mono font-bold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>米絲蒂的命運解讀</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed font-sans text-[11px]">
                    {card.interpretation}
                  </p>
                </div>

                {/* Ending Connections */}
                {card.endingConnection && (
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 font-bold uppercase">
                      <Trophy className="w-3 h-3 text-amber-400" />
                      <span>關聯結局暗示</span>
                    </div>
                    <div className="px-2 py-1 text-[11px] font-mono rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 leading-relaxed">
                      {card.endingConnection}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-4 py-2 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500">壁畫編號: #{card.id}</span>
                <span className={isCollected ? 'text-purple-400 font-bold' : 'text-neutral-500'}>
                  {isCollected ? '✓ 已掃描入庫' : '未發現'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
