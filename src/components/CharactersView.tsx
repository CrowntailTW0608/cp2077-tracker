import React, { useState, useMemo } from 'react';
import {
  Heart,
  GitBranch,
  Shield,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { CharacterDossier } from '../types/character';
import { CHARACTERS_DATA } from '../data/charactersData';

interface CharactersViewProps {
  onSelectQuestId?: (questId: string) => void;
  searchQuery: string;
}

export const CharactersView: React.FC<CharactersViewProps> = ({
  onSelectQuestId,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(CHARACTERS_DATA[0].id);

  const categories = [
    { id: 'all', label: '全部關鍵人物' },
    { id: 'companion', label: '主要夥伴與浪漫對象' },
    { id: 'phantom_liberty', label: '自由幻局特工/首領' },
    { id: 'arasaka_corp', label: '荒坂帝國與企業高層' },
    { id: 'street_fixer', label: '街頭親友與合事佬' }
  ];

  const filteredCharacters = useMemo(() => {
    return CHARACTERS_DATA.filter((char) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = char.name.toLowerCase().includes(query) || char.nameEn.toLowerCase().includes(query);
        const matchesAffiliation = char.affiliation.toLowerCase().includes(query);
        const matchesGear = char.associatedIconicGear?.some(g => g.toLowerCase().includes(query));
        if (!matchesName && !matchesAffiliation && !matchesGear) return false;
      }
      if (selectedCategory === 'all') return true;
      return char.category === selectedCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeCharacter = CHARACTERS_DATA.find((c) => c.id === selectedCharacterId) || filteredCharacters[0] || CHARACTERS_DATA[0];

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-[#090c10] select-none">
      {/* Left List Column */}
      <div className="w-full md:w-80 shrink-0 border-r border-[#21262d] bg-[#0d1117] flex flex-col h-full">
        {/* Category Filter Chips */}
        <div className="p-3 border-b border-[#21262d] flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2 py-1 rounded whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-[#161b22] border border-[#30363d] text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Character List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#21262d]">
          {filteredCharacters.map((char) => {
            const isSelected = char.id === activeCharacter?.id;

            return (
              <div
                key={char.id}
                onClick={() => setSelectedCharacterId(char.id)}
                className={`p-3.5 flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-amber-500/15 border-l-2 border-amber-400'
                    : 'hover:bg-[#161b22]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded flex items-center justify-center font-mono font-bold text-xs uppercase shrink-0 border ${char.avatarColor}`}
                  >
                    {char.avatarInitials}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-neutral-100 truncate">
                        {char.name}
                      </span>
                      {char.romanceCondition && (
                        <Heart className="w-3 h-3 text-rose-400 shrink-0 fill-rose-500/30" />
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono truncate">
                      {char.affiliation}
                    </div>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-neutral-500 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Detail Dossier */}
      {activeCharacter ? (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg bg-[#161b22] border border-[#30363d]">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center font-mono font-black text-xl uppercase border ${activeCharacter.avatarColor} shadow-lg`}
              >
                {activeCharacter.avatarInitials}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-black/40 border border-neutral-700 text-amber-400 font-bold">
                    {activeCharacter.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {activeCharacter.affiliation}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-neutral-100 mt-1">
                  {activeCharacter.name}
                </h2>
                <div className="text-sm font-mono text-neutral-400">
                  {activeCharacter.nameEn} // {activeCharacter.title}
                </div>
              </div>
            </div>

            {/* Romance Pill if available */}
            {activeCharacter.romanceCondition && (
              <div className="px-3 py-1.5 rounded bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-1.5 shrink-0">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-500/30" />
                <span>浪漫對象</span>
              </div>
            )}
          </div>

          {/* Quote */}
          <div className="p-4 rounded-lg bg-[#0d1117] border-l-2 border-amber-500 text-amber-200/90 text-sm italic font-serif leading-relaxed">
            "{activeCharacter.quote}"
          </div>

          {/* Background Biography */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              人物背景檔案
            </h3>
            <p className="p-4 rounded-lg bg-[#161b22] border border-[#21262d] text-sm text-neutral-300 leading-relaxed font-sans">
              {activeCharacter.background}
            </p>
          </div>

          {/* Romance Conditions if applicable */}
          {activeCharacter.romanceCondition && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                浪漫戀愛確立條件
              </h3>
              <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-200 text-xs sm:text-sm leading-relaxed">
                {activeCharacter.romanceCondition}
              </div>
            </div>
          )}

          {/* Branch Fates */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-amber-400" />
              關鍵劇情走向與命運結局
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {activeCharacter.branchFates.map((fate, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3.5 rounded bg-[#161b22] border border-[#21262d] space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-neutral-200">
                      {fate.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        fate.isGoodFate
                          ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                          : 'bg-red-950/60 border-red-500/40 text-red-300'
                      }`}
                    >
                      {fate.isGoodFate ? '正面結局' : '慘烈/悲劇命運'}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    <span className="text-cyan-400 font-bold">觸發條件：</span> {fate.condition}
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    <span className="text-amber-400 font-bold font-mono">後續結果：</span> {fate.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quest Interactions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              與 V 的任務互動記錄
            </h3>
            <div className="space-y-2">
              {activeCharacter.questInteractions.map((interaction, iIdx) => (
                <div
                  key={iIdx}
                  onClick={() => onSelectQuestId && onSelectQuestId(interaction.questId)}
                  className="p-3 rounded bg-[#161b22] border border-[#21262d] hover:border-cyan-500/40 transition-colors flex items-center justify-between cursor-pointer group"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-200 group-hover:text-cyan-300 transition-colors">
                        {interaction.questTitle}
                      </span>
                      {interaction.isCriticalBranch && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 bg-red-950/80 border border-red-500/40 text-red-300 rounded">
                          重大分岔
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400">{interaction.interactionSummary}</p>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 group-hover:underline flex items-center gap-1 shrink-0 ml-3">
                    查看任務 <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Associated Gear */}
          {activeCharacter.associatedIconicGear && activeCharacter.associatedIconicGear.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                關聯不朽裝備與遺物
              </h3>
              <div className="p-3.5 rounded bg-[#161b22] border border-[#21262d] flex flex-wrap gap-2">
                {activeCharacter.associatedIconicGear.map((gear, gIdx) => (
                  <span
                    key={gIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-amber-500/10 border border-amber-500/40 text-amber-300 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {gear}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-neutral-500 font-mono text-xs">
          請從左側列表選擇人物查看檔案
        </div>
      )}
    </div>
  );
};
