import { TarotCard } from '../types/extra';

export const TAROT_DATA: TarotCard[] = [
  {
    id: 'the_fool',
    number: '0',
    name: '愚者 (The Fool)',
    nameEn: 'The Fool',
    district: '沃森區 (Watson)',
    locationDetail: '位於 V 的巨型大廈 H10 個人公寓門外右側走廊牆壁上。',
    interpretation: '代表無知無畏的起點、即將踏上未知的冒險旅途。象徵 V 剛步入夜之城時對名利的盲目渴望，以及隨後引發的命運巨浪。',
    endingConnection: '整段英雄悲劇旅程的序章。',
    category: 'base_major'
  },
  {
    id: 'the_magician',
    number: 'I',
    name: '魔術師 (The Magician)',
    nameEn: 'The Magician',
    district: '沃森區 (Watson)',
    locationDetail: '麗姿酒吧（Lizzie\'s Bar）對面高架橋墩立柱上。',
    interpretation: '代表強大的自我掌控、技術才能與欺騙偽裝。象徵夜之城的各路黑客與超夢技師（如茱蒂），能隨心所欲重塑現實。',
    category: 'base_major'
  },
  {
    id: 'the_high_priestess',
    number: 'II',
    name: '女祭司 (The High Priestess)',
    nameEn: 'The High Priestess',
    district: '西流區 (Westbrook)',
    locationDetail: '《臨終祈禱》中追捕與拘禁荒坂華子廢棄大樓的樓梯轉角牆面。',
    interpretation: '代表潛意識、直覺、守密與冷靜的母性威嚴。對應荒坂華子身上所散發的深沉不可測與家族秘密。',
    category: 'base_major'
  },
  {
    id: 'the_empress',
    number: 'III',
    name: '女皇 (The Empress)',
    nameEn: 'The Empress',
    district: '市中心 (City Center)',
    locationDetail: '來生酒吧（Afterlife）地下入口樓梯下方的牆壁上。',
    interpretation: '象徵母權、豐收、統治力與守護者。代表掌管全夜之城傭兵命脈的來生女王——羅格（Rogue）。',
    endingConnection: '對應太陽結局中，V 繼承羅格王座統治來生。',
    category: 'base_major'
  },
  {
    id: 'the_emperor',
    number: 'IV',
    name: '皇帝 (The Emperor)',
    nameEn: 'The Emperor',
    district: '沃森區 (Watson)',
    locationDetail: '紺碧大廈（Konpeki Plaza）正門迎賓車道側邊裝飾矮牆。',
    interpretation: '象徵至高無上的權力、鐵血專制與家父長統治。直接對應荒坂帝國的締造者——荒坂三郎。',
    endingConnection: '惡魔結局中三郎借屍還魂重臨人間。',
    category: 'base_major'
  },
  {
    id: 'the_hierophant',
    number: 'V',
    name: '教皇 (The Hierophant)',
    nameEn: 'The Hierophant',
    district: '西流區 (Westbrook)',
    locationDetail: '日本街小唐人街下方運河橋洞，初次與竹村會面地點旁。',
    interpretation: '代表傳統、秩序、忠誠與信仰的指引者。象徵恪守武士道古老準則的忠僕——竹村五郎。',
    category: 'base_major'
  },
  {
    id: 'the_lovers',
    number: 'VI',
    name: '戀人 (The Lovers)',
    nameEn: 'The Lovers',
    district: '北橡區 (North Oak)',
    locationDetail: '銀色像素露天汽車電影院（Drive-in Cinema）巨大露天螢幕背面。',
    interpretation: '代表選擇、結合、道德抉擇與跨越時空的羈絆。此處正是強尼借用 V 的身體與羅格重聚約會之所。',
    associatedQuestTitle: '《熾熱的愛》(Blistering Love)',
    category: 'base_major'
  },
  {
    id: 'the_chariot',
    number: 'VII',
    name: '戰車 (The Chariot)',
    nameEn: 'The Chariot',
    district: '沃森區 (Watson)',
    locationDetail: '米絲蒂通靈屋與老維診所之間的後巷鐵閘門旁。',
    interpretation: '代表意志力克服矛盾、駕馭兩匹拉力相反的戰馬（V 與強尼兩個靈魂共用一具肉身）。',
    category: 'base_major'
  },
  {
    id: 'the_hermit',
    number: 'IX',
    name: '隱士 (The Hermit)',
    nameEn: 'The Hermit',
    district: '太平洲 (Pacifica)',
    locationDetail: '太平洲巫毒幫教堂右側矮牆（通往黑牆的入口附近）。',
    interpretation: '代表孤獨尋求真理、脫離塵世探索靈魂深處。象徵黑牆彼端超越凡人認知的超然 AI——奧特·坎寧安。',
    category: 'base_major'
  },
  {
    id: 'the_hanged_man',
    number: 'XII',
    name: '倒吊人 (The Hanged Man)',
    nameEn: 'The Hanged Man',
    district: '惡土地區 (Badlands)',
    locationDetail: '惡土北部廢棄油田，強尼·銀手被拋屍的無名亂葬崗水塔下。',
    interpretation: '象徵為了理想做出的自我犧牲、暫時的停滯與心靈頓悟。強尼在此處徹底反省了自己五十年前的自負與狂妄。',
    associatedQuestTitle: '《插入晶片》(Chippin\' In)',
    category: 'base_major'
  },
  {
    id: 'death',
    number: 'XIII',
    name: '死神 (Death)',
    nameEn: 'Death',
    district: '市政中心 (City Center)',
    locationDetail: '餘燼高級餐廳（Embers）外側玻璃帷幕牆面上。',
    interpretation: '並非字面意義的毀滅，而是徹底的「終結與新生」。這座餐廳正是主線【無退路點】的門檻，跨入後人生將不可逆地走向終章。',
    associatedQuestTitle: '《夜曲 Op55N1》',
    category: 'base_major'
  },
  {
    id: 'temperance',
    number: 'XIV',
    name: '節制 (Temperance)',
    nameEn: 'Temperance',
    district: '北橡區 (North Oak)',
    locationDetail: '北橡區骨灰紀念堂（Columbarium）正門壁龕銘文牆上。',
    interpretation: '代表調和、內心平靜與物質的昇華。對應「節制結局」：強尼接過 V 的肉身，告別暴戾，乘長途客運平靜離城。',
    endingConnection: '對應【節制結局】(Temperance)',
    category: 'base_major'
  },
  {
    id: 'the_tower',
    number: 'XVI',
    name: '高塔 (The Tower)',
    nameEn: 'The Tower',
    district: '市中心 (City Center)',
    locationDetail: '荒坂塔地下基座玻璃廊道下方。',
    interpretation: '象徵巴別塔的崩塌、傲慢的破滅與帝國的瓦解。對應 2023 年強尼引爆荒坂塔，以及 DLC《自由幻局》的塔樓平民結局。',
    endingConnection: '對應自由幻局新增的【塔樓結局】(The Tower)',
    category: 'base_major'
  },
  {
    id: 'the_star',
    number: 'XVII',
    name: '星星 (The Star)',
    nameEn: 'The Star',
    district: '惡土地區 (Badlands)',
    locationDetail: '惡土南部巨型太陽能電池陣列基地鐵塔基座。',
    interpretation: '象徵黑暗中的希望之光、歸屬感與心靈自由。對應 V 與帕娜及阿德卡多家族衝破封鎖線浪跡天涯。',
    endingConnection: '對應【星星結局】(The Star - 全劇最溫暖結局)',
    category: 'base_major'
  },
  {
    id: 'the_moon',
    number: 'XVIII',
    name: '月亮 (The Moon)',
    nameEn: 'The Moon',
    district: '北橡區 (North Oak)',
    locationDetail: '荒坂華子豪華日式宅邸外部圍牆邊緣。',
    interpretation: '代表迷茫、幻象、不可靠的許諾與未知的遠方。暗示頌鳥逃往月球的渴望，以及荒坂太空站手術的虛妄。',
    category: 'base_major'
  },
  {
    id: 'the_sun',
    number: 'XIX',
    name: '太陽 (The Sun)',
    nameEn: 'The Sun',
    district: '沃森區 (Watson)',
    locationDetail: 'V 的大樓底部車道外牆，米絲蒂診所出口外。',
    interpretation: '象徵耀眼的成功、至高無上的名望與榮耀巔峰。對應 V 成為來生之王並前往太空賭場執行最後任務。',
    endingConnection: '對應【太陽結局】(The Sun - 活著的傳奇)',
    category: 'base_major'
  },
  {
    id: 'the_world',
    number: 'XXI',
    name: '世界 (The World)',
    nameEn: 'The World',
    district: '沃森區 (Watson)',
    locationDetail: '米絲蒂通靈屋天台長椅後方陽台牆面。',
    interpretation: '代表圓滿、旅途的終點與下一個輪迴的開啟。V 坐在這張長椅上面對夜之城全景做出命運抉擇。',
    category: 'base_major'
  },
  // 自由幻局 4 張王牌
  {
    id: 'king_of_wands_tarot',
    number: '王牌',
    name: '杖之王 (King of Wands)',
    nameEn: 'King of Wands',
    district: '狗鎮 (Dogtown)',
    locationDetail: '狗鎮室外殘破籃球場鐵絲網後方水泥牆上。',
    interpretation: '象徵熾烈的意志、反叛的勇氣與追尋自由的烈火。對應頌鳥突破新美國黑牆奴役登月的決絕。',
    endingConnection: '對應自由幻局【杖之王結局】(King of Wands)',
    category: 'phantom_court'
  },
  {
    id: 'king_of_swords_tarot',
    number: '王牌',
    name: '劍之王 (King of Swords)',
    nameEn: 'King of Swords',
    district: '狗鎮 (Dogtown)',
    locationDetail: '黑石體育場黑市與走私通道交叉口的防爆鐵門側牆。',
    interpretation: '象徵理智的殘酷、妥協與背叛的代價。對應在最後一刻將百合子移交給李德換取自己的生存手術。',
    endingConnection: '對應自由幻局【劍之王結局】(King of Swords)',
    category: 'phantom_court'
  },
  {
    id: 'king_of_cups_tarot',
    number: '王牌',
    name: '杯之王 (King of Cups)',
    nameEn: 'King of Cups',
    district: '狗鎮 (Dogtown)',
    locationDetail: '狗鎮入口檢查站旁廢棄的軍用科技掩體牆面上。',
    interpretation: '象徵悲憫、仁慈與從痛苦中解脫。對應在深淵地堡成全百合子的苦求，為其拔管安樂死。',
    endingConnection: '對應自由幻局【杯之王結局】(King of Cups)',
    category: 'phantom_court'
  },
  {
    id: 'king_of_pentacles_tarot',
    number: '王牌',
    name: '星之王 (King of Pentacles)',
    nameEn: 'King of Pentacles',
    district: '狗鎮 (Dogtown)',
    locationDetail: '長夏汽車旅館 V 與邁爾斯總統的地下安全屋入口外側。',
    interpretation: '象徵契約的履行、冷酷的世俗利益與國家體制。對應將活著的頌鳥送回新美國淪為黑牆抽搐工具。',
    endingConnection: '對應自由幻局【星之王結局】(King of Pentacles)',
    category: 'phantom_court'
  }
];
