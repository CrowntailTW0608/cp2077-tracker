import { EndingId, EndingStatus, SaveSlot } from '../types/quest';
import { QUESTS_DATA } from '../data/questsData';

export const ALL_ENDINGS_INFO: {
  id: EndingId;
  name: string;
  nameEn: string;
  category: 'base_game' | 'phantom_liberty';
  description: string;
  keyConditions: string[];
}[] = [
  {
    id: 'the_star',
    name: '星星結局 (The Star)',
    nameEn: 'All Along the Watchtower',
    category: 'base_game',
    description: '與帕娜和阿德卡多部族並肩作戰，鑽探攻破荒坂塔地下神輿。V 選擇返回自己的軀體，與阿德卡多家族、伴侶一同開著魔蜥坦克衝破惡土邊境封鎖線，告別夜之城，奔向無垠星空下的自由新生活。',
    keyConditions: [
      '完成帕娜·帕爾默完整支線系列，至《公路之王》(Queen of the Highway)',
      '天台選擇向帕娜與阿德卡多求助 (ending_choice_panam)',
      '在神輿賽博空間中，選擇越過水面返回自己的肉身 (強尼進入深層網絡)'
    ]
  },
  {
    id: 'the_sun',
    name: '太陽結局 (The Sun)',
    nameEn: 'Path of Glory',
    category: 'base_game',
    description: '服下藥丸讓強尼接管軀體，與來生女王羅格空降突襲荒坂塔。在神輿中 V 選擇保留軀體回到夜之城。V 成為來生酒吧的唯一霸主，夜之城活著的最高傳奇，最後身著太空服隻身潛入外太空頂級「水晶宮太空賭場」執行終極委託。',
    keyConditions: [
      '完成強尼與羅格的約會支線《熾熱的愛》(Blistering Love)',
      '天台選擇相信強尼與羅格聯手出擊 (ending_choice_rogue)，或透過《別怕死神》單挑後回歸肉體',
      '在神輿中由強尼選擇讓 V 活下去'
    ]
  },
  {
    id: 'temperance',
    name: '節制結局 (Temperance)',
    nameEn: 'New Dawn Fades',
    category: 'base_game',
    description: '無論攻破荒坂塔的途徑為何，在神輿深處賽博空間中，V 決定成全強尼·銀手，將自己只剩半年壽命的年輕肉體永久讓給強尼。強尼重獲新生，戒掉了煙酒與暴戾，給鄰居有音樂天賦的孩子買了一把吉他，平靜搭乘長途客運永遠離開夜之城。',
    keyConditions: [
      '成功攻入荒坂塔神輿 (帕娜線、羅格線或別怕死神單挑線均可)',
      '在神輿中跨越天橋，讓強尼·銀手走向肉體出口，V 留在黑牆之後陪伴奧特'
    ]
  },
  {
    id: 'the_devil',
    name: '惡魔結局 (The Devil)',
    nameEn: 'Where Is My Mind?',
    category: 'base_game',
    description: '接受荒坂華子的提議，與荒坂企業軍隊聯手推翻弒父的荒坂賴宣。荒坂三郎透過 Relic 在兒子體內借屍還魂。V 在荒坂軌道空間站接受神經外科手術，強尼被強行抹除。V 面臨「簽字將靈魂版權賣給荒坂保存」或「返回地球度過最後半年生命」的絕望選擇。',
    keyConditions: [
      '天台選擇相信荒坂華子的提議 (ending_choice_hanako)',
      '【特殊成就條件】：在《搜索與摧毀》中主動跳回三樓救出竹村五郎，竹村將在空間站陪伴 V'
    ]
  },
  {
    id: 'reaper',
    name: '別怕死神 (Don\'t Fear The Reaper)',
    nameEn: 'Secret Ending: Solo Arasaka Tower',
    category: 'base_game',
    description: '全遊戲難度最高的傳奇隱藏結局！不連累任何朋友與愛人，V 與強尼兩個人大搖大擺從正門殺進荒坂塔！敵軍全為最高等級滿防裝甲部隊，全程無自動檢查點存檔，陣亡立即出工作人員字幕。完成後可自由衍生為太陽結局或節制結局。',
    keyConditions: [
      '在支線《插管》油田墓地中，對強尼選對三句反省台詞',
      '在米絲蒂天台對話選單出現時，完全不點擊任何選項，靜止等待 300 秒 (5 分鐘)',
      '強尼主動開口提議「一人單挑」，選擇接受開始自殺突襲'
    ]
  },
  {
    id: 'suicide',
    name: '絕路結局 (Suicide)',
    nameEn: 'The Easy Way Out',
    category: 'base_game',
    description: '在米絲蒂天台長椅上，V 不願看著任何朋友為自己犧牲流血，決定吞下毒藥或朝天台扔出手槍，在平靜的晚風中結束一切。片尾演職員名單中，所有曾與 V 產生羈絆的夥伴（維克多、米絲蒂、茱蒂、帕娜、瑞斯）將留下一生難忘、催人淚下的告別語音。',
    keyConditions: [
      '在天台長椅上，選擇「也可以把這一切都結束了」並確認扔下配槍'
    ]
  },
  {
    id: 'the_tower',
    name: '塔樓結局 (The Tower)',
    nameEn: 'Phantom Liberty Ending: Things Done Changed',
    category: 'phantom_liberty',
    description: 'DLC《自由幻局》新增的本體終局！新美國頂級醫療團隊成功移除了 V 大腦中的 Relic，徹底拯救了 V 的性命！然而代價是昏迷了整整兩年，且中樞神經系統永久受損，無法再植入任何戰鬥神機義體。V 失去了一切名望與戰鬥力，隱入夜之城擁擠的人潮中，作為一個無名普通人開啟平靜的第二人生。',
    keyConditions: [
      '在自由幻局中，最終將活著的頌鳥交還給新美國與李德 (《殺人月》交還 或 《受損之物》拒絕安樂死)',
      '接聽李德的電話，乘坐浮空車前往華盛頓特區神經軍事醫院動手術'
    ]
  },
  {
    id: 'king_of_wands',
    name: '權杖之王 (King of Wands)',
    nameEn: 'Phantom Liberty: Songbird to Moon',
    category: 'phantom_liberty',
    description: '自由幻局頌鳥路線：原諒頌鳥的欺瞞，在夜之城軌道航空中心冒著暴雨迎戰新美國黑色行動隊。在通往穿梭機的棧橋上面對李德的拔槍阻攔，V 拔槍擊斃李德，將虛弱的頌鳥送上飛往月球的火箭，讓她徹底擺脫新美國的黑牆奴役重獲自由。',
    keyConditions: [
      '在《火種》中選擇「幫助頌鳥逃亡」(firestarter_help_songbird)',
      '在《殺人月》發射棧橋上，拒絕李德交涉，拔槍擊斃所羅門·李德 (pl_send_songbird_moon)'
    ]
  },
  {
    id: 'king_of_swords',
    name: '寶劍之王 (King of Swords)',
    nameEn: 'Phantom Liberty: Songbird to Reed',
    category: 'phantom_liberty',
    description: '自由幻局頌鳥路線轉折：在得知頌鳥欺騙了自己只有一份解藥後，在最後一刻將昏迷的頌鳥轉交給李德。李德保全了性命並遵守諾言，為 V 爭取到了新美國全套頂級手術名額，解鎖【塔樓結局】資格。',
    keyConditions: [
      '在《火種》中選擇「幫助頌鳥逃亡」(firestarter_help_songbird)',
      '在《殺人月》最後一刻將頌鳥交還給所羅門·李德 (pl_give_songbird_reed)'
    ]
  },
  {
    id: 'king_of_cups',
    name: '聖杯之王 (King of Cups)',
    nameEn: 'Phantom Liberty: Mercy Kill',
    category: 'phantom_liberty',
    description: '自由幻局李德路線：在 Cynosure 地底深淵，被黑牆 AI 寄生折磨的頌鳥痛哭哀求 V 賜她一死。V 拔除管線成全了頌鳥最後的尊嚴。邁爾斯對只得到一具屍體勃然大怒並拒絕給 V 提供任何醫療，但李德的心靈在多年盲從後終於獲得救贖。',
    keyConditions: [
      '在《火種》中選擇「聽從李德上傳冰壁」(firestarter_help_reed)',
      '在《受損之物》深淵中答應頌鳥要求，拔除生命維持系統給予安樂死 (pl_kill_songbird_mercy)'
    ]
  },
  {
    id: 'king_of_pentacles',
    name: '星幣之王 (King of Pentacles)',
    nameEn: 'Phantom Liberty: Songbird Surrendered',
    category: 'phantom_liberty',
    description: '自由幻局李德路線：在 Cynosure 地底拒絕殺死頌鳥，將昏迷抽搐的活體頌鳥交還給李德與邁爾斯。邁爾斯極為滿意並全額兌現諾言為 V 安排手術（解鎖塔樓結局），然而頌鳥餘生將作為生不如死的黑牆抽搐工具被新美國徹底掌控。',
    keyConditions: [
      '在《火種》中選擇「聽從李德上傳冰壁」(firestarter_help_reed)',
      '在《受損之物》中拒絕頌鳥安樂死，呼叫李德將其活體回收 (pl_spare_songbird_corpse)'
    ]
  }
];

export function evaluateEndings(
  completedQuestIds: string[],
  selectedChoiceIds: Record<string, string>
): EndingStatus[] {
  return ALL_ENDINGS_INFO.map((ending) => {
    const missingRequirements: string[] = [];
    let isUnlocked = false;

    if (ending.id === 'the_star') {
      const hasQueenOfHighway = completedQuestIds.includes('act2_panam_queen_of_highway');
      if (!hasQueenOfHighway) {
        missingRequirements.push('尚未完成帕娜系列最終任務《公路之王》');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'the_sun') {
      const hasBlisteringLove = completedQuestIds.includes('side_blistering_love');
      const hasSecretEnding = selectedChoiceIds['side_chippin_in'] === 'chippin_in_secret_ending';
      if (!hasBlisteringLove && !hasSecretEnding) {
        missingRequirements.push('尚未完成強尼與羅格約會任務《熾熱的愛》（或未解鎖隱藏結局對話）');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'temperance') {
      const hasPanam = completedQuestIds.includes('act2_panam_queen_of_highway');
      const hasRogue = completedQuestIds.includes('side_blistering_love');
      const hasSecret = selectedChoiceIds['side_chippin_in'] === 'chippin_in_secret_ending';
      if (!hasPanam && !hasRogue && !hasSecret) {
        missingRequirements.push('需先解鎖帕娜線、羅格線或單挑荒坂塔路線其中之一');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'the_devil') {
      const hasSearchAndDestroy = completedQuestIds.includes('act2_arasaka_search_and_destroy');
      if (!hasSearchAndDestroy) {
        missingRequirements.push('尚未推進完成荒坂主線《搜索與摧毀》');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'reaper') {
      const hasSecretDialog = selectedChoiceIds['side_chippin_in'] === 'chippin_in_secret_ending';
      if (!hasSecretDialog) {
        missingRequirements.push('尚未在《插管》油田墓地中選擇正確的三段真情對話');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'suicide') {
      const hasNocturne = completedQuestIds.includes('act3_nocturne_op55n1') || completedQuestIds.includes('act2_arasaka_search_and_destroy');
      if (!hasNocturne) {
        missingRequirements.push('需推進至第 3 幕天台節點');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'the_tower') {
      const gaveSongbirdReed = selectedChoiceIds['pl_the_killing_moon'] === 'pl_give_songbird_reed';
      const sparedSongbirdCorpse = selectedChoiceIds['pl_somewhat_damaged'] === 'pl_spare_songbird_corpse';
      if (!gaveSongbirdReed && !sparedSongbirdCorpse) {
        missingRequirements.push('需在《殺人月》交出頌鳥，或在《受損之物》拒絕安樂死並將活體頌鳥交還李德');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'king_of_wands') {
      const helpedSongbird = selectedChoiceIds['pl_firestarter'] === 'firestarter_help_songbird';
      const sentMoon = selectedChoiceIds['pl_the_killing_moon'] === 'pl_send_songbird_moon';
      if (!helpedSongbird || !sentMoon) {
        missingRequirements.push('需在《火種》背叛李德幫助頌鳥，並在《殺人月》射殺李德送頌鳥登月');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'king_of_swords') {
      const helpedSongbird = selectedChoiceIds['pl_firestarter'] === 'firestarter_help_songbird';
      const gaveReed = selectedChoiceIds['pl_the_killing_moon'] === 'pl_give_songbird_reed';
      if (!helpedSongbird || !gaveReed) {
        missingRequirements.push('需在《火種》幫助頌鳥，但在《殺人月》最後一刻將頌鳥交還李德');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'king_of_cups') {
      const helpedReed = selectedChoiceIds['pl_firestarter'] === 'firestarter_help_reed';
      const mercyKill = selectedChoiceIds['pl_somewhat_damaged'] === 'pl_kill_songbird_mercy';
      if (!helpedReed || !mercyKill) {
        missingRequirements.push('需在《火種》啟動冰壁背叛頌鳥，並在《受損之物》深淵成全頌鳥安樂死');
      } else {
        isUnlocked = true;
      }
    } else if (ending.id === 'king_of_pentacles') {
      const helpedReed = selectedChoiceIds['pl_firestarter'] === 'firestarter_help_reed';
      const spared = selectedChoiceIds['pl_somewhat_damaged'] === 'pl_spare_songbird_corpse';
      if (!helpedReed || !spared) {
        missingRequirements.push('需在《火種》啟動冰壁，並在《受損之物》拒絕安樂死將活體交還新美國');
      } else {
        isUnlocked = true;
      }
    }

    return {
      id: ending.id,
      name: ending.name,
      nameEn: ending.nameEn,
      category: ending.category,
      description: ending.description,
      isUnlocked,
      missingRequirements,
      keyConditions: ending.keyConditions
    };
  });
}

const STORAGE_KEY = 'cyberpunk2077_quest_tracker_save_slots_v2';

export function getDefaultSaveSlot(): SaveSlot {
  return {
    id: 'default',
    name: '存檔 1：夜之城傳奇',
    updatedAt: new Date().toISOString(),
    completedQuestIds: [
      'prologue_rescue_sandra',
      'act1_the_ripperdoc'
    ],
    selectedChoiceIds: {},
    ownedVehicleIds: [
      'archer_hella_ecd_i360' // 開局自帶 V 的第一台愛車
    ],
    note: '全主線、自由幻局與隱藏秘密任務進度'
  };
}

export function loadSaveSlots(): Record<string, SaveSlot> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = { default: getDefaultSaveSlot() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Object.keys(parsed).length === 0) {
      const initial = { default: getDefaultSaveSlot() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return parsed;
  } catch {
    return { default: getDefaultSaveSlot() };
  }
}

export function saveSaveSlots(slots: Record<string, SaveSlot>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}
