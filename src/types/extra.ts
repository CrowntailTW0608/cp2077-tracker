export type WeaponCategory =
  | 'pistol_revolver' // 手槍 / 左輪
  | 'assault_smg'     // 突擊步槍 / 衝鋒槍
  | 'shotgun_lmg'     // 霰彈槍 / 輕機槍
  | 'sniper_precision'// 狙擊步槍 / 精密步槍
  | 'blade_katana'    // 武士刀 / 短刀 / 螳螂刀
  | 'blunt_melee'     // 鈍器 / 街頭大猩猩手臂
  | 'special_tech';   // 黑牆科技 / 特殊

export interface IconicWeapon {
  id: string;
  name: string;
  nameEn: string;
  category: WeaponCategory;
  categoryLabel: string;
  manufacturer: string;
  baseType: string;
  isMissable: boolean; // 是否為錯過即無法取得
  missableWarning?: string; // 錯過警告細節
  iconicEffect: string; // 不朽專屬特效
  howToGet: string; // 取得方式詳細攻略
  associatedQuestId?: string; // 關聯任務 ID
  associatedQuestTitle?: string;
  associatedNpc?: string;
  colorGradient: string;
}

export interface TarotCard {
  id: string;
  number: string; // 0 到 XXI 或 侍從/騎士/王后/國王
  name: string;
  nameEn: string;
  district: string; // 所在區域 (沃森、西流、海伍德、惡土、狗鎮等)
  locationDetail: string; // 詳細塗鴉壁畫位置
  interpretation: string; // 米絲蒂解讀與哲學寓意
  endingConnection?: string; // 對應的命運結局暗示
  associatedQuestTitle?: string;
  category: 'base_major' | 'phantom_court'; // 本體大阿爾克那 或 自由幻局王牌
}

export interface Cyberpsycho {
  id: string;
  name: string;
  alias: string;
  district: string;
  location?: string;
  locationDetail: string; // 目擊詳細地點
  backgroundStory: string; // 賽博精神病患悲劇由來
  combatWeakness: string; // 戰術弱點與抗性
  nonLethalTip: string; // 非致命生擒攻略與避坑
  associatedQuestName: string;
  recommendedLoadout: string; // 建議義體與武器配裝
}

export interface FixerInfo {
  id: string;
  name: string;
  nameEn: string;
  district: string;
  districtLabel: string;
  totalGigs: number; // 委託總數
  finalReward: string; // 委託全清終極獎勵 (武器/載具)
  finalRewardType: 'weapon' | 'vehicle' | 'cyberware' | 'cash';
  bio: string;
  keyGigs: {
    name: string;
    summary: string;
  }[];
}

export interface BuildGuide {
  id: string;
  name: string;
  nameEn: string;
  archetype: string;
  description: string;
  coreAttributes: {
    body: number;      // 肉體
    reflexes: number;  // 反應
    technical: number; // 技術
    intelligence: number; // 智力
    cool: number;      // 沉著
  };
  keyPerks: string[]; // 必點核心專精天賦
  cyberwareRecommendation: string[]; // 推薦核心義體
  weaponsRecommendation: string[]; // 推薦主副武器搭配
  playstyleTips: string[]; // 戰鬥手法與連招思路
}
