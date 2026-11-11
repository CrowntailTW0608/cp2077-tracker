export type VehicleType = 
  | 'supercar'    // 極速超跑 (石中劍等)
  | 'sports'      // 經典跑車 (保時捷911、古德拉Turbo-R)
  | 'motorcycle'  // 重型機車 (傑克ARCH、草薙CT-3X、以森)
  | 'muscle'      // 重武裝肌肉車 (Type-66 Hoon 肯布洛克)
  | 'offroad'     // 惡土越野車/卡車 (巨獸、加利納)
  | 'armed';      // 武裝特勤載具 (法外之徒威勒、小馬)

export type AcquisitionMethod = 
  | 'free_quest'        // 免費任務獲贈 (如傑克機車、強尼保時捷、巨獸)
  | 'hidden_easter_egg' // 隱藏地圖彩蛋 (如免費黑石中劍、43號肯布洛克戰車)
  | 'phantom_liberty'   // 自由幻局新任務 (如武裝威勒、敞篷保時捷)
  | 'lifepath_exclusive'; // 出身專屬 (如浪人開局老爺車)

export interface Vehicle {
  id: string;
  name: string;
  nameEn: string;
  manufacturer: string;     // 車廠 (保時捷、雷菲爾德、古德拉、ARCH、天尊...)
  type: VehicleType;
  typeLabel: string;
  acquisitionMethod: AcquisitionMethod;
  acquisitionLabel: string;
  topSpeed: string;         // 最高車速
  driveType: string;        // 驅動方式 (AWD / RWD / FWD)
  horsepower: string;       // 馬力
  weight: string;           // 車重
  isArmed: boolean;         // 是否配備車載武器 (加特林機槍/導向飛彈)
  associatedQuestId?: string; // 關聯任務 ID (點擊可導航至任務推進表)
  associatedQuestTitle?: string;
  associatedNpc?: string;   // 關聯人物
  howToUnlock: string;      // 詳細取得方式與避坑步驟
  features: string[];       // 載具特點 (如操控性、外觀細節)
  quoteOrLore: string;      // 官方車輛誌介紹
  gradient: string;         // 卡片視覺漸層色彩
}
