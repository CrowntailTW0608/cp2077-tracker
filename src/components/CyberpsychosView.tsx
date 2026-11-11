import React, { useState, useMemo } from 'react';
import {
  Skull,
  CheckCircle2,
  Circle,
  Shield,
  Zap,
  Filter,
  Award,
  Crosshair
} from 'lucide-react';
import { CYBERPSYCHOS_DATA } from '../data/cyberpsychosData';
import { Cyberpsycho } from '../types/extra';

interface CyberpsychosViewProps {
  capturedIds: string[];
  onToggleCaptured: (targetId: string) => void;
  searchQuery: string;
}

export const CyberpsychosView: React.FC<CyberpsychosViewProps> = ({
  capturedIds,
  onToggleCaptured,
  searchQuery,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [showOnlyUncaptured, setShowOnlyUncaptured] = useState<boolean>(false);

  const districts = useMemo(() => {
    const list = Array.from(new Set(CYBERPSYCHOS_DATA.map((c) => c.district)));
    return ['all', ...list];
  }, []);

  const filteredTargets = useMemo(() => {
    return CYBERPSYCHOS_DATA.filter((c: Cyberpsycho) => {
      // District
      if (selectedDistrict !== 'all' && c.district !== selectedDistrict) return false;

      // Uncaptured
      const isCaptured = capturedIds.includes(c.id);
      if (showOnlyUncaptured && isCaptured) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(q) || c.alias.toLowerCase().includes(q);
        const matchDistrict = c.district.toLowerCase().includes(q);
        const matchWeakness = c.combatWeakness.toLowerCase().includes(q);
        const matchTips = c.nonLethalTip.toLowerCase().includes(q);
        const matchLore = c.backgroundStory.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchWeakness && !matchTips && !matchLore) return false;
      }

      return true;
    });
  }, [selectedDistrict, showOnlyUncaptured, searchQuery, capturedIds]);

  const totalCount = CYBERPSYCHOS_DATA.length;
  const capturedCount = capturedIds.length;
  const percent = Math.round((capturedCount / totalCount) * 100) || 0;

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-950/40 via-[#161b22] to-cyan-950/40 border border-red-500/40 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-red-500/20 text-red-300 border border-red-500/40 rounded font-bold">
                REGINA DOSSIER // 蕾吉娜特別委託
              </span>
              <span className="text-xs font-mono text-neutral-400">
                17 名賽博精神病患活捉與心理評估檔案
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              賽博精神病患逮捕錄
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              蕾吉娜要求將全部 17 名患者「生擒逮捕」（非致命壓制），交由前神經科研專家治療研究。若 17 人全部生擒，將在任務終末獲取蕾吉娜的大量獎金與特殊義體插件！
            </p>
          </div>

          {/* Stats Box */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-center font-mono">
              <div className="text-[10px] text-neutral-400">活捉逮捕進度</div>
              <div className="text-lg font-bold text-red-400">
                {capturedCount} <span className="text-xs text-neutral-500">/ {totalCount}</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-center font-mono">
              <div className="text-[10px] text-emerald-300">非致命通關獎勵</div>
              <div className="text-lg font-bold text-emerald-400">傳奇裝備</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-3 border-t border-[#30363d]/60 flex items-center gap-3">
          <div className="flex-1 bg-[#21262d] h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-red-500 via-orange-400 to-emerald-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-red-300">{percent}%</span>
        </div>
      </div>

      {/* Non-lethal PSA Tip Box */}
      <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3 text-xs leading-relaxed text-emerald-200">
        <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold font-mono text-emerald-300 mr-1">非致命壓制通用心法：</span>
          在 2.0 版本中，即使使用致死武器將首領血條扣至 1% 後，敵人會進入跪地喘息狀態，只要不進行補槍即可判定為活捉；保險做法是裝備武器插件「和諧（Pax）」、使用鈍器拳套、或以快速破解「記憶擦除 + 系統重啟 / 義體過熱」將其制伏。
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#161b22] p-3 rounded-lg border border-[#21262d]">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            行政區篩選:
          </span>
          {districts.map((dist) => (
            <button
              key={dist}
              onClick={() => setSelectedDistrict(dist)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                selectedDistrict === dist
                  ? 'bg-red-500/20 text-red-300 border border-red-500/60 font-bold'
                  : 'bg-[#0d1117] text-neutral-400 hover:text-neutral-200 border border-[#30363d]'
              }`}
            >
              {dist === 'all' ? '全部行政區' : dist}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowOnlyUncaptured((v) => !v)}
          className={`px-3 py-1 text-xs font-mono rounded border flex items-center gap-1.5 transition-colors ${
            showOnlyUncaptured
              ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
              : 'bg-[#0d1117] border-[#30363d] text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Circle className="w-3.5 h-3.5 text-cyan-400" />
          僅未逮捕 ({totalCount - capturedCount})
        </button>
      </div>

      {/* Targets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTargets.map((target: Cyberpsycho) => {
          const isCaptured = capturedIds.includes(target.id);

          return (
            <div
              key={target.id}
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                isCaptured
                  ? 'bg-[#161b22]/90 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.08)]'
                  : 'bg-[#161b22]/50 border-[#21262d] hover:border-[#30363d]'
              }`}
            >
              {/* Header */}
              <div className="p-4 border-b border-[#21262d]/70 bg-gradient-to-b from-[#1c181a] to-[#161b22]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 font-bold">
                        {target.district}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {target.associatedQuestName}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-100 mt-1 flex items-center gap-2">
                      {target.name}
                    </h3>
                    <div className="text-xs font-mono text-red-400/90 flex items-center gap-1">
                      <Skull className="w-3.5 h-3.5" />
                      外號代號：{target.alias}
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => onToggleCaptured(target.id)}
                    className={`p-1.5 rounded transition-colors ${
                      isCaptured
                        ? 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30'
                        : 'text-neutral-500 bg-[#0d1117] border border-[#30363d] hover:text-neutral-300'
                    }`}
                    title={isCaptured ? '已活捉逮捕（點擊取消）' : '標記為已非致命逮捕'}
                  >
                    {isCaptured ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
                {/* Location */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold">目擊詳細地點：</div>
                  <p className="text-neutral-300 leading-relaxed bg-[#0d1117] p-2 rounded border border-[#21262d]">
                    {target.locationDetail}
                  </p>
                </div>

                {/* Background Story */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 font-semibold">患者背景與失控誘因：</div>
                  <p className="text-neutral-300 leading-relaxed bg-[#0d1117] p-2 rounded border border-[#21262d]">
                    {target.backgroundStory}
                  </p>
                </div>

                {/* Combat Weakness */}
                <div className="p-2.5 rounded bg-amber-950/20 border border-amber-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 font-mono font-bold text-[11px]">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>弱點與戰術破綻</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed font-sans">{target.combatWeakness}</p>
                </div>

                {/* Non-Lethal Advice */}
                <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-mono font-bold text-[11px]">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>蕾吉娜非致命生擒建議</span>
                  </div>
                  <p className="text-emerald-200 leading-relaxed font-sans">{target.nonLethalTip}</p>
                </div>

                {/* Recommended Loadout */}
                {target.recommendedLoadout && (
                  <div className="text-[11px] font-mono text-purple-300 bg-purple-950/20 p-2 rounded border border-purple-500/20 flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-purple-400" />
                    <span>推薦配裝：{target.recommendedLoadout}</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">案件檔案: #{target.id}</span>
                <span className={`text-[11px] ${isCaptured ? 'text-emerald-400 font-bold' : 'text-neutral-500'}`}>
                  {isCaptured ? '✓ 已活捉並移交蕾吉娜' : '未逮捕'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
