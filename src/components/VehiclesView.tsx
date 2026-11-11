import React, { useState, useMemo } from 'react';
import {
  Car,
  Gauge,
  Zap,
  Shield,
  Crosshair,
  ExternalLink,
  CheckCircle2,
  Circle,
  Sparkles,
  Info,
  Filter,
  Check
} from 'lucide-react';
import { Vehicle, VehicleType } from '../types/vehicle';
import { VEHICLES_DATA } from '../data/vehiclesData';

interface VehiclesViewProps {
  ownedVehicleIds: string[];
  onToggleOwnedVehicle: (vehicleId: string) => void;
  onNavigateToQuest?: (questId: string) => void;
  searchQuery: string;
}

export const VehiclesView: React.FC<VehiclesViewProps> = ({
  ownedVehicleIds,
  onToggleOwnedVehicle,
  onNavigateToQuest,
  searchQuery,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(VEHICLES_DATA[0].id);

  const filterTabs = [
    { id: 'all', label: '全部專屬載具' },
    { id: 'supercar', label: '極速超跑' },
    { id: 'sports', label: '經典跑車' },
    { id: 'motorcycle', label: '重型機車' },
    { id: 'muscle', label: '肌肉戰車' },
    { id: 'armed', label: '車載武裝載具' }
  ];

  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((v) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = v.name.toLowerCase().includes(query) || v.nameEn.toLowerCase().includes(query);
        const matchesMfr = v.manufacturer.toLowerCase().includes(query);
        const matchesNpc = v.associatedNpc?.toLowerCase().includes(query);
        if (!matchesName && !matchesMfr && !matchesNpc) return false;
      }
      if (selectedType === 'all') return true;
      if (selectedType === 'armed') return v.isArmed;
      return v.type === selectedType;
    });
  }, [searchQuery, selectedType]);

  const activeVehicle = VEHICLES_DATA.find((v) => v.id === selectedVehicleId) || filteredVehicles[0] || VEHICLES_DATA[0];
  const isOwned = activeVehicle ? ownedVehicleIds.includes(activeVehicle.id) : false;

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-[#090c10] select-none">
      {/* Left List Column */}
      <div className="w-full md:w-88 shrink-0 border-r border-[#21262d] bg-[#0d1117] flex flex-col h-full">
        {/* Category Filters */}
        <div className="p-3 border-b border-[#21262d] flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-2.5 py-1 rounded whitespace-nowrap transition-colors ${
                selectedType === tab.id
                  ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-[#161b22] border border-[#30363d] text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vehicles List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#21262d]">
          {filteredVehicles.map((veh) => {
            const isSelected = veh.id === activeVehicle?.id;
            const vehOwned = ownedVehicleIds.includes(veh.id);

            return (
              <div
                key={veh.id}
                onClick={() => setSelectedVehicleId(veh.id)}
                className={`p-3.5 flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-amber-500/15 border-l-2 border-amber-400'
                    : 'hover:bg-[#161b22]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                      vehOwned
                        ? 'bg-cyan-950/70 border-cyan-500/50 text-cyan-300'
                        : 'bg-[#161b22] border-[#30363d] text-neutral-500'
                    }`}
                  >
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-neutral-100 truncate">
                        {veh.name}
                      </span>
                      {veh.isArmed && (
                        <span className="px-1 text-[9px] font-mono uppercase bg-red-950 border border-red-500/40 text-red-300 rounded shrink-0">
                          武裝
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono truncate">
                      {veh.manufacturer} // {veh.topSpeed}
                    </div>
                  </div>
                </div>

                {/* Check status */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleOwnedVehicle(veh.id);
                  }}
                  className={`p-1.5 rounded transition-colors ${
                    vehOwned
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-neutral-600 hover:text-neutral-400'
                  }`}
                  title={vehOwned ? '車庫已收藏' : '標記為已收藏'}
                >
                  {vehOwned ? (
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-neutral-600" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Detail Showcase */}
      {activeVehicle ? (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Hero Banner with Specs */}
          <div
            className={`p-6 rounded-lg border border-[#30363d] bg-gradient-to-br ${activeVehicle.gradient} relative overflow-hidden`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-amber-500/40 text-amber-300 font-bold">
                    {activeVehicle.typeLabel}
                  </span>
                  <span className="text-xs font-mono text-neutral-300">
                    {activeVehicle.manufacturer}
                  </span>
                  {activeVehicle.isArmed && (
                    <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-red-950/90 border border-red-500/50 text-red-300 font-bold flex items-center gap-1">
                      <Crosshair className="w-3 h-3" />
                      車載重機槍火力
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
                  {activeVehicle.name}
                </h2>
                <div className="text-sm font-mono text-neutral-300">
                  {activeVehicle.nameEn}
                </div>
              </div>

              {/* Owned Toggle Button */}
              <button
                onClick={() => onToggleOwnedVehicle(activeVehicle.id)}
                className={`px-4 py-2 rounded text-xs font-mono font-bold flex items-center gap-2 transition-all shrink-0 ${
                  isOwned
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'bg-[#161b22] border border-[#30363d] text-neutral-300 hover:border-amber-500 hover:text-white'
                }`}
              >
                {isOwned ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>車庫已收藏</span>
                  </>
                ) : (
                  <>
                    <Car className="w-4 h-4" />
                    <span>加入個人車庫</span>
                  </>
                )}
              </button>
            </div>

            {/* Spec Meters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10 text-xs font-mono">
              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-neutral-400 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  最高車速 (Top Speed)
                </div>
                <div className="text-lg font-bold text-amber-300 mt-1">
                  {activeVehicle.topSpeed}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-neutral-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  驅動配置 (Drive Type)
                </div>
                <div className="text-lg font-bold text-cyan-300 mt-1">
                  {activeVehicle.driveType}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-neutral-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  引擎馬力 (Horsepower)
                </div>
                <div className="text-lg font-bold text-emerald-300 mt-1">
                  {activeVehicle.horsepower}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-neutral-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  全備車重 (Curb Weight)
                </div>
                <div className="text-lg font-bold text-purple-300 mt-1">
                  {activeVehicle.weight}
                </div>
              </div>
            </div>
          </div>

          {/* Lore Quote */}
          <div className="p-4 rounded-lg bg-[#161b22] border-l-2 border-amber-500 text-amber-200/90 text-sm italic font-serif leading-relaxed">
            {activeVehicle.quoteOrLore}
          </div>

          {/* Acquisition Method & Step-by-Step Guide */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                取得途徑與詳細解鎖攻略
              </h3>
              <span className="text-xs font-mono text-cyan-400">
                {activeVehicle.acquisitionLabel}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#161b22] border border-[#21262d] text-sm text-neutral-300 leading-relaxed font-sans space-y-3">
              <p>{activeVehicle.howToUnlock}</p>

              {activeVehicle.associatedQuestId && (
                <div className="pt-2 flex items-center justify-between border-t border-[#30363d]">
                  <span className="text-xs font-mono text-neutral-400">
                    關聯任務：{activeVehicle.associatedQuestTitle}
                  </span>
                  <button
                    onClick={() =>
                      onNavigateToQuest &&
                      activeVehicle.associatedQuestId &&
                      onNavigateToQuest(activeVehicle.associatedQuestId)
                    }
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
                  >
                    在任務表中定位 <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              性能特色與駕駛體感
            </h3>
            <div className="space-y-2">
              {activeVehicle.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-[#161b22] border border-[#21262d] text-xs sm:text-sm text-neutral-200 flex items-start gap-2.5"
                >
                  <span className="text-cyan-400 font-bold mt-0.5">►</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-neutral-500 font-mono text-xs">
          請從左側載具清單選擇車輛查看情報
        </div>
      )}
    </div>
  );
};
