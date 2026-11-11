export type CharacterCategory =
  | 'companion'       // 核心夥伴與浪漫對象 (強尼、茱蒂、帕娜、瑞斯、凱瑞)
  | 'phantom_liberty' // 自由幻局核心人物 (百合子、李德、邁爾斯、漢森、亞歷克斯)
  | 'arasaka_corp'    // 荒坂與企業 (竹村、華子、梅瑞迪絲)
  | 'street_fixer';   // 街頭兄弟與密友 (傑克、維克多、米絲蒂、羅格、奧特)

export interface CharacterDossier {
  id: string;
  name: string;
  nameEn: string;
  category: CharacterCategory;
  categoryLabel: string;
  title: string;              // 身分頭銜
  affiliation: string;        // 隸屬勢力 / 陣營
  avatarColor: string;        // 識別色彩主題
  avatarInitials: string;     // 頭像縮寫代號
  quote: string;              // 經典名言 / 語錄
  background: string;         // 背景介紹
  questInteractions: {
    questId: string;
    questTitle: string;
    interactionSummary: string;
    isCriticalBranch?: boolean;
  }[];
  branchFates: {
    title: string;
    condition: string;
    result: string;
    isGoodFate?: boolean;
  }[];
  romanceCondition?: string;  // 浪漫條件 (男V/女V/特定任務)
  associatedIconicGear?: string[]; // 不朽裝備獎勵
}
