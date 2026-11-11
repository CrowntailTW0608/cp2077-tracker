import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Crosshair,
  Activity,
  Sparkles,
  Target
} from 'lucide-react';
import { BUILDS_DATA } from '../data/buildsData';
import { BuildGuide } from '../types/extra';

interface BuildsViewProps {
  onNavigateToQuest?: (questId: string) => void;
}

export const BuildsView: React.FC<BuildsViewProps> = () => {
  const [selectedBuildId, setSelectedBuildId] = useState<string>(BUILDS_DATA[0].id);

  const currentBuild: BuildGuide =
    BUILDS_DATA.find((b: BuildGuide) => b.id === selectedBuildId) || BUILDS_DATA[0];

  const attributeLabels: Record<string, { label: string; color: string }> = {
    body: { label: '肉體 (Body)', color: 'text-red-400 bg-red-950/40 border-red-500/40' },
    reflexes: { label: '反應 (Reflexes)', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/40' },
    technical: { label: '技術 (Tech)', color: 'text-amber-400 bg-amber-950/40 border-amber-500/40' },
    intelligence: { label: '智力 (Intelligence)', color: 'text-purple-400 bg-purple-950/40 border-purple-500/40' },
    cool: { label: '沉著 (Cool)', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40' },
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-[#161b22] to-purple-950/40 border border-cyan-500/30 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded font-bold">
                2.0 COMBAT ARSENAL // 專屬戰鬥流派配點
              </span>
              <span className="text-xs font-mono text-neutral-400">
                徹底革新的天賦樹、Relic專長與頂級義體配置
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              夜城 2.0 巔峰戰鬥流派指南
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              2.0 版本移除了傳統護甲數值並全面移植至義體系統，引進了時慢衝刺偏轉子彈、黑牆協議禁忌抹殺、無敵狂暴鈍器砸地等革命性機制。以下精選五大當前版本統治級 T0 流派。
            </p>
          </div>
        </div>
      </div>

      {/* Build Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {BUILDS_DATA.map((build: BuildGuide) => {
          const isSelected = build.id === selectedBuildId;

          return (
            <button
              key={build.id}
              onClick={() => setSelectedBuildId(build.id)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30'
                  : 'bg-[#161b22] border-[#21262d] text-neutral-400 hover:text-neutral-200 hover:border-neutral-500'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-neutral-400 truncate">
                {build.nameEn}
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-100 mt-1 truncate">
                {build.name}
              </div>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-cyan-400">
                <Activity className="w-3 h-3 shrink-0" />
                <span className="truncate">{build.archetype}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Build Deep Dive */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-6">
        {/* Build Title & Summary */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-[#21262d] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded font-bold">
                T0 META BUILD
              </span>
              <span className="text-xs font-mono text-neutral-400">
                作戰特色：{currentBuild.archetype}
              </span>
            </div>
            <h3 className="text-2xl font-black text-neutral-100 mt-1 flex items-center gap-2">
              {currentBuild.name}
            </h3>
            <div className="text-xs font-mono text-amber-400/90">{currentBuild.nameEn}</div>
          </div>
        </div>

        {/* Overview */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-[#0d1117] p-3.5 rounded-lg border border-[#21262d]">
          {currentBuild.description}
        </p>

        {/* Section 1: Attribute Points Spread */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>核心屬性點分配推薦 (滿等 60 等級配置)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(currentBuild.coreAttributes).map(([attrKey, value]) => {
              const meta = attributeLabels[attrKey] || { label: attrKey, color: 'text-neutral-300 bg-neutral-900 border-neutral-700' };
              const numValue = Number(value);
              const isMaxed = numValue === 20;

              return (
                <div
                  key={attrKey}
                  className={`p-3 rounded-lg border text-center ${meta.color} font-mono`}
                >
                  <div className="text-[10px] font-semibold">{meta.label}</div>
                  <div className="text-2xl font-black mt-1">
                    {numValue} <span className="text-xs text-neutral-500">/ 20</span>
                  </div>
                  {isMaxed && (
                    <div className="text-[9px] uppercase tracking-wider text-amber-400 mt-0.5 font-bold">
                      ★ 終極核心 (20)
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Core Perks & Cyberware in 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Perks */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>核心專精天賦 (Key Perks)</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#21262d] space-y-2">
              {currentBuild.keyPerks.map((perk: string, pIdx: number) => (
                <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed font-mono">
                  <span className="text-cyan-400 font-bold">▸</span>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Cyberware */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
              <Activity className="w-4 h-4 text-purple-400" />
              <span>必備神經與身體義體 (Cyberware)</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#21262d] space-y-2">
              {currentBuild.cyberwareRecommendation.map((cyber: string, cIdx: number) => (
                <div key={cIdx} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed font-mono">
                  <span className="text-purple-400 font-bold">◈</span>
                  <span>{cyber}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Recommended Weapons & Combat Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommended Weapons */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
              <Crosshair className="w-4 h-4 text-amber-400" />
              <span>流派適配不朽武器搭配</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#21262d] space-y-2">
              {currentBuild.weaponsRecommendation.map((weapon: string, wIdx: number) => (
                <div
                  key={wIdx}
                  className="px-2.5 py-1.5 text-xs font-mono rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{weapon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Combat Loop / Rotation Tips */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>實戰戰鬥手法與連招技巧</span>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2">
              {currentBuild.playstyleTips.map((tip: string, tIdx: number) => (
                <div key={tIdx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-400 font-bold font-mono">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
