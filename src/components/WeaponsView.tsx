import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Circle,
  Crosshair,
  ExternalLink,
  ShieldAlert,
  Zap,
  Filter
} from 'lucide-react';
import { WEAPONS_DATA } from '../data/weaponsData';
import { IconicWeapon } from '../types/extra';

interface WeaponsViewProps {
  ownedWeaponIds: string[];
  onToggleOwnedWeapon: (weaponId: string) => void;
  onNavigateToQuest: (questId: string) => void;
  searchQuery: string;
}

export const WeaponsView: React.FC<WeaponsViewProps> = ({
  ownedWeaponIds,
  onToggleOwnedWeapon,
  onNavigateToQuest,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showOnlyMissable, setShowOnlyMissable] = useState<boolean>(false);
  const [showOnlyUncollected, setShowOnlyUncollected] = useState<boolean>(false);

  const categories = useMemo(() => {
    const list = Array.from(new Set(WEAPONS_DATA.map((w) => w.categoryLabel)));
    return ['all', ...list];
  }, []);

  const filteredWeapons = useMemo(() => {
    return WEAPONS_DATA.filter((w) => {
      // Category filter
      if (selectedCategory !== 'all' && w.categoryLabel !== selectedCategory) return false;

      // Missable filter
      if (showOnlyMissable && !w.isMissable) return false;

      // Uncollected filter
      const isOwned = ownedWeaponIds.includes(w.id);
      if (showOnlyUncollected && isOwned) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = w.name.toLowerCase().includes(query) || w.nameEn.toLowerCase().includes(query);
        const matchCategory = w.categoryLabel.toLowerCase().includes(query) || w.baseType.toLowerCase().includes(query);
        const matchEffect = w.iconicEffect.toLowerCase().includes(query);
        const matchAcquisition = w.howToGet.toLowerCase().includes(query);
        if (!matchName && !matchCategory && !matchEffect && !matchAcquisition) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, showOnlyMissable, showOnlyUncollected, searchQuery, ownedWeaponIds]);

  const totalCount = WEAPONS_DATA.length;
  const ownedCount = ownedWeaponIds.length;
  const percent = Math.round((ownedCount / totalCount) * 100) || 0;
  const missableCount = WEAPONS_DATA.filter((w) => w.isMissable).length;

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner & Stats */}
      <div className="bg-gradient-to-r from-amber-950/40 via-[#161b22] to-cyan-950/40 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded font-bold">
                ICONIC VAULT // 不朽軍火庫
              </span>
              <span className="text-xs font-mono text-neutral-400">
                夜城與狗鎮傳奇特異武器全圖鑑
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              不朽武器與終極裝備庫
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              不朽武器擁有無法被常規武器替代的專屬獨立詞條、特殊攻擊模式與高科技彈道。標註「易錯過」的裝備在特定主線/支線離開特定場景後將永遠無法再次取得！
            </p>
          </div>

          {/* Stat Pills */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-center font-mono">
              <div className="text-[10px] text-neutral-400">收藏進度</div>
              <div className="text-lg font-bold text-amber-400">
                {ownedCount} <span className="text-xs text-neutral-500">/ {totalCount}</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-red-950/30 border border-red-500/30 text-center font-mono">
              <div className="text-[10px] text-red-300">易錯過警告</div>
              <div className="text-lg font-bold text-red-400">{missableCount} 件</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-3 border-t border-[#30363d]/60 flex items-center gap-3">
          <div className="flex-1 bg-[#21262d] h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-orange-400 to-cyan-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-amber-300">{percent}%</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#161b22] p-3 rounded-lg border border-[#21262d]">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            武器種類:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 font-bold'
                  : 'bg-[#0d1117] text-neutral-400 hover:text-neutral-200 border border-[#30363d]'
              }`}
            >
              {cat === 'all' ? '全部種類' : cat}
            </button>
          ))}
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowOnlyMissable((v) => !v)}
            className={`px-2.5 py-1 text-xs font-mono rounded border flex items-center gap-1.5 transition-colors ${
              showOnlyMissable
                ? 'bg-red-950/60 border-red-500/60 text-red-300'
                : 'bg-[#0d1117] border-[#30363d] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            僅顯示易錯過 ({missableCount})
          </button>

          <button
            onClick={() => setShowOnlyUncollected((v) => !v)}
            className={`px-2.5 py-1 text-xs font-mono rounded border flex items-center gap-1.5 transition-colors ${
              showOnlyUncollected
                ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
                : 'bg-[#0d1117] border-[#30363d] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Circle className="w-3.5 h-3.5 text-cyan-400" />
            僅未收集 ({totalCount - ownedCount})
          </button>
        </div>
      </div>

      {/* Weapon Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWeapons.map((weapon: IconicWeapon) => {
          const isOwned = ownedWeaponIds.includes(weapon.id);

          return (
            <div
              key={weapon.id}
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                isOwned
                  ? 'bg-[#161b22]/90 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.08)]'
                  : 'bg-[#161b22]/50 border-[#21262d] hover:border-[#30363d]'
              }`}
            >
              {/* Card Header */}
              <div className="p-4 border-b border-[#21262d]/70">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#21262d] text-cyan-300 rounded border border-cyan-500/20">
                        {weapon.categoryLabel}
                      </span>
                      {weapon.isMissable && (
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-red-950/80 text-red-300 rounded border border-red-500/40 flex items-center gap-1 font-bold">
                          <AlertTriangle className="w-3 h-3 text-red-400" />
                          易錯過
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-neutral-100 mt-1.5 flex items-center gap-2">
                      {weapon.name}
                    </h3>
                    <div className="text-xs font-mono text-amber-400/80">{weapon.nameEn}</div>
                  </div>

                  {/* Toggle Owned Button */}
                  <button
                    onClick={() => onToggleOwnedWeapon(weapon.id)}
                    className={`p-1.5 rounded transition-colors ${
                      isOwned
                        ? 'text-amber-400 bg-amber-500/20 border border-amber-500/50 hover:bg-amber-500/30'
                        : 'text-neutral-500 bg-[#0d1117] border border-[#30363d] hover:text-neutral-300'
                    }`}
                    title={isOwned ? '已收集（點擊取消）' : '標記為已收集'}
                  >
                    {isOwned ? (
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
                {/* Special Effect */}
                <div className="p-2.5 rounded bg-[#0d1117] border border-[#21262d] space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-[11px]">
                    <Zap className="w-3.5 h-3.5" />
                    <span>不朽專屬特性</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed font-sans">{weapon.iconicEffect}</p>
                </div>

                {/* Acquisition Method */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 font-semibold">取得途徑與地點：</div>
                  <p className="text-neutral-300 leading-relaxed bg-[#0d1117]/60 p-2 rounded border border-[#21262d]/60">
                    {weapon.howToGet}
                  </p>
                </div>

                {/* Missable Warning Note */}
                {weapon.missableWarning && (
                  <div className="p-2.5 rounded bg-red-950/25 border border-red-500/30 text-red-200 text-[11px] leading-relaxed flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-red-300">錯過警訊：</span>
                      {weapon.missableWarning}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer with Linked Quest Jump */}
              <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between text-xs font-mono">
                {weapon.associatedQuestId ? (
                  <button
                    onClick={() => onNavigateToQuest(weapon.associatedQuestId!)}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
                  >
                    <span>相關任務情報</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <span className="text-neutral-500">非主線固定掉落</span>
                )}

                <span className={`text-[11px] ${isOwned ? 'text-amber-400 font-bold' : 'text-neutral-500'}`}>
                  {isOwned ? '✓ 已入庫' : '未取得'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
