import React, { useMemo } from 'react';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  Circle,
  Gift
} from 'lucide-react';
import { FIXERS_DATA } from '../data/fixersData';
import { FixerInfo } from '../types/extra';

interface FixersViewProps {
  completedFixerIds: string[];
  onToggleCompletedFixer: (fixerId: string) => void;
  onNavigateToQuest?: (questId: string) => void;
  searchQuery: string;
}

export const FixersView: React.FC<FixersViewProps> = ({
  completedFixerIds,
  onToggleCompletedFixer,
  searchQuery,
}) => {
  const filteredFixers = useMemo(() => {
    if (!searchQuery.trim()) return FIXERS_DATA;
    const q = searchQuery.toLowerCase();
    return FIXERS_DATA.filter((f: FixerInfo) => {
      const matchName = f.name.toLowerCase().includes(q) || f.nameEn.toLowerCase().includes(q);
      const matchDistrict = f.district.toLowerCase().includes(q) || f.districtLabel.toLowerCase().includes(q);
      const matchReward = f.finalReward.toLowerCase().includes(q);
      const matchBio = f.bio.toLowerCase().includes(q);
      return matchName || matchDistrict || matchReward || matchBio;
    });
  }, [searchQuery]);

  const totalFixers = FIXERS_DATA.length;
  const completedFixerCount = completedFixerIds.length;
  const totalGigs = FIXERS_DATA.reduce((acc, f) => acc + f.totalGigs, 0);

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-[#161b22] to-amber-950/40 border border-cyan-500/30 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded font-bold">
                FIXER NETWORK // 合事佬地下仲介網
              </span>
              <span className="text-xs font-mono text-neutral-400">
                夜城 7 大勢力巨頭 + 狗鎮漢茲先生全委託圖鑑
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              合事佬區域委託進度網
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              在 2.0 版本中，合事佬委託改為分級解鎖制。當清空該合事佬名下轄區內的所有委託合約後，他們將贈送 V 該區域的終極神兵或頂級改裝座駕！
            </p>
          </div>

          {/* Stats Box */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-center font-mono">
              <div className="text-[10px] text-neutral-400">合事佬全清率</div>
              <div className="text-lg font-bold text-cyan-400">
                {completedFixerCount} <span className="text-xs text-neutral-500">/ {totalFixers}</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-amber-950/30 border border-amber-500/30 text-center font-mono">
              <div className="text-[10px] text-amber-300">總委託契約</div>
              <div className="text-lg font-bold text-amber-400">{totalGigs} 宗</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {filteredFixers.map((fixer: FixerInfo) => {
          const isDone = completedFixerIds.includes(fixer.id);

          return (
            <div
              key={fixer.id}
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                isDone
                  ? 'bg-[#161b22]/90 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                  : 'bg-[#161b22]/50 border-[#21262d] hover:border-[#30363d]'
              }`}
            >
              {/* Header */}
              <div className="p-4 border-b border-[#21262d]/70 bg-gradient-to-b from-[#18212d] to-[#161b22]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {fixer.district}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#21262d] text-neutral-300">
                        {fixer.totalGigs} 宗委託
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-100 mt-1 flex items-center gap-2">
                      {fixer.name}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400/80">{fixer.nameEn}</div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-0.5">轄區：{fixer.districtLabel}</div>
                  </div>

                  {/* Toggle Finished All Gigs */}
                  <button
                    onClick={() => onToggleCompletedFixer(fixer.id)}
                    className={`p-1.5 rounded transition-colors ${
                      isDone
                        ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30'
                        : 'text-neutral-500 bg-[#0d1117] border border-[#30363d] hover:text-neutral-300'
                    }`}
                    title={isDone ? '轄區委託已全清（點擊取消）' : '標記轄區委託全部完成'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
                {/* Bio */}
                <p className="text-neutral-300 leading-relaxed font-sans bg-[#0d1117] p-2.5 rounded border border-[#21262d]">
                  {fixer.bio}
                </p>

                {/* Ultimate Reward Banner */}
                <div className="p-3 rounded bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-amber-300 font-mono font-bold text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-amber-400" />
                      <span>轄區全清終極獎勵</span>
                    </div>
                    <span className="text-[10px] text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded border border-amber-700">
                      EXCLUSIVE
                    </span>
                  </div>
                  <div className="text-xs font-bold text-neutral-100">
                    {fixer.finalReward}
                  </div>
                </div>

                {/* Key Gigs Preview */}
                {fixer.keyGigs && fixer.keyGigs.length > 0 && (
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase text-neutral-400 font-bold">代表委託：</div>
                    <div className="space-y-1">
                      {fixer.keyGigs.slice(0, 2).map((gig, gIdx) => (
                        <div key={gIdx} className="text-[11px] text-neutral-300 bg-[#0d1117] p-1.5 rounded border border-[#21262d]/60">
                          <span className="text-amber-400 font-mono font-bold">{gig.name}：</span>
                          <span className="text-neutral-400">{gig.summary}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">轄區合約: {fixer.totalGigs} 件</span>
                <span className={`text-[11px] ${isDone ? 'text-cyan-400 font-bold' : 'text-neutral-500'}`}>
                  {isDone ? '✓ 轄區委託已掃空' : '進行中'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
