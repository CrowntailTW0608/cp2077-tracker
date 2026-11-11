export type QuestCategory =
  | 'prologue'
  | 'act1'
  | 'act2_arasaka'
  | 'act2_judy'
  | 'act2_panam'
  | 'act2_voodoo'
  | 'phantom_liberty'
  | 'act3_endings'
  | 'major_side'
  | 'hidden_secrets';

export type EndingId =
  | 'the_devil'      // 惡魔結局 (荒坂)
  | 'the_star'       // 星星結局 (帕娜/阿德卡多)
  | 'the_sun'        // 太陽結局 (羅格/夜之城之王)
  | 'temperance'     // 節制結局 (身體讓給強尼)
  | 'reaper'         // 別怕死神 (單挑荒坂塔隱藏結局)
  | 'suicide'        // 絕路結局 (天台自我了斷)
  | 'the_tower'      // 塔樓結局 (自由幻局新美國治療平民結局)
  | 'king_of_wands'  // 杖之王 (頌鳥登月)
  | 'king_of_swords' // 劍之王 (交還頌鳥給李德)
  | 'king_of_cups'   // 杯之王 (安樂死頌鳥)
  | 'king_of_pentacles'; // 星之王 (交還活著的頌鳥)

export interface BranchChoice {
  id: string;
  label: string;
  description: string;
  spoilerDetail: string;
  consequences: string[];
  mutuallyExcludesQuests?: string[];
  unlocksQuests?: string[];
  impactsEndings?: {
    endingId: EndingId;
    status: 'unlocked' | 'locked' | 'required';
    note: string;
  }[];
  rewards?: string[];
}

export interface QuestNode {
  id: string;
  title: string;
  titleEn: string;
  category: QuestCategory;
  actLabel: string;
  summary: string;
  spoilerSummary: string;
  prerequisites: string[]; // quest IDs
  isBranchPoint: boolean; // 是否為關鍵分岔節點
  isPointOfNoReturn?: boolean; // 是否為無退路點
  branchType?: 'critical_plot' | 'life_or_death' | 'companion_romance' | 'mutually_exclusive';
  choices?: BranchChoice[];
  keyRewards?: string[];
  iconicGear?: string[];
  tips?: string;
  associatedNpc?: string;
  backgroundContext?: string;      // 任務背景與委託起源
  tacticalObjectives?: string[];   // 行動目標與推進階段
  explorationSecrets?: string[];   // 探索細節與防錯提示
  soundtrackLore?: {               // 任務同名原曲搖滾考據
    songTitle: string;
    artist: string;
    releaseYear: string;
    description: string;
  };
  // Node layout coordinates for flowchart visualization
  gridPos: {
    column: number; // 0 to 12
    row: number;    // 0 to 10
  };
}

export interface UserProgress {
  completedQuestIds: string[];
  selectedChoiceIds: Record<string, string>; // questId -> choiceId
  activeSlotId: string;
  slots: Record<string, SaveSlot>;
  spoilerMode: boolean; // true = hide spoilers, false = show spoilers
  searchQuery: string;
  activeCategoryFilter: string; // 'all' or category
  viewMode: 'flowchart' | 'checklist';
  selectedQuestId: string | null;
}

export interface SaveSlot {
  id: string;
  name: string;
  updatedAt: string;
  completedQuestIds: string[];
  selectedChoiceIds: Record<string, string>;
  ownedVehicleIds?: string[];
  ownedWeaponIds?: string[];          // 不朽武器收藏
  collectedTarotIds?: string[];       // 塔羅牌壁畫收集
  capturedCyberpsychoIds?: string[];  // 賽博精神病生擒
  completedFixerIds?: string[];       // 合事佬全委託成就
  note?: string;
}

export interface EndingStatus {
  id: EndingId;
  name: string;
  nameEn: string;
  description: string;
  isUnlocked: boolean;
  missingRequirements: string[];
  keyConditions: string[];
  category: 'base_game' | 'phantom_liberty';
}
