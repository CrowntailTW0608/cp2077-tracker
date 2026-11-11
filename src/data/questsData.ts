import { QuestNode } from '../types/quest';

export const QUESTS_DATA: QuestNode[] = [
  // ==========================================
  // 序章與第 1 幕 (PROLOGUE & ACT 1)
  // ==========================================
  {
    id: 'prologue_rescue_sandra',
    title: '救人',
    titleEn: 'The Rescue',
    category: 'prologue',
    actLabel: '序章',
    summary: 'V 與傑克深入清道夫黑窩，搶救被非法摘取義體的高級創傷小隊白金會員珊卓·多賽特。',
    spoilerSummary: '成功拔除神經病毒並將心跳驟停的珊卓帶到陽台交給武裝創傷小隊。此任務確立了傑克的兄弟情誼與 V 在夜之城傭兵身分的起點，事後駕駛自己的「射手赫拉」返家。',
    prerequisites: [],
    isBranchPoint: false,
    keyRewards: ['射手赫拉 EC-D I360 (初始座車)', '創傷小隊鉑金晶片記憶'],
    iconicGear: [],
    tips: '建議蹲伏暗殺浴室外的看守，避免驚動手持霰彈槍的清道夫頭目。',
    associatedNpc: 'Jackie Welles / T-Bug',
    backgroundContext: '夜之城邊緣充斥著殘酷的器官義體販子「清道夫」（Scavengers）。合事佬和歌子派下試煉委託，要剛入行的 V 和好兄弟傑克潛入歌舞伎區的髒亂公寓，搜救失聯的企業女主管珊卓·多賽特。',
    tacticalObjectives: [
      '階段一【潛入公寓】：在 T-Bug 的遠端訊號指引下，從通風管道與破窗無聲潛入，破壞監視器並逐一消滅外圍清道夫。',
      '階段二【突入浴缸】：在滿是冰塊與遺體的浴室中搜尋生命訊號，將珊卓抱出並使用神經分流針拔除致命病毒。',
      '階段三【天台交接】：抱著珊卓前往陽台等待創傷小隊（Trauma Team）裝甲浮空車降落，聽從武裝隊員指示後撤退。'
    ],
    explorationSecrets: [
      '在清道夫主臥室的隱藏木箱內可搜刮到綠色手槍與大量藥劑。',
      '珊卓身上的資料晶片如果在此時暫不破解，可在後續支線《全金屬狂潮》中向珊卓本人勒索或坦誠相待換取額外報酬。'
    ],
    gridPos: { column: 0, row: 2 }
  },
  {
    id: 'act1_the_ripperdoc',
    title: '神機醫',
    titleEn: 'The Ripperdoc',
    category: 'act1',
    actLabel: '第 1 幕',
    summary: '前往小唐人街造訪老友維克多，安裝第一套光學眼與皮下護甲義體，為大買賣做準備。',
    spoilerSummary: '維克多不僅免費借貸昂貴的「歧路司光學眼1型」與握把連接器給 V，更展現了如同父輩般的關懷。V 欠下 21,000 歐元債務。',
    prerequisites: ['prologue_rescue_sandra'],
    isBranchPoint: false,
    keyRewards: ['歧路司光學眼 1 型', '掌心皮下握把'],
    tips: '記得在第二幕有錢時盡早返回診所還清 21,000 歐元，解鎖老維所有的傳奇級義體商品。',
    associatedNpc: 'Viktor Vector / Jackie Welles',
    backgroundContext: '為了承接夜之城傳奇合事佬德克斯特·德肖恩的高風險大案，V 必須升級自身的作戰介面。維克多診所位於迷霧密室後巷，是 V 最信賴的心靈港灣與改裝站。',
    tacticalObjectives: [
      '階段一【會面傑克】：在米絲蒂通靈屋門口與吃著麵條的傑克碰頭，寒暄並取得德肖恩派發的作戰定金。',
      '階段二【神機義體改造】：坐上手術椅，讓維克多切除舊眼球並接入全新歧路司光學掃描系統與槍械彈道分析模組。'
    ],
    explorationSecrets: [
      '診所旁邊米絲蒂的密室桌上可閱讀占卜塔羅牌，預示著 V 未來的命運大阿爾克那。',
      '後巷拳擊機器人可進行出拳練習，並開啟後續《強棒出擊》格鬥任務線。'
    ],
    gridPos: { column: 1, row: 2 }
  },
  {
    id: 'act1_the_pickup',
    title: '拿貨',
    titleEn: 'The Pickup',
    category: 'act1',
    actLabel: '第 1 幕',
    summary: '前往漩渦幫老巢取回小平頭蜘蛛機器人。軍用科技特工梅瑞迪斯提出交易條件，局勢一觸即發。',
    spoilerSummary: '此為第一幕最重要的多重分支關卡！選擇是否拿梅瑞迪斯給的帶毒晶片、是否向羅伊斯通風報信、或者拔槍擊斃羅伊斯，將直接決定梅瑞迪斯能否上位掌權（關係到後續浪漫彩蛋武器「維納斯」），以及布里克能否獲救存活（關係到第二幕克里任務線漩渦幫首領）。',
    prerequisites: ['act1_the_ripperdoc'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Royce / Brick / Meredith Stout',
    choices: [
      {
        id: 'pickup_clean_chip',
        label: '破解晶片轉帳付款 / 擊斃羅伊斯',
        description: '自己破解軍用科技晶片病毒私吞資金，談判時拔槍射殺羅伊斯並救出前幫主布里克。',
        spoilerDetail: '觸發與漩渦幫的激烈火拼。梅瑞迪斯在軍用科技內部鬥爭中勝出上位；布里克獲救後將在第二幕第二衝突支線中感恩戴德放行 V。梅瑞迪斯會在後續發送簡訊邀請 V 前往汽車旅館渡過春宵並贈送不朽鈍器「假陽具·維納斯」。',
        consequences: ['軍用科技梅瑞迪斯·斯托特存活並掌權', '布里克獲救存活', '後續解鎖汽車旅館浪漫彩蛋「天公作美」與不朽武器維納斯', '解鎖羅伊斯頭目戰（若未在談判拔槍）'],
        rewards: ['不朽手槍：混亂 (羅伊斯掉落)', '不朽鈍器：維納斯 (後續旅館獲得)', '軍用科技 10,000 歐元資金 (若破解成功私吞)']
      },
      {
        id: 'pickup_give_infected_chip',
        label: '直接交付帶毒晶片給羅伊斯',
        description: '將梅瑞迪斯未破解的晶片直接給羅伊斯插卡，晶片釋放病毒毒殺漩渦幫。',
        spoilerDetail: '漩渦幫電腦中網毒引發混戰，梅瑞迪斯獲勝上位。但羅伊斯死於病毒，必須在廠內迎戰大量漩渦幫成員。',
        consequences: ['梅瑞迪斯掌權', '與漩渦幫全面敵對'],
        rewards: ['小平頭機器人']
      },
      {
        id: 'pickup_warn_royce',
        label: '向羅伊斯告密揭發軍用科技陰謀',
        description: '在談判中告知羅伊斯晶片有軍用科技後門病毒，與漩渦幫結盟抗擊軍用科技部隊。',
        spoilerDetail: '梅瑞迪斯·斯托特被軍用科技滅口沉屍海底（無法獲得不朽武器維納斯），其副手吉爾克里斯特上位。羅伊斯存活，但布里克被炸死。',
        consequences: ['梅瑞迪斯·斯托特死亡 (海底水泥水泥沉屍)', '羅伊斯存活', '軍用科技吉爾克里斯特上位', '永久錯過不朽武器維納斯'],
        rewards: ['小平頭機器人', '無梅瑞迪斯後續']
      }
    ],
    tips: '在離開工廠前務必進入雷射陷阱房間，用技術技能或電腦密碼解除引爆器救出被囚禁的布里克！',
    backgroundContext: '德克斯特買下了軍用科技失竊的「小平頭」戰鬥偵察機器人，但賣方漩渦幫突然發生政變，激進殘暴的「羅伊斯」軟禁了前任老大布里克並拒絕認帳。同時，軍用科技營運總監梅瑞迪斯·斯托特因丟失貨物面臨公司處決風險，急於找替死鬼。',
    tacticalObjectives: [
      '階段一【聯絡軍用科技】：前往惡土高速公路會面神經緊繃的梅瑞迪斯，選擇接受她的信用晶片（或拒絕直接進廠）。',
      '階段二【深入全食品肉品廠】：在生肉屠宰輸送帶與自動砲塔間行進，與持槍戒備的漩渦幫小弟交涉並搭乘電梯至談判室。',
      '階段三【談判桌對決】：羅伊斯突然用槍指著 V，此處面臨限時對話抉擇（拔槍射擊 / 支付晶片 / 掏自己的一萬歐元）。',
      '階段四【突圍與解救布里克】：在火拼中穿過實驗室，在密室中輸入門禁密碼（9691）並用終端機拆除地雷引信救出前幫主布里克。'
    ],
    explorationSecrets: [
      '在進入談判室前的儲藏室內，破解筆電可讀取內鬼通訊，證實吉爾克里斯特才是背叛軍用科技洩露車隊情報的真兇。',
      '在擊敗裝備外骨骼動力裝甲的羅伊斯後，其屍體必掉落不朽動能手槍「混亂」（Chaos，每次換彈隨機切換元素屬性）。'
    ],
    gridPos: { column: 2, row: 2 }
  },
  {
    id: 'act1_the_information',
    title: '情報',
    titleEn: 'The Information',
    category: 'act1',
    actLabel: '第 1 幕',
    summary: '造訪麗姿酒吧會見委託人伊芙琳·帕克，在超夢技師茱蒂協助下解析紺碧大廈頂層公寓的情資。',
    spoilerSummary: '首次接觸茱蒂·阿爾瓦雷茲，並學會超夢體驗（音頻、熱能、視頻視覺層）的解碼技巧。伊芙琳私下提議甩掉合事佬德克斯特與 V 五五分成，此對話僅影響心態對話，不影響後續主線。',
    prerequisites: ['act1_the_ripperdoc'],
    isBranchPoint: false,
    tips: '掃描超夢時切換到熱能層，在後方地板角落可掃描出隱藏荒坂防衛晶片冰櫃。',
    associatedNpc: 'Judy Alvarez / Evelyn Parker',
    backgroundContext: '高級風塵女伊芙琳·帕克透過巫毒幫委託得知了荒坂賴宣藏匿 Relic 晶片的情報，決定瞞著委託人自立門戶發大財。她找到夜之城最優秀的超夢剪輯師茱蒂，將自己親臨紺碧大廈臥室的超夢錄像交給 V 進行戰術掃描。',
    tacticalObjectives: [
      '階段一【麗姿酒吧接頭】：在霓虹閃爍的莫克斯幫老巢接受保鑣搜身，在地下室會見伊芙琳並聆聽大膽的奪寶提案。',
      '階段二【超夢調校教學】：戴上神經感應花環，在茱蒂引導下完成一場便利商店持槍搶劫超夢的三維層次分析。',
      '階段三【紺碧大廈虛擬勘查】：切換視覺掃描安保攝像頭、警衛動線，切換音頻層竊聽賴宣與三郎的通話，切換熱能層標記 Relic 隱藏溫控保險箱。'
    ],
    explorationSecrets: [
      '在伊芙琳私下提問「要不要甩掉德肖恩自己單幹」時，無論回答答應或拒絕都不會影響任務進行，但對強尼後續吐槽有微調。',
      '超夢音頻層中可聽到荒坂三郎即將搭乘「鯨魚」浮空母艦抵達夜之城的重大機密。'
    ],
    gridPos: { column: 2, row: 3 }
  },
  {
    id: 'act1_the_heist',
    title: '偷天換日',
    titleEn: 'The Heist',
    category: 'act1',
    actLabel: '第 1 幕',
    summary: '第一幕終局史詩任務！潛入紺碧大廈頂層盜取 Relic 晶片，目睹荒坂帝國弒父奪權驚天巨變。',
    spoilerSummary: '荒坂賴宣親手勒死父親荒坂三郎，將罪名嫁禍刺客。大廈進入最高警戒，T-Bug 遭黑客燒腦身亡，傑克重傷中彈。在德拉曼車內傑克嚥下最後一口氣，將 Relic 插入 V 的神經插槽。在野狼酒吧前選擇傑克遺體歸宿是重大分支！',
    prerequisites: ['act1_the_pickup', 'act1_the_information'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Jackie Welles / Yorinobu Arasaka / Saburo Arasaka',
    choices: [
      {
        id: 'heist_send_jackie_mom',
        label: '將傑克遺體送回家給他媽媽 (強烈推薦)',
        description: '指示德拉曼將傑克送往海伍德野狼酒吧交給威爾斯媽媽。',
        spoilerDetail: '第二幕將解鎖極具人情味的專屬悼念任務《英雄》(Heroes)，可參加傑克葬禮、參觀其改裝車庫，並獲得傑克的愛車「ARCH 機車」與兩把不朽手槍「金色狠角色」。',
        consequences: ['解鎖專屬感人支線《英雄》', '獲得載具：傑克的 ARCH 機車', '獲得不朽雙槍：金色狠角色 (祭台重返取走)'],
        rewards: ["Jackie's ARCH 摩托車", '金色狠角色手槍']
      },
      {
        id: 'heist_send_jackie_viktor',
        label: '將傑克遺體送去維克多診所',
        description: '指示德拉曼將傑克送給神機醫維克多保管。',
        spoilerDetail: '荒坂特工突襲診所強行搶走傑克遺體，提取其殘存神經數據製作成殘缺印記（神輿）。無法舉辦葬禮，且在惡魔結局中會在神輿中見到傑克的殘缺記憶幽魂。',
        consequences: ['無法解鎖悼念支線《英雄》', '傑克遺體被荒坂強奪', '惡魔結局觸發悲傷的神輿傑克對話'],
        rewards: ['僅能在後續由老維寄來摩托車鑰匙']
      },
      {
        id: 'heist_leave_jackie_cab',
        label: '讓德拉曼原地等待',
        description: '不作決定，讓德拉曼保持待命。',
        spoilerDetail: '德拉曼因規章限制無法長期保存遺體，最終同樣會被荒坂搜查部隊劫走，後果同送往老維處。',
        consequences: ['傑克遺體被荒坂強奪'],
        rewards: []
      }
    ],
    tips: '在三郎死後逃向露天陽台前，千萬別急著跳下！務必沿著樓梯走上停機坪，進入三郎的 AV 浮空車內撿取不朽武士刀「覺」（全遊戲最高暴擊傷害武器）與「三郎的狗牌」！',
    backgroundContext: '夜之城最頂級的荒坂七星級飯店「紺碧大廈」防衛森嚴。V 與傑克化裝成軍火商客戶帶領隱形蜘蛛機器人入住，目標是荒坂太子賴宣私人套房內的實驗型生物晶片 Relic 2.0。這是一場勝則名留青史、敗則死無葬身之地的驚天世紀豪賭。',
    tacticalObjectives: [
      '階段一【偽裝入住與釋放小平頭】：在行政套房操控平板引導小平頭穿過通風管道與恆溫機房，黑入大廈 Dweller 冰壁安全網。',
      '階段二【洗劫頂層套房】：潛入賴宣的奢華臥室，升起隱藏保險箱取出低溫冷卻箱 Relic；荒坂三郎突然乘坐浮空車空降抵達。',
      '階段三【弒父慘劇現場】：藏身於屏風玻璃柱後，屏息目睹賴宣在爭執中親手掐死父親荒坂三郎，隨即觸發全樓最高紅色警報。',
      '階段四【天台搜刮與高空突圍】：先折返天台搜刮三郎專機遺物，再帶著中彈失血的傑克突破荒坂特警封鎖線，滑降通風管道殺向地下車庫。'
    ],
    explorationSecrets: [
      '在賴宣臥室床頭櫃上可撿取不朽手槍「金剛」（Kongou，無需義體即可享受跳彈彈道加成）。',
      '三郎遺體上可搜刮到不朽短刀「涅槃」（Nirvana，配合覺可觸發流血暴擊組合技）。',
      '逃生時注意傑克的傷勢對話，這是全作最悲壯的分水嶺刻畫。'
    ],
    gridPos: { column: 3, row: 2 }
  },
  {
    id: 'act1_love_and_death',
    title: '爭分奪秒',
    titleEn: 'Playing for Time',
    category: 'act1',
    actLabel: '第 1 幕終章',
    summary: '德肖恩在汽車旅館背叛並開槍射殺 V。Relic 啟動奈米修復喚醒 V，強尼·銀手的意識正式寄生。',
    spoilerSummary: '荒坂保鑣竹村五郎處決了德肖恩，救出垃圾堆中的 V，並遭遇荒坂刺客追殺。V 在維克多診所甦醒，得知自己的神經正在被強尼·銀手覆寫，生命只剩幾週。從此展開三條尋找生機的主線。',
    prerequisites: ['act1_the_heist'],
    isBranchPoint: false,
    keyRewards: ['解鎖強尼·銀手寄生狀態', '開啟第二幕全地圖自由探索'],
    iconicGear: ['強尼·銀手的馬洛里安手槍回憶試玩'],
    tips: '在垃圾堆甦醒後操作車輛射擊追逐的荒坂荒坂摩托殺手，注意使用治癒噴霧。',
    associatedNpc: 'Johnny Silverhand / Goro Takemura / Dexter DeShawn',
    backgroundContext: '大禍臨頭的德肖恩為了自保洗清嫌疑，在無人旅館洗手間狠狠暗算了 V。V 被爆頭後丟棄在夜之城郊外的巨型垃圾填埋場。然而，被子彈損壞的 Relic 晶片自我啟動應急修復，將 2023 年炸毀荒坂塔的傳奇搖滾黑客「強尼·銀手」的人格構裝體直接注入了 V 的大腦。',
    tacticalObjectives: [
      '階段一【記憶回溯 2023】：穿越進入強尼·銀手的記憶回憶，手持威力無窮的馬洛里安 3516 殺入荒坂塔底層安放核彈，目睹亞當·碎骨的重創與幽冥犬審訊。',
      '階段二【垃圾場驚魂】：在腐爛垃圾堆中爬出，見證忠心耿耿的竹村五郎一槍擊斃背信棄義的德克斯特，隨後被塞上防彈越野車逃亡。',
      '階段三【高速公路生死追逐】：在腦震盪重傷狀態下探出身子，持槍擊落追殺而來的數組荒坂高階改裝暗殺忍者。',
      '階段四【老維診所宣判死刑】：在神機醫手術台醒來，接受只剩數週殘存壽命的殘酷真相，並在公寓與強尼第一次激爆肉搏交心。'
    ],
    explorationSecrets: [
      '日後返回這座垃圾場，可在德克斯特腐爛的屍體旁撿取他的不朽消音手槍「好計畫」（Plan B，消耗歐元作為彈藥開火）。',
      '垃圾場後方還能找到冷氣冷凍艙，引發隱藏任務《冷酷的幻影》。'
    ],
    gridPos: { column: 4, row: 2 }
  },

  // ==========================================
  // 第 2 幕：荒坂與竹村線 (ACT 2 ARASAKA)
  // ==========================================
  {
    id: 'act2_arasaka_down_on_street',
    title: '街頭尋線',
    titleEn: 'Down on the Street',
    category: 'act2_arasaka',
    actLabel: '第 2 幕：荒坂線',
    summary: '前往小唐人街運河旁會見流亡的竹村，並引薦給和歌子，打探荒坂祭典遊行維安情報。',
    spoilerSummary: '竹村希望聯絡荒坂華子揭發賴宣罪行，需要潛入荒坂祭典的高空浮空車。和歌子提供包含高空路徑的工業祭典建築藍圖。',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    tips: '與竹村吃夜市攤販對話時幽默吐槽其挑剔品味，可增進夥伴好感。',
    associatedNpc: 'Goro Takemura / Wakako Okada',
    backgroundContext: '三郎皇帝最貼身的心腹武士竹村五郎被賴宣污名化為叛徒，其義體被荒坂遠端癱瘓，淪為底層難民。他唯一的翻盤機會是在夜之城一年一度的「荒坂三郎紀念祭典」上，劫持皇女荒坂華子的專用遊行浮空車，當面向她陳情弒父真相。',
    tacticalObjectives: [
      '階段一【碼頭夜食密會】：在河邊小吃攤與頭戴兜帽的竹村碰面，討論突破荒坂情報防禦的戰略可能。',
      '階段二【拜會和歌子】：前往憲章山柏青哥彈珠房面見岡田和歌子，利用 V 過去的交情免費取得祭典安保巡防時程表。'
    ],
    explorationSecrets: [
      '和歌子會在此時補發第一幕前置委託的尾款，記得主動對話領取 3,380 歐元。'
    ],
    gridPos: { column: 5, row: 1 }
  },
  {
    id: 'act2_arasaka_gimme_danger',
    title: '危險遊戲',
    titleEn: 'Gimme Danger',
    category: 'act2_arasaka',
    actLabel: '第 2 幕：荒坂線',
    summary: '偵查荒坂祭典花車停放的重裝工業園區，在花車主機內植入後門病毒。',
    spoilerSummary: '可選擇多種潛入路線（翻牆、駕駛荒坂貨車、黑入監視器或從天花板通風口鑽入）。此任務考驗潛入能力，完成後為花車遊行做好萬全準備。',
    prerequisites: ['act2_arasaka_down_on_street'],
    isBranchPoint: false,
    tips: '可在偵查時讓竹村品嚐披薩；若在警衛室直接搶一輛荒坂貨車，可直接大搖大擺開入園區。',
    associatedNpc: 'Goro Takemura',
    backgroundContext: '荒坂工業園區配備了全自動機槍塔、巡邏獵犬機甲與大量荒坂特警。花車正在無塵機庫內進行祭典前最後除錯，V 必須神不知鬼不覺地將和歌子的流氓病毒軟體注入華子花車的中控電腦。',
    tacticalObjectives: [
      '階段一【工地天台戰術偵查】：與竹村在爛尾樓頂樓用望遠鏡標記各處管線、變壓器、警衛換班巡邏盲區與排風管道。',
      '階段二【滲透花車格納庫】：避開地面的戰鬥機械犬，利用高處管線躍入機庫，或使用技術屬性撬開側面液壓排氣閥門。',
      '階段三【軟體注入與撤出】：在巨型龍形花車電腦輸入病毒代碼，在巡邏隊警報前跳入排水涵洞安全撤回。'
    ],
    explorationSecrets: [
      '機庫二樓辦公室保險箱內有一把稀有突擊步槍與荒坂高層調任機密晶片。',
      '若全程不觸發任何警報，竹村會在後續通訊中高度讚揚 V 的專業職業操守。'
    ],
    gridPos: { column: 6, row: 1 }
  },
  {
    id: 'act2_arasaka_search_and_destroy',
    title: '搜尋並摧毀',
    titleEn: 'Search and Destroy',
    soundtrackLore: {
      songTitle: 'Search and Destroy',
      artist: 'The Stooges (Iggy Pop)',
      releaseYear: '1973',
      description: '龐克教父 Iggy Pop 經典狂暴名曲。歌詞「I am a world\'s forgotten boy, the one who searches and destroys」精準契合竹村與 V 身處荒坂追殺絕境的困獸之鬥。'
    },
    category: 'act2_arasaka',
    actLabel: '第 2 幕：荒坂線',
    summary: '突襲遊行綁架華子至安全屋。荒坂荒坂精銳突擊隊破牆突襲，引發竹村生死抉擇！',
    spoilerSummary: '【極其隱蔽的核心分支】：建築物塌陷後，任務目標僅顯示「逃離大樓」，強尼更會催促「竹村已經沒救了快跑！」。但如果無視提示，主動走左側暗道跳回破洞樓上殺光荒坂精銳救出竹村，竹村即可奇蹟存活！此決定直接決定結局能否達成「惡魔」成就。',
    prerequisites: ['act2_arasaka_gimme_danger'],
    isBranchPoint: true,
    branchType: 'life_or_death',
    associatedNpc: 'Goro Takemura / Hanako Arasaka',
    choices: [
      {
        id: 'search_save_takemura',
        label: '【隱藏選擇】逆行返回 3 樓救出竹村 (推薦)',
        description: '無視強尼催促與任務逃生標記，在紅燈走廊左側跳上破洞回三樓消滅荒坂特警。',
        spoilerDetail: '竹村五郎成功生還！他會在尾聲惡魔結局陪伴 V 前往荒坂空間站，並解鎖 Steam/PSN「惡魔獎盃成就」。',
        consequences: ['竹村五郎奇蹟存活', '解鎖「惡魔結局」專屬獎盃成就', '終局通訊電話中有竹村的獨家道別留言'],
        rewards: ['解鎖惡魔全成就資格']
      },
      {
        id: 'search_leave_takemura',
        label: '聽從強尼直接衝出一樓逃生',
        description: '直接跟隨 HUD 逃生路線穿過破牆逃至街頭。',
        spoilerDetail: '竹村在樓上被荒坂突擊部隊亂槍打死陣亡。惡魔結局改由荒坂高層赫爾曼陪同，且無法獲得成就。',
        consequences: ['竹村五郎永久陣亡', '無法獲得惡魔結局成就', '後續改由赫爾曼出席終局會議'],
        rewards: []
      }
    ],
    tips: '在跌落至二樓後，看見牆上十字架亮霓虹燈處，左轉穿過微弱藍光瓦礫，二段跳或攀爬回三樓即可找到竹村激戰的房間！',
    backgroundContext: '在祭典混亂中，V 成功癱瘓狙擊手並闖入華子花車將其挾持至歌舞伎區的廢棄集合公寓。正當華子開始懷疑兄長弒父動機時，荒坂外勤突擊隊定位了通訊信號，使用高爆穿甲彈直接貫穿了樓板展開滅口突襲。',
    tacticalObjectives: [
      '階段一【安全屋暗號確認】：敲門四次確認暗號，向華子坦白三郎死亡實情與 Relic 記憶。',
      '階段二【防禦破裂墜樓】：地面突然爆炸，V 被衝擊波炸穿地板跌落至滿是灰塵與鋼筋的一樓廢墟。',
      '階段三【抉擇抉擇：逆行救援】：無視系統只顯示逃離的標誌，持重型霰彈槍逆向殺回三樓走廊，支援被四名重裝士兵圍攻的竹村並一同殺出重圍。'
    ],
    explorationSecrets: [
      '如果不救竹村，他的死將成為永久遺憾，玩家將永遠無法在結局名單中收到他的真摯道謝。',
      '三樓激戰房間角落的武器箱裡有高階技術手槍與紫裝護甲。'
    ],
    gridPos: { column: 7, row: 1 }
  },

  // ==========================================
  // 第 2 幕：茱蒂與伊芙琳線 (ACT 2 JUDY)
  // ==========================================
  {
    id: 'act2_judy_automatic_love',
    title: '機械之愛',
    titleEn: 'Automatic Love',
    category: 'act2_judy',
    actLabel: '第 2 幕：茱蒂線',
    summary: '前往威斯特布魯克超級妓院「雲頂」，尋找紺碧大廈事件後失聯的伊芙琳·帕克。',
    spoilerSummary: '在包廂與玩偶諮詢後，揭開伊芙琳在雲頂遭虎爪幫虐待並被當作報廢玩偶賣掉的黑暗黑幕。隨後與木頭人交涉或暴力逼問。',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    tips: '若有足夠智力屬性或交涉技巧，可兵不血刃逼迫木頭人招出指頭通神機醫的下落。',
    associatedNpc: 'Judy Alvarez / Skye / Angel / Woodman',
    backgroundContext: '紺碧大廈出事後，伊芙琳重返雲頂尋求庇護，卻遭遇致命的系統故障。虎爪幫經營的高檔玩偶會所雲頂對失去商業價值的玩偶向來毫不留情。茱蒂極度擔憂伊芙琳的安危，請求 V 不惜一切代價追尋線索。',
    tacticalObjectives: [
      '階段一【雲頂前台接入】：存寄所有外置武器，進行神經心理測評，選擇天使（Angel）或斯凱（Skye）進入隱私調解包廂。',
      '階段二【突破 VIP 限制區】：在後台梳妝室尋找伊芙琳遺留的化妝包與被毀壞的晶片。',
      '階段三【辦公室對質木頭人】：進入經理辦公室對質殘暴的木頭人，選擇物理逼供或用言語威懾獲取下家名單。'
    ],
    explorationSecrets: [
      '木頭人辦公室後面的更衣櫃中可以取回自己的全套武器，無須空手戰鬥。',
      '在 VIP 區儲藏間桌上可撿取藍色門禁卡，能完全避開虎爪幫守衛巡邏。'
    ],
    gridPos: { column: 5, row: 2 }
  },
  {
    id: 'act2_judy_disasterpiece',
    title: '荒唐傑作',
    titleEn: 'Disasterpiece',
    category: 'act2_judy',
    actLabel: '第 2 幕：茱蒂線',
    summary: '循著非法死滅黑超夢的線索，深入清道夫廢棄發電廠地窟解救垂死的伊芙琳。',
    spoilerSummary: '在茱蒂陪同下攻破地獄般的人體解體屠宰場，在地下室電椅刑房救出失去意識、精神徹底崩潰的伊芙琳，送回茱蒂公寓照料。',
    prerequisites: ['act2_judy_automatic_love'],
    isBranchPoint: false,
    keyRewards: ['解鎖茱蒂深層信賴'],
    tips: '地下室有大量重裝清道夫，使用消音武器或電磁衝擊能保護伊芙琳免受流彈波及。',
    associatedNpc: 'Judy Alvarez / Evelyn Parker',
    backgroundContext: '指頭通將報廢的伊芙琳轉手賣給了夜之城最黑暗的毒瘤——專門錄製折磨致死超夢的清道夫工作室。茱蒂分析黑超夢中的背景噪音與工業披薩包裝，鎖定了位於憲章山郊外的廢棄發電廠。',
    tacticalObjectives: [
      '階段一【黑超夢訊號解碼】：在茱蒂的改裝貨車上分析發電廠專屬變壓器嗡鳴聲與炭疽氣味軌跡。',
      '階段二【強攻發電廠地表】：繞過外圍自動狙擊探照燈，從車間通風井下潛入地下三層。',
      '階段三【地牢血腥搜救】：在掛滿義體殘肢的走廊殺出血路，踢開錄製暗室大門，拔除伊芙琳頭上的折磨感應線纜。'
    ],
    explorationSecrets: [
      '地下工作室桌上有一把不朽鏈鋸劍「外科手術刀」前置圖紙。',
      '茱蒂在車上的情緒崩潰對話極其細膩，是展開後續浪漫羈絆的情感基石。'
    ],
    gridPos: { column: 6, row: 2 }
  },
  {
    id: 'act2_judy_pyramid_song',
    title: '金字塔之歌',
    titleEn: 'Pyramid Song',
    soundtrackLore: {
      songTitle: 'Pyramid Song',
      artist: 'Radiohead (電台司令)',
      releaseYear: '2001',
      description: 'Radiohead 劃時代的空靈名曲。歌詞描寫跳入湖底與黑夜，跨越過去一切憂傷與過往愛人相聚，是茱蒂水下小鎮潛水任務最極致的情感精神象徵。'
    },
    category: 'act2_judy',
    actLabel: '第 2 幕：茱蒂線',
    summary: '茱蒂情感系列終局！潛入被湖水淹沒的舊故鄉拉古納布蘭卡，共享神經同步潛水體驗。',
    spoilerSummary: '若 V 為女性聲音＋女性體型，在湖邊小屋可觸發夜之城最浪漫的戀愛確認場景！隔天早晨可正式確立情侶關係，並獲得茱蒂公寓鑰匙與霰彈槍「莫克斯」。若為男 V 則維持真摯摯友關係。',
    prerequisites: ['act2_judy_disasterpiece'],
    isBranchPoint: true,
    branchType: 'companion_romance',
    associatedNpc: 'Judy Alvarez',
    choices: [
      {
        id: 'judy_romance_female',
        label: '【女 V 限定】擁抱親吻茱蒂並確立情侶關係',
        description: '在浴室撫慰崩潰的茱蒂，早晨碼頭對話選擇「這是一段美好旅程的開始」。',
        spoilerDetail: '確立情侶關係！茱蒂將在公寓為 V 準備補給，星星結局時會跟隨 V 與阿德卡多一同離開夜之城！',
        consequences: ['正式確立戀愛關係', '解鎖茱蒂公寓所有權與儲物箱', '星星結局茱蒂相伴浪跡天涯'],
        rewards: ['不朽動能霰彈槍：莫克斯 (Mox)', '茱蒂公寓鑰匙']
      },
      {
        id: 'judy_friendship_male',
        label: '【男 V / 選擇友誼】作為生死摯友道別',
        description: '安撫茱蒂並作為值得托付後背的好兄弟。',
        spoilerDetail: '茱蒂平靜地收拾行李並贈送莫克斯霰彈槍，日後會寄送明信片保持通訊。',
        consequences: ['維持純潔戰友情誼', '茱蒂未來離開夜之城追尋新生'],
        rewards: ['不朽動能霰彈槍：莫克斯 (Mox)']
      }
    ],
    tips: '水下潛水時多掃描加油站、小學禮堂與茱蒂童年舊居的壁畫，能解鎖大量感人對話細節。',
    backgroundContext: '在經歷了雲頂爭奪戰的慘痛挫折與好友伊芙琳自盡的悲痛後，茱蒂心灰意冷，決定在離開夜之城前帶 V 去看她童年被大水淹沒的村落。她研發了雙人神經同步潛水套件，讓兩人能即時感受到彼此的脈搏、心跳與記憶回音。',
    tacticalObjectives: [
      '階段一【暮色碼頭整備】：換上特製潛水服，校準深度計與心靈感應音頻接收器。',
      '階段二【水下幽靈之城探索】：在水草與廢墟中穿行，觸摸廢棄加油站招牌、老舊點唱機與茱蒂幼年刻在牆上的文字。',
      '階段三【小屋夜話】：夜間發電機故障，在壁爐火光與暴雨聲中與茱蒂共度難忘的一夜。'
    ],
    explorationSecrets: [
      '在潛水終點的小學廢墟底層，可掃描到茱蒂童年藏在磚縫裡的鐵皮玩具盒。',
      '確立關係後，茱蒂會在公寓餐桌上經常留下自製美食與溫馨便條紙。'
    ],
    gridPos: { column: 7, row: 2 }
  },

  // ==========================================
  // 第 2 幕：帕娜與惡土流浪者線 (ACT 2 PANAM)
  // ==========================================
  {
    id: 'act2_panam_ghost_town',
    title: '鬼影幢幢',
    titleEn: 'Ghost Town',
    soundtrackLore: {
      songTitle: 'Ghost Town',
      artist: 'The Specials',
      releaseYear: '1981',
      description: '英國傳奇 Ska/龐克樂團 The Specials 經典，描繪城鎮蕭條空寂與失落，正契合帕娜在廢棄石脊鎮伏擊亂刀會的孤寂氛圍。'
    },
    category: 'act2_panam',
    actLabel: '第 2 幕：帕娜線',
    summary: '經羅格介紹前往惡土會見流浪者刺頭帕娜·帕爾默，聯手奪回被亂刀會劫走的卡車與貨物。',
    spoilerSummary: '幫助帕娜在石脊鎮伏擊亂刀會，並攻入礦道老巢擊斃叛徒納許。此役奠定帕娜對 V 的絕對信賴，並引出劫持康陶浮空車的大膽計畫。',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['解鎖隱藏極速超跑「黑石中劍」(完成任務 48 小時後隧道內刷新)'],
    iconicGear: ['不朽動能狙擊步槍：寡婦製造者 (Widow Maker - 納許掉落)'],
    tips: '在石脊鎮修復電閘時，記得幫帕娜接通交叉火力陷阱，能輕鬆秒殺亂刀會前哨。',
    associatedNpc: 'Panam Palmer / Rogue Amendiares / Nash',
    backgroundContext: '為了找出綁架赫爾曼（Relic 首席工程師）的方法，V 花費 15,000 歐元向來生女王羅格購買情報。羅格引薦了剛與阿德卡多家族決裂、正處於人生低谷的年輕流浪者帕娜。兩人的命運自此緊密纏繞。',
    tacticalObjectives: [
      '階段一【荒原初遇】：在惡土公路旁見到正拿著扳手猛踹老爺車的帕娜，約定互相幫忙解決難題。',
      '階段二【石脊鎮斷電伏擊】：潛入無人鬼鎮重啟變電箱，在十字路口引爆聚光燈發動夜間致命奇襲。',
      '階段三【深礦洞除惡】：深入未完工的採礦隧道全殲納許一幫匪徒，為帕娜雪恥奪回愛車。'
    ],
    explorationSecrets: [
      '納許掉落的「寡婦製造者」是全遊戲手感最頂尖的高速充能穿牆精密步槍！',
      '此採礦隧道即為日後隱藏載具「蝙蝠俠黑石中劍」的誕生地，務必記住座標！'
    ],
    gridPos: { column: 5, row: 3 }
  },
  {
    id: 'act2_panam_life_during_wartime',
    title: '戰時歲月',
    titleEn: 'Life During Wartime',
    soundtrackLore: {
      songTitle: 'Life During Wartime',
      artist: 'Talking Heads',
      releaseYear: '1979',
      description: '搖滾名人堂樂團 Talking Heads 經典。「This ain\'t no party, this ain\'t no disco, this ain\'t no fooling around」象徵惡土擊落浮空車後的殘酷軍事交火。'
    },
    category: 'act2_panam',
    actLabel: '第 2 幕：帕娜線',
    summary: '利用電磁脈衝 EMP 擊落康陶重裝武裝浮空車，深入墜機現場活捉安德斯·赫爾曼。',
    spoilerSummary: 'EMP 導致浮空車墜毀，阿德卡多長老蠍子不幸犧牲，米契被俘。V 隻身突破康陶特種部隊防線，在加油站二樓抓獲赫爾曼，並獲得其手中的 Relic 核心診斷權限。',
    prerequisites: ['act2_panam_ghost_town'],
    isBranchPoint: false,
    keyRewards: ['解鎖赫爾曼審訊', '獲得蠍子的幸運符咒'],
    tips: '在無人機掃描時善用帕娜狙擊步槍的掩護，優先打掉康陶的戰術追蹤飛彈發射架。',
    associatedNpc: 'Panam Palmer / Anders Hellman / Mitch',
    backgroundContext: '康陶為了保護叛逃的赫爾曼，出動了最高規格的重裝浮空防禦編隊。帕娜構想出利用惡土老舊發電廠的巨型 EMP 脈衝引爆空中電網，將整艘浮空戰艦硬生生擊墜在沙丘之中。',
    tacticalObjectives: [
      '階段一【發電廠過載超頻】：操作控制室電壓表在倒數計時中過載輸電線路，觸發震撼惡土天際線的電磁風暴。',
      '階段二【馳援墜機點】：駕駛越野車狂飆趕往濃煙滾滾的墜落地點，擊毀自動戰鬥機器人並救出奄奄一息的米契。',
      '階段三【加油站特攻與活捉】：潛入被康陶精兵嚴密防守的汽車旅館，在閣樓破門生擒瑟瑟發抖的赫爾曼。'
    ],
    explorationSecrets: [
      '審訊赫爾曼時若保持冷靜犀利，他會透露 Relic 晶片不可逆覆寫的神經學原理。',
      '在米契身旁可獲得蠍子的紀念遺物，可放置在 V 的公寓桌面作為裝飾。'
    ],
    gridPos: { column: 6, row: 3 }
  },
  {
    id: 'act2_panam_queen_of_highway',
    title: '公路女王',
    titleEn: 'Queen of the Highway',
    soundtrackLore: {
      songTitle: 'Queen of the Highway',
      artist: 'The Doors',
      releaseYear: '1970',
      description: '傳奇迷幻搖滾樂團 The Doors 經典名作。吉姆·莫里森唱出「She was a princess, queen of the highway」完美投射帕娜這位惡土荒原女王的驕傲與熱忱。'
    },
    category: 'act2_panam',
    actLabel: '第 2 幕：帕娜線',
    summary: '帕娜情感系列終局！駕駛改裝軍用科技「魔蜥」浮空裝甲坦克，迎戰亂刀會大軍圍攻。',
    spoilerSummary: '若 V 為男性體型，在魔蜥神經同步連接時可觸發激情浪漫場面！隨後擊潰亂刀會襲擊，索爾正式冊封 V 為阿德卡多家族榮譽成員。此任務直接決定是否解鎖「星星結局」（阿德卡多線）！',
    prerequisites: ['act2_panam_life_during_wartime'],
    isBranchPoint: true,
    branchType: 'companion_romance',
    associatedNpc: 'Panam Palmer / Saul Bright',
    choices: [
      {
        id: 'panam_romance_male',
        label: '【男 V 限定】神經同步時觸碰帕娜確立情侶關係',
        description: '在魔蜥坦克介面選擇「讓神經連接更深入」，擊敗敵人後在篝火前確認愛意。',
        spoilerDetail: '確立正式戀人關係！帕娜成為忠誠至極的伴侶，星星結局兩人將攜手跨越惡土邊境奔向自由！',
        consequences: ['解鎖終局最溫馨美滿的「星星結局」資格', '確立浪漫伴侶關係', '成為阿德卡多家族受人敬仰的一員'],
        rewards: ['解鎖星星結局 (The Star)', '阿德卡多流浪者防彈夾克']
      },
      {
        id: 'panam_friendship_female',
        label: '【女 V / 選擇友誼】以家族至親摯友並肩作戰',
        description: '保持純真革命情感，共同保衛營地。',
        spoilerDetail: '同樣會被接納為家族血親，女 V 依然可在最後大結局召喚阿德卡多家族出戰進攻荒坂塔！',
        consequences: ['解鎖星星結局召喚資格', '成為阿德卡多家族至親'],
        rewards: ['解鎖星星結局 (The Star)', '阿德卡多流浪者防彈夾克']
      }
    ],
    tips: '魔蜥坦克的重型多管火箭砲與粒子主砲威力毀天滅地，瞄準敵方載具可一砲群體秒殺！',
    backgroundContext: '在偷偷從軍用科技列車上截獲重裝浮空裝甲車「魔蜥」後，帕娜與部族技工日夜組裝，終於讓這頭鋼鐵巨獸重獲新生。為了測試雙人神經分流同步系統，帕娜邀請 V 進入座艙，將兩人的意識深度交融。',
    tacticalObjectives: [
      '階段一【魔蜥同步駕駛練習】：操控懸浮推進器漂移過彎，摧毀遠處廢棄靶標並體驗神經相連的感官共鳴。',
      '階段二【保衛營地血戰】：亂刀會主力部隊瘋狂突襲營地，帕娜與 V 駕駛魔蜥正面迎擊，轟碎敵方數十輛改裝越野卡車。',
      '階段三【家族歃血儀式】：在全族歡呼聲中喝下烈酒，由索爾親手為 V 披上代表家族榮譽的阿德卡多專屬徽章皮夾克。'
    ],
    explorationSecrets: [
      '若此前在《以儆效尤》中向索爾背叛出賣帕娜，此任務將被永久抹除，永遠失去阿德卡多結局！',
      '營地後方的帳篷內有大量流浪者改裝槍械與零件可隨意收集。'
    ],
    gridPos: { column: 7, row: 3 }
  },

  // ==========================================
  // 第 2 幕：巫毒幫與奧特線 (ACT 2 VOODOO BOYS)
  // ==========================================
  {
    id: 'act2_voodoo_i_walk_the_line',
    title: '鋌而走險',
    titleEn: 'I Walk the Line',
    soundtrackLore: {
      songTitle: 'I Walk the Line',
      artist: 'Johnny Cash',
      releaseYear: '1956',
      description: '鄉村鄉村搖滾傳奇 Johnny Cash 經典名曲。在巫毒幫與網路看守兩大冷酷勢力間周旋，走在道德與背叛的鋼索之上。'
    },
    category: 'act2_voodoo',
    actLabel: '第 2 幕：巫毒幫線',
    summary: '深入太平洲帝國商場剷除動物幫，面對背後的網路看守（NetWatch）特工。重大立場抉擇！',
    spoilerSummary: '網路看守特工莫斯利指出巫毒幫利用完 V 就會立刻燒腦滅口。選擇是否相信特工並拔除巫毒幫木馬病毒，將直接影響後續巫毒幫高層的生死命運！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Placide / Brigitte / NetWatch Agent Mosley',
    choices: [
      {
        id: 'voodoo_trust_netwatch',
        label: '與網路看守特工合作 (清除巫毒幫病毒)',
        description: '聽取特工警告，讓他清除普拉西德種在 V 腦內的燒腦炸彈，放走特工。',
        spoilerDetail: '網路看守特工所言屬實！在後續穿過黑牆時，巫毒幫企圖燒死 V 但被看守反制。離開冰櫃後布麗姬與普拉西德全員暴斃或成為敵對目標，大快人心除掉叛徒。',
        consequences: ['免疫巫毒幫背叛燒腦', '消滅背信棄義的巫毒幫核心高層', '獲得普拉西德不朽風衣大衣'],
        rewards: ['普拉西德的傳奇防彈風衣']
      },
      {
        id: 'voodoo_kill_netwatch',
        label: '消滅網路看守特工 (效忠巫毒幫協議)',
        description: '痛扁特工並奪取資料完成普拉西德的委託。',
        spoilerDetail: '穿過黑牆時巫毒幫果然啟動病毒試圖燒死 V（被強尼意識阻擋救下一命）。醒來後可選擇原諒或大開殺戒屠滅巫毒幫。',
        consequences: ['被巫毒幫背叛暗算', '可自由決定是否血洗太平洲教堂'],
        rewards: []
      }
    ],
    tips: '商城深處的動物幫女頭目「瑪蒂爾達·K·羅斯」擁有超強近戰護盾，用電磁手榴彈能迅速破除其背後弱點蓄電池。',
    backgroundContext: '太平洲是夜之城被遺忘的爛尾法外之地，巫毒幫牢牢控制著此地的深層地下網絡。他們為了打通黑牆聯繫傳奇女黑客「奧特·坎寧安」，企圖利用 V 腦中強尼的 Relic 作為誘餌，但首先需要 V 去拔掉在商場盤踞的網路看守特工。',
    tacticalObjectives: [
      '階段一【潛入廢棄購物中心】：避開大廳中舉重健身的凶悍動物幫打手，利用二樓走廊監控攝影機標記敵蹤。',
      '階段二【大戰動物幫首領】：在電影院前擊敗體型巨大、揮舞重錘的瑪蒂爾達。',
      '階段三【放映廳終極交涉】：走進泛著雪花螢幕的放映室，直面被黑客纜線纏繞的網路看守特工，面臨信任大博弈。'
    ],
    explorationSecrets: [
      '放映廳隔壁的配電房內藏有一箱高額歐元與高階突擊步槍。',
      '擊敗普拉西德後別忘記從他身上搜刮那件全夜之城辨識度最高的傳奇長風衣。'
    ],
    gridPos: { column: 5, row: 4 }
  },
  {
    id: 'act2_voodoo_transmission',
    title: '訊號傳輸',
    titleEn: 'Transmission & Never Fade Away',
    soundtrackLore: {
      songTitle: 'Transmission',
      artist: 'Joy Division',
      releaseYear: '1979',
      description: '後龐克後龐克先驅 Joy Division 壓抑名曲。主唱伊恩·柯蒂斯唱道「Dance, dance, dance to the radio」，完美呼應 V 浸入冰浴接入賽博空間時神經被黑牆代碼撕裂的戰慄感。'
    },
    category: 'act2_voodoo',
    actLabel: '第 2 幕：巫毒幫線',
    summary: '坐入冰水浴缸接入深層賽博空間，穿透黑牆與超越人類認知的 AI 奧特·坎寧安達成天界契約。',
    spoilerSummary: '回溯強尼 2013 年突襲荒坂救奧特的記憶。黑牆深處的奧特同意協助攻破荒坂神輿，但代價是將神輿內所有靈魂（包括強尼）吸收同化。此任務正式解鎖所有結局的關鍵前置條件！',
    prerequisites: ['act2_voodoo_i_walk_the_line'],
    isBranchPoint: false,
    keyRewards: ['解鎖全結局關鍵技術夥伴：AI 奧特·坎寧安'],
    tips: '在 2013 年強尼記憶中，馬洛里安手槍的特殊近戰噴火攻擊能造成大範圍擊退。',
    associatedNpc: 'Alt Cunningham / Johnny Silverhand / Brigitte',
    backgroundContext: '黑牆是隔離狂暴失控的舊網惡意 AI 的最後防火牆。唯有強尼·銀手的神經烙印，才能喚起身為舊網最強幽靈 AI 的奧特·坎寧安的遠古回憶。V 將肉體浸入零下低溫冰櫃，意識跨越凡人無法涉足的數據絕壁。',
    tacticalObjectives: [
      '階段一【浸入低溫冰浴】：在布麗姬與巫毒長老環繞下停止生物呼吸，神經代碼全速上傳。',
      '階段二【重返 2013 亞特蘭提斯俱樂部】：以強尼視角經歷戀人奧特被荒坂綁架的血色夜晚，帶領武侍樂隊突襲荒坂實驗室。',
      '階段三【黑牆天塹會晤】：在通天徹地的紅色數據火海前，說服已失去人類情感的 AI 奧特聯手撕開荒坂神輿。'
    ],
    explorationSecrets: [
      '從黑牆返回現實時，若先前協助特工，巫毒幫高層會全部被反向燒死，玩家可優雅走過滿地焦屍撿取神經義體。'
    ],
    gridPos: { column: 6, row: 4 }
  },

  // ==========================================
  // 強尼·銀手與夥伴重要支線 (JOHNNY & COMPANIONS)
  // ==========================================
  {
    id: 'side_chippin_in',
    title: '插入晶片',
    titleEn: "Chippin' In",
    soundtrackLore: {
      songTitle: "Chippin' In",
      artist: 'SAMURAI (Refused)',
      releaseYear: '2020',
      description: '強尼·銀手與武侍樂隊最著名的反叛戰歌！象徵植入神經插槽、義體改造與向大企業抗爭到底的靈魂嘶吼。'
    },
    category: 'major_side',
    actLabel: '重要支線',
    summary: '將身體主導權暫時借給強尼，與羅格一同調查重生的亞當·碎骨，並在油田墓地進行靈魂對話。',
    spoilerSummary: '【全遊戲最重要的隱藏對話節點！】在油田強尼無名墓地前，必須精準選擇正確的三句台詞（「救了我性命的人」、「你把一切都搞砸了」、「你想要什麼？」），才能將強尼好感度鎖定為解鎖【單挑荒坂塔隱藏結局《別怕死神》】的必要條件！同時獲贈強尼愛槍、風衣夾克與保時捷 911！',
    prerequisites: ['act2_voodoo_transmission'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Johnny Silverhand / Rogue / Grayson',
    choices: [
      {
        id: 'chippin_in_secret_ending',
        label: '【必須選對墓地對話】解鎖單挑荒坂塔《別怕死神》',
        description: '在油田墓地依序回答：「你已經搞砸了」、「你想要什麼？」、「這是我最後一次給你機會」。',
        spoilerDetail: '強尼靈魂深處徹底反省並視 V 為唯一知己！唯有觸發這組特定對話，在天台沉思時等待 5 分鐘才能觸發孤身單挑荒坂塔的傳奇隱藏結局！',
        consequences: ['解鎖全遊戲最硬派隱藏結局《別怕死神》(Don\'t Fear The Reaper)', '獲得強尼的忠誠'],
        rewards: ['解鎖單挑荒坂塔結局資格', '保時捷 911 (930) 鑰匙', '不朽馬洛里安 3516 手槍', '武侍樂隊複刻風衣夾克']
      },
      {
        id: 'chippin_in_wrong_dialogue',
        label: '選擇一般安慰或冷漠對話',
        description: '在墓地選擇過於附和或徹底決裂的選項。',
        spoilerDetail: '即使好感度顯示 70%，若未選對上述對話，依然無法在天台觸發隱藏結局《別怕死神》！',
        consequences: ['無法解鎖單挑荒坂塔隱藏結局'],
        rewards: ['仍可獲得手槍與夾克']
      }
    ],
    tips: '逼問葛雷森時不要殺他，他會交出貨櫃密碼鑰匙，降下吊車貨櫃即可開走強尼的原版保時捷 911 跑車！',
    backgroundContext: '強尼感受到自己的死期與 V 的命運日益交融，他渴望最後一次以血肉之軀向當年殺死自己的亞當·碎骨復仇，並見一見一生摯友羅格。在碼頭貨船埃布尼克號上，兩人揭開了碎骨的秘密據點。',
    tacticalObjectives: [
      '階段一【狂飲斷片狂歡之夜】：喝下龍舌蘭將身體託付強尼，在夜之城酒吧紋身、鬥毆、狂歡。',
      '階段二【夜襲埃布尼克號】：與全副武裝的羅格潛入碼頭甲板，擊潰武裝保安生擒葛雷森。',
      '階段三【油田靈魂救贖拷問】：驅車前往惡土北區無垠的廢油田，在滿地荒蕪廢鐵中尋找強尼被拋屍的無名亂葬崗。'
    ],
    explorationSecrets: [
      '在貨櫃打開帆布的一瞬間，這輛 1977 年保時捷 911 Turbo II 會永久加入車庫。',
      '葛雷森身上攜帶著強尼的專屬配槍「馬洛里安武器公司 3516」，具備炫酷的單手旋轉換彈動作與近身火焰衝擊。'
    ],
    gridPos: { column: 7, row: 4 }
  },
  {
    id: 'side_blistering_love',
    title: '熾熱的愛',
    titleEn: 'Blistering Love',
    category: 'major_side',
    actLabel: '重要支線',
    summary: '強尼借用 V 的身體邀請羅格前往銀色像素露天汽車電影院約會，重溫五十年舊夢。',
    spoilerSummary: '在破舊的放映室重啟投影機，與羅格在保時捷車頂共賞老電影。此任務是解鎖【太陽結局 (與羅格進攻荒坂塔)】的必要絕對前置！',
    prerequisites: ['side_chippin_in'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Johnny Silverhand / Rogue',
    choices: [
      {
        id: 'blistering_complete',
        label: '完成約會並向羅格致意',
        description: '成功播放電影並陪伴羅格度過懷舊夜晚。',
        spoilerDetail: '羅格徹底釋懷舊日情仇並決定為強尼與 V 豁出一切，解鎖在天台向羅格求助的「太陽結局」路線！',
        consequences: ['解鎖太陽結局 (The Sun) 資格', '獲得來生女王羅格的終局鼎力相助'],
        rewards: ['解鎖太陽結局資格']
      }
    ],
    tips: '放映室密碼在辦公室電腦日誌中，或直接使用黑客技能破解旁邊的電子門禁面板。',
    backgroundContext: '半個世紀前，羅格與強尼曾是並肩作戰的戀人與同志；半個世紀後，羅格已是滿頭銀髮的來生掌舵人，而強尼依然是那個桀驁不馴的靈魂幻影。這場約會是強尼向羅格遲到了五十年的道歉與告別。',
    tacticalObjectives: [
      '階段一【前往來生接羅格】：換上正式服裝，駕駛保時捷 911 來到來生後巷迎接盛裝的羅格。',
      '階段二【破解露天電影院】：翻牆進入廢棄的銀色像素影院，在控制室重啟太陽能供電並輸入密碼啟動投影機。',
      '階段三【星空下的告別】：坐在保時捷引擎蓋上吃爆米花，傾聽羅格對五十年苟活妥協的痛苦自白。'
    ],
    explorationSecrets: [
      '此任務完成後，強尼與羅格的情感線圓滿收尾，天台電話時羅格將毫不猶豫答應陪 V 殺向荒坂塔。'
    ],
    gridPos: { column: 8, row: 4 }
  },

  // ==========================================
  // 自由幻局 DLC 主線 (PHANTOM LIBERTY)
  // ==========================================
  {
    id: 'pl_dog_eat_dog',
    title: '弱肉強食',
    titleEn: 'Dog Eat Dog',
    soundtrackLore: {
      songTitle: 'Dog Eat Dog',
      artist: 'AC/DC',
      releaseYear: '1977',
      description: '傳奇硬搖滾樂團 AC/DC 代表作。在弱肉強食的狗鎮法外之地，叢林法則主宰一切。'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局：序章',
    summary: '神祕黑客「頌鳥」直接黑入 Relic，開出治癒絕症的承諾，引導 V 潛入法外孤島「狗鎮」。',
    spoilerSummary: '頌鳥遠端重構了 Relic 介面，解鎖全新的【Relic 戰鬥特警技能樹】。新美國總統邁爾斯的專機「空軍一號」在狗鎮上空遭到地對空飛彈擊中，緊急迫降！',
    prerequisites: ['act2_voodoo_transmission'],
    isBranchPoint: false,
    keyRewards: ['解鎖 Relic 專屬技能樹 (光學迷彩衝刺/弱點解析/手臂終極強化)'],
    tips: '在狗鎮走私檢查站不要硬闖，跟隨頌鳥標記從體育場腳手架與垃圾輸送通道穿入。',
    associatedNpc: 'Songbird (頌鳥) / Rosalind Myers',
    backgroundContext: '在完成太平洲巫毒幫線後，V 腦中突然響起一個未曾聽聞的女性嗓音。自稱新美國聯邦情報局特工的「頌鳥」展現了遠超夜之城所有黑客的黑牆技術，直接壓制了 Relic 故障並開出唯一能拯救 V 性命的條件：在狗鎮拯救迫降的新美國總統。',
    tacticalObjectives: [
      '階段一【體育場黑市潛入】：在狗鎮檢查站外圍攀爬起重機，穿過鏽蝕骨架避開幽冥犬巡邏士兵。',
      '階段二【天台遠眺空軍一號】：登上狗鎮半塌體育場頂端，目睹新美國總統專機在空中被防空飛彈撕裂解體墜落。',
      '階段三【解鎖 Relic 潛能】：在頌鳥引導下接入聯邦軍事核心代碼，啟動突破性戰鬥天賦樹。'
    ],
    explorationSecrets: [
      '體育場市集二樓可找到狗鎮專屬的黑市商標，此處出售本體中錯過的各種不朽武器！'
    ],
    gridPos: { column: 6, row: 5 }
  },
  {
    id: 'pl_hole_in_the_sky',
    title: '蒼穹墜落',
    titleEn: 'Hole in the Sky & Spider and the Fly',
    soundtrackLore: {
      songTitle: 'Hole in the Sky',
      artist: 'Black Sabbath (黑色安息日)',
      releaseYear: '1975',
      description: '重金屬先驅黑色安息日名曲。象徵新美國空軍一號專機遭地對空飛彈撕裂擊落從天際墜落的末日震撼。'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局',
    summary: '殺入空軍一號墜機殘骸，護送悍勇的邁爾斯總統突破幽冥犬重裝部隊與奇美拉機甲圍剿。',
    spoilerSummary: '經歷史詩級的巨型戰爭機器【奇美拉】Boss 戰！在體育場廢墟中摧毀奇美拉弱點，並獲得其核心。隨後護送邁爾斯至長夏汽車旅館安全屋。',
    prerequisites: ['pl_dog_eat_dog'],
    isBranchPoint: false,
    keyRewards: ['奇美拉核心 (可改裝為全遊戲最強不朽插件/外掛)'],
    tips: '奇美拉二階段會施放全屏致命毒氣與無人機護盾，必須踩上高台掃描破壞其散熱氣閥。',
    associatedNpc: 'Rosalind Myers / Songbird / Solomon Reed',
    backgroundContext: '狗鎮統治者庫爾特·漢森上校指揮叛軍動用了軌道防空砲，誓要將邁爾斯生擒或斬首。然而邁爾斯本人曾是陸戰隊頂級老兵，手持步槍與 V 並肩作戰，展現出毫不遜色於頂級傭兵的鐵血手腕。',
    tacticalObjectives: [
      '階段一【突入殘骸核心】：在墜毀機身內部消滅三波幽冥軍突擊隊，踹開駕駛艙安全門救出邁爾斯。',
      '階段二【地鐵隧道狂奔】：在頌鳥失去聯絡的絕境下，駕駛工程升降機躲避追兵，進入地下廢棄展廳。',
      '階段三【大戰奇美拉軌道坦克】：迎戰被流氓 AI 劫持的八足巨型攻城機甲奇美拉，精準點射其履帶節點與冷卻水箱。'
    ],
    explorationSecrets: [
      '奇美拉戰鬥結束後務必拾取地上的金色「奇美拉核心」，日後可鍛造出四種神器級槍械改造插件之一。'
    ],
    gridPos: { column: 7, row: 5 }
  },
  {
    id: 'pl_lucretia_my_reflection',
    title: '鏡中倒影',
    titleEn: 'Lucretia My Reflection',
    soundtrackLore: {
      songTitle: 'Lucretia My Reflection',
      artist: 'The Sisters of Mercy',
      releaseYear: '1987',
      description: '哥德搖滾名曲。正如歌詞中對腐朽帝國與忠誠的詠嘆，喚醒沉睡七年的所羅門·李德重返諜戰舞台。'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局',
    summary: '在安全屋守護總統，並前往狗鎮籃球場喚醒沉睡七年的傳奇特工所羅門·李德（伊卓瑞斯·艾巴飾）。',
    spoilerSummary: '李德重出江湖！面對闖入安全屋的兩名流浪小賊，面臨是否滅口的道德分支。隨後在邁爾斯主持下，V 可正式宣誓效忠新美國成為正式聯邦特工。',
    prerequisites: ['pl_hole_in_the_sky'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Solomon Reed / Rosalind Myers',
    choices: [
      {
        id: 'pl_oath_take',
        label: '舉起右手向新美國憲法宣誓 (成為特工)',
        description: '宣誓效忠新美國聯邦，獲得特工金幣勳章。',
        spoilerDetail: '邁爾斯極為欣慰並承諾國家級的神經醫療團隊必將治好 V。強尼會在腦中對 V 的宣誓嗤之以鼻並進行經典嘲諷。',
        consequences: ['正式取得新美國特工身分', '解鎖邁爾斯的最高信任'],
        rewards: ['新美國特工硬幣']
      },
      {
        id: 'pl_oath_refuse',
        label: '拒絕宣誓 (僅作為雇傭兵合同維持買賣)',
        description: '表明自己只是為了解藥拿錢辦事的傭兵，不奉迎體制。',
        spoilerDetail: '邁爾斯雖然有些失望但依然尊重專業協議，強尼會對 V 的清醒傲骨鼓掌叫好。不影響後續主線推進。',
        consequences: ['保持純粹街頭傭兵身分', '獲得強尼的敬意'],
        rewards: []
      }
    ],
    tips: '在籃球場與李德碰面時切勿隨意掏槍，依約定坐在長椅上對暗號即可。',
    backgroundContext: '七年前，所羅門·李德在統一戰爭中被邁爾斯無情背叛與遺棄，但他骨子裡的特工忠誠與榮譽感卻從未熄滅。他在狗鎮隱姓埋名當保鑣，直到那串沉寂七年的專屬特工加密蜂鳴器再次響起。',
    tacticalObjectives: [
      '階段一【地下安全屋整頓】：與邁爾斯喝啤酒長談，修復保險絲並排除入侵的兩名無辜拾荒者。',
      '階段二【破舊籃球場接頭】：前往殘破的室外鐵絲網球場，在長凳上等待高大的李德悄無聲息出現在身後。',
      '階段三【護送李德會師】：消滅跟蹤的幽冥犬巡邏隊，帶領李德穿越廢棄排污渠返回長夏汽車旅館與邁爾斯相認。'
    ],
    explorationSecrets: [
      '如果放過那兩名無辜誤入安全屋的拾荒小賊，日後在狗鎮會收到他們發來的感謝信與額外補給。'
    ],
    gridPos: { column: 8, row: 5 }
  },
  {
    id: 'pl_firestarter',
    title: '引火焚身',
    titleEn: 'Firestarter',
    soundtrackLore: {
      songTitle: 'Firestarter',
      artist: 'The Prodigy',
      releaseYear: '1996',
      description: '電音龐克神團 The Prodigy 傳奇單曲「I\'m the firestarter, twisted firestarter!」引爆全 DLC 最核心的背叛與混亂火種！'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局：天王山之戰',
    summary: '偽裝成法國雙胞胎黑客潛入漢森核心實驗室提取神經矩陣。此為自由幻局全劇情最核心分水嶺！',
    spoilerSummary: '【決定 DLC 走向與兩大路線的命運抉擇】：在實驗室終端前，選擇【背叛李德幫助頌鳥逃亡】（頌鳥線），還是選擇【聽從李德上傳冰壁冰凍頌鳥】（李德線）！此選擇將徹底決定漢森、亞歷克斯、李德與頌鳥的生死命運，並分流至完全不同的終章任務！',
    prerequisites: ['pl_lucretia_my_reflection'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Songbird / Solomon Reed / Kurt Hansen / Alex',
    choices: [
      {
        id: 'firestarter_help_songbird',
        label: '【頌鳥線】背叛李德，幫助頌鳥脫逃 (逃亡路線)',
        description: '啟動防衛協議為頌鳥爭取時間，反對李德的抓捕計畫。',
        spoilerDetail: '頌鳥暴走駭入體育場防禦系統！亞歷克斯在樓上順利暗殺漢森上校並平安生還！V 與虛弱的頌鳥攜手殺出體育場，開啟後續【殺人月】決戰！',
        consequences: ['亞歷克斯（Alex）成功存活', '漢森死於亞歷克斯暗殺', '李德成為追捕敵對陣營', '開啟後續任務《殺人月》(The Killing Moon)'],
        rewards: ['漢森三把不朽武器搜刮 (狂歡/禿鷹/獵犬)', '解鎖頌鳥逃亡結局']
      },
      {
        id: 'firestarter_help_reed',
        label: '【李德線】聽從李德，啟動冰壁捕獲頌鳥 (背叛路線)',
        description: '將李德給予的聯邦冰壁程式插入主機，試圖制服頌鳥。',
        spoilerDetail: '冰壁失敗！頌鳥意識被黑牆徹底吞噬陷入狂暴，將體育場化為焦土逃脫。亞歷克斯在樓上慘遭漢森當場殘忍殺害！V 必須親自單挑擊斃漢森，隨後開啟極度黑暗絕望的【受損之物】黑牆巨蛛逃亡線！',
        consequences: ['亞歷克斯慘死漢森之手', 'V 親自單挑手刃漢森上校', '頌鳥被黑牆 AI 寄生狂暴暴走', '開啟極度恐怖的壓抑任務《受損之物》(Somewhat Damaged)'],
        rewards: ['漢森三把不朽武器', '解鎖李德/邁爾斯治療特工路線']
      }
    ],
    tips: '在漢森身死後，務必搜刮他的屍體取得三把極品不朽武器：狂歡（輕機槍）、禿鷹（手槍）與獵犬（左輪）！',
    backgroundContext: '漢森上校在黑市大廈深處儲存了能修復破損神經矩陣的冷卻核心。頌鳥坦白神經矩陣只能使用一次（治好她或治好 V），但她渴望擺脫邁爾斯作為黑牆武器工具人的地獄命運。李德則堅信唯有將頌鳥帶回華盛頓國家醫療中心才是拯救她的唯一解。兩名特工的執念在此碰撞出毀滅的火花。',
    tacticalObjectives: [
      '階段一【身份竊取偽裝】：安裝法語行為神經晶片，化裝成卡塞爾雙胞胎優雅步入漢森的軍事會客室。',
      '階段二【破解矩陣神經鏈】：與漢森周旋試探，在通訊中與頌鳥進行最後的眼神密碼確認。',
      '階段三【致命決擇一瞬間】：在主控電腦前，決定是否插入李德的拘禁代碼。'
    ],
    explorationSecrets: [
      '不論選哪條路線，只要探索得當，都能拿滿漢森身上的三件標誌性橙色裝備。',
      '亞歷克斯若存活，日後會在市中心酒吧給 V 留下深情道別的紀念明信片。'
    ],
    gridPos: { column: 9, row: 5 }
  },
  {
    id: 'pl_the_killing_moon',
    title: '奪命之月',
    titleEn: 'The Killing Moon',
    soundtrackLore: {
      songTitle: 'The Killing Moon',
      artist: 'Echo & the Bunnymen',
      releaseYear: '1984',
      description: '後龐克經典名曲。在暴雨航太中心的停機坪上，命運如月光般不可抗拒，面臨生死抉擇的終審之夜。'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局：頌鳥終局',
    summary: '護送瀕死的頌鳥前往軌道航空發射基地，迎戰新美國精銳黑色行動部隊的全面封鎖。',
    spoilerSummary: '在前往發射台的軌道電車上，頌鳥坦承神經矩陣只能救一個人，她欺騙了 V！在月球火箭前，所羅門·李德持槍阻攔。V 面臨【將頌鳥交給李德】（換取自身手術治癒）或【拔槍射殺李德送頌鳥登月】的極致催淚抉擇！',
    prerequisites: ['pl_firestarter'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Songbird / Solomon Reed / Rosalind Myers',
    choices: [
      {
        id: 'pl_send_songbird_moon',
        label: '【權杖之王】射殺李德，送頌鳥登月奔向自由',
        description: '原諒頌鳥的欺騙，拒絕李德的阻攔，在對峙中拔槍擊斃李德，將頌鳥安置進月球穿梭機。',
        spoilerDetail: '李德倒在血泊中身亡。頌鳥搭乘火箭成功飛往月球（由神秘藍眼人接應）。數天後 V 會在海灘收到頌鳥從月球寄回的神經金屬紀念禮物與不朽金屬義體。',
        consequences: ['所羅門·李德陣亡', '頌鳥成功抵達月球重獲新生', '達成自由幻局【權杖之王】(King of Wands) 結局', '無法解鎖新美國治療塔樓結局'],
        rewards: ['不朽動能左輪：棄子 (Pariah - 李德掉落)', '頌鳥月球紀念胸針']
      },
      {
        id: 'pl_give_songbird_reed',
        label: '【寶劍之王】妥協交出頌鳥，讓李德帶走換取治療',
        description: '在對峙中收起武器，將昏迷的頌鳥交給李德。',
        spoilerDetail: '李德信守承諾，邁爾斯總統派遣醫療隊接走頌鳥。李德為 V 爭取到華盛頓特區神經手術名額，解鎖本體【塔樓結局】（V 作為普通人重獲新生）！',
        consequences: ['所羅門·李德存活', '頌鳥被帶回新美國接受監管', '達成自由幻局【寶劍之王】(King of Swords) 結局', '成功解鎖本體終章【塔樓結局】(The Tower)'],
        rewards: ['解鎖塔樓結局資格', '新美國 50,000 歐元特工獎金']
      }
    ],
    tips: '在軌道航空大廳遭遇武裝直升機掃射時，利用頌鳥提供的黑牆過載代碼可以瞬間秒殺整隊特種部隊！',
    backgroundContext: '夜之城外海的軌道航空中心是通往月球殖民地的門戶。新美國聯邦部隊為了奪回頌鳥體內的黑牆武器秘密，悍然越境入侵航空站發動血腥屠殺。暴雨如注的停機坪上，命運將三個遍體鱗傷的人推向了最後的審判台。',
    tacticalObjectives: [
      '階段一【航站屋頂潛伏】：在列車天花板通風管穿行，避開軌道航空憲兵與新美國黑色行動隊的交火。',
      '階段二【釋放黑牆滅世神威】：握住頌鳥冰冷的手，引導純黑色的毀滅閃電粉碎整座候機大廳的裝甲機甲。',
      '階段三【棧道拔槍生死對峙】：抱著頌鳥走在通往火箭的雨中棧橋，李德從陰影中走出拔槍，進入最揪心的三選一終局對話。'
    ],
    explorationSecrets: [
      '擊敗李德後可撿取其心愛的專屬消音動能技術手槍「棄子」（Pariah，唯一能消音穿牆連發的極品神槍）。'
    ],
    gridPos: { column: 10, row: 5 }
  },
  {
    id: 'pl_somewhat_damaged',
    title: '幾近殘損',
    titleEn: 'Somewhat Damaged',
    soundtrackLore: {
      songTitle: 'Somewhat Damaged',
      artist: 'Nine Inch Nails (九寸釘)',
      releaseYear: '1999',
      description: '工業金屬王者九寸釘傳世壓抑名曲。陰暗撕裂的機械節奏與辛諾蘇爾地堡中突變 AI 巨蛛追殺的驚悚氛圍高度共鳴。'
    },
    category: 'phantom_liberty',
    actLabel: '自由幻局：李德終局',
    summary: '深入狗鎮地下舊軍事科技地堡 Cynosure，在無敵突變工程機甲「巨蛛」追殺下追蹤頌鳥。',
    spoilerSummary: '全遊戲最驚悚的生存恐怖體驗！無法反抗無敵巨蛛，只能依靠潛行躲避。在核心深處面對被黑牆摧殘生不如死的頌鳥，面臨【成全頌鳥安樂死】或【將痛苦的活體頌鳥交給邁爾斯】的沉痛終局！',
    prerequisites: ['pl_firestarter'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Songbird / Solomon Reed / Rosalind Myers',
    choices: [
      {
        id: 'pl_kill_songbird_mercy',
        label: '【聖杯之王】成全頌鳥拔管安樂死 (仁慈解脫)',
        description: '答應頌鳥的苦苦哀求，拔除生命維持管線讓其尊嚴死去。',
        spoilerDetail: '邁爾斯對只帶回一具屍體極為震怒並拒絕提供 V 治療！但李德在事後深深感謝 V 幫頌鳥結束了作為怪物的折磨，內心獲得徹底解脫。',
        consequences: ['頌鳥尊嚴長眠死亡', '邁爾斯拒絕提供醫療 (無法解鎖塔樓結局)', '達成自由幻局【聖杯之王】(King of Cups) 結局', '李德擺脫盲從獲得心靈救贖'],
        rewards: ['不朽黑牆沖鋒槍：厄瑞玻斯 (Erebus 製作圖紙)', '黑牆突觸神經晶片']
      },
      {
        id: 'pl_spare_songbird_corpse',
        label: '【星幣之王】拒絕殺死頌鳥，將活體交還給李德與邁爾斯',
        description: '拒絕安樂死，呼叫李德將重度昏迷的頌鳥運上聯邦軍用運輸機。',
        spoilerDetail: '邁爾斯極為滿意並全額兌現承諾，解鎖本體【塔樓結局】！然而頌鳥餘生將淪為新美國生不如死的黑牆抽搐工具，李德後半生也深陷無盡悔恨。',
        consequences: ['頌鳥被當作工具人生不如死', '解鎖本體【塔樓結局】(The Tower)', '達成自由幻局【星幣之王】(King of Pentacles) 結局'],
        rewards: ['解鎖塔樓結局資格', '新美國最高榮譽勳章']
      }
    ],
    tips: '巨蛛巡邏時會發出令人膽寒的機械雜音與紅光，看見螢幕泛紅立刻躲入桌底或牆角盲區，絕對不能被它看見！',
    backgroundContext: '舊網深處封印著被人類遺忘的舊軍事科技黑科技工程「犬諾修爾」（Cynosure）。深層地堡中關閉著由瘋狂流氓 AI 驅動的自適應維修機器人「賽羅爾巨蛛」。在此處，所有常規武器與義體插件全部失效，唯有心跳聲在死寂走廊中迴盪。',
    tacticalObjectives: [
      '階段一【深潛地底三十米】：穿過厚重的防輻射密封閘門，深入塵封半個世紀的軍事科技神經實驗室。',
      '階段二【躲避巨蛛獵殺躲貓貓】：在反應堆、數據庫與低溫冷卻室間切換開關，利用盲區障礙物躲避不可阻擋的鋼鐵巨蛛。',
      '階段三【神經核心拔管抉擇】：走進被黑牆流動代碼染紅的主機房，凝視被吊掛在半空、哭泣求死的頌鳥，做出最艱難的人性抉擇。'
    ],
    explorationSecrets: [
      '在地堡工程維修間與冷卻機房內，可搜刮到製造「不朽黑牆沖鋒槍厄瑞玻斯」或「黑牆網路接入倉」的遠古密碼模組！'
    ],
    gridPos: { column: 10, row: 6 }
  },

  // ==========================================
  // 第 3 幕與大結局 (ACT 3 & ENDINGS)
  // ==========================================
  {
    id: 'act3_nocturne_op55n1',
    title: '夜曲 Op55N1',
    titleEn: 'Nocturne Op55N1',
    soundtrackLore: {
      songTitle: 'Nocturne in F minor, Op. 55, No. 1',
      artist: 'Frédéric Chopin (蕭邦)',
      releaseYear: '1844',
      description: '鋼琴詩人蕭邦創作的著名夜曲，也是全作唯一一首古典名曲。荒坂華子在餘燼頂層親自彈奏此曲，旋律優雅悲戚，引導 V 登上米絲蒂天台做出決定所有人宿命的終局抉擇。'
    },
    category: 'act3_endings',
    actLabel: '第 3 幕：命運十字路口',
    summary: '前往餘燼餐廳面見荒坂華子。隨後在米絲蒂通靈屋天台沉思，做出決定所有人宿命的最終抉擇！',
    spoilerSummary: '【全遊戲最重要的無退路點 (Point of No Return)】！在天台長椅上，拿出藥丸後與強尼進行命運對談，決定今晚究竟依靠誰殺入荒坂塔：荒坂華子（惡魔）、帕娜（星星）、羅格（太陽）、或者一人單挑（別怕死神）！',
    prerequisites: ['act2_arasaka_search_and_destroy'],
    isBranchPoint: true,
    isPointOfNoReturn: true,
    branchType: 'critical_plot',
    associatedNpc: 'Johnny Silverhand / Misty / Hanako Arasaka',
    choices: [
      {
        id: 'ending_choice_hanako',
        label: '【惡魔線】相信荒坂華子 (接受荒坂企業協議)',
        description: '吞下阻斷劑，信任華子的承諾，由荒坂軍隊陪同奪權。',
        spoilerDetail: '開啟《始亂終棄》任務，協助華子發動政變推翻賴宣，前往荒坂空間站接受手術，面臨簽署靈魂版權契約或返地等死的悲涼結局。',
        consequences: ['解鎖【惡魔結局】(The Devil)', '失去強尼的靈魂尊重', '若救了竹村可獲得專屬成就'],
        rewards: ['解鎖惡魔結局資格']
      },
      {
        id: 'ending_choice_panam',
        label: '【星星/節制線】向帕娜與阿德卡多家族求助 (推薦)',
        description: '撥打電話給帕娜，請求阿德卡多家族出動魔蜥坦克鑽地突襲荒坂塔。',
        spoilerDetail: '開啟《公路之歌》終章，索爾、帕娜與流浪者弟兄傾巢而出。在神輿中可選擇 V 返回肉體（星星結局）或讓強尼接管身體（節制結局）。',
        consequences: ['解鎖【星星結局】(The Star - 全劇最溫暖結局)', '解鎖【節制結局】(Temperance)', '索爾在戰鬥中英勇犧牲'],
        rewards: ['解鎖星星與節制結局']
      },
      {
        id: 'ending_choice_rogue',
        label: '【太陽/節制線】相信強尼，讓強尼與羅格聯手出擊',
        description: '吞下偽生極效藥丸將主導權交給強尼，找來生女王羅格空降突襲荒坂塔。',
        spoilerDetail: '開啟《敲響天堂之門》，強尼與羅格駕駛浮空車強行墜落荒坂植物園。羅格犧牲自己與碎骨同歸於盡。V 成為夜之城來生之王，展開水晶宮太空終極委託。',
        consequences: ['解鎖【太陽結局】(The Sun - 夜之城活著的傳奇)', '羅格壯烈犧牲', '解鎖【節制結局】'],
        rewards: ['解鎖太陽結局']
      },
      {
        id: 'ending_choice_reaper',
        label: '【隱藏單挑結局】別怕死神 (Don\'t Fear The Reaper)',
        description: '在對話選項前沉默凝視槍與藥丸，靜止等待 5 分鐘不動。',
        spoilerDetail: '強尼會提議：「這是一場勝算為零的自殺行動，但我們誰也不犧牲，就你跟我兩個人，大搖大擺從大門殺進荒坂塔！」無隊友、無存檔點，中途陣亡直接出工作人員字幕！',
        consequences: ['無任何無辜隊友傷亡', '全遊戲最熱血、難度最高的終極史詩挑戰', '成功攻克可自由選擇成為太陽或節制'],
        rewards: ['解鎖隱藏結局【別怕死神】', '夜之城終極活著的傳奇']
      },
      {
        id: 'ending_choice_suicide',
        label: '【絕路結局】將槍扔下天台，平靜結束痛苦',
        description: '選擇「也可以把這一切都結束了」，將手槍拋落天台。',
        spoilerDetail: '在夜之城微風中服毒自盡，避免任何朋友因自己而死。片尾所有親友（老維、米絲蒂、茱蒂、帕娜）將留下痛哭崩潰的語音留言。',
        consequences: ['達成【絕路結局】(Suicide Ending)', '全親友極具震撼力的悲痛錄音留言'],
        rewards: []
      }
    ],
    tips: '進入餘燼餐廳電梯前，系統會自動建立「無退路存檔點」。通關後隨時可以讀取此存檔體驗其他所有分支結局！',
    backgroundContext: '夜之城的霓虹在腳下無盡蔓延。米絲蒂通靈屋的天台是傑克當年常來抽菸的地方，也是 V 與強尼靈魂撕裂最激烈的審判台。兩顆藥丸擺在眼前：紅色抑制強尼、藍色釋放強尼。手中的配槍沉重無比。',
    tacticalObjectives: [
      '階段一【餘燼頂層晚宴】：與盛裝彈鋼琴的華子會面，確認三郎在神輿中的印記備份真相。',
      '階段二【米絲蒂護送天台】：被病痛折磨倒地，米絲蒂將虛弱的 V 攙扶至清風吹拂的天台長椅。',
      '階段三【天台通訊最後告別】：撥通最後一通電話給心中的至愛（帕娜/茱蒂/瑞斯/凱瑞），隨後與強尼決定命運方向。'
    ],
    explorationSecrets: [
      '若要觸發《別怕死神》，必須先前在《插管》墓地選對對話，並在天台對話選單出現後完全不移動滑鼠靜止等待 300 秒。'
    ],
    gridPos: { column: 9, row: 2 }
  },

  // ==========================================
  // 八大傳奇隱藏任務 (HIDDEN QUESTS)
  // ==========================================
  {
    id: 'hidden_highwayman',
    title: '亡命之徒',
    titleEn: 'The Highwayman',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '在地圖無任何標記的情況下，破解一對亡命鴛鴦的愛情悲劇，獲得隱藏改裝重機「以森」。',
    spoilerSummary: '調查科羅納多農場水庫邊的塗鴉車庫，循著照片線索找到背叛告密的詹姆斯與慘死的喬西。在沃森區全食品工廠北側秘密車庫輸入密碼「0214」，即可免費開走這輛絕美的手繪客製摩托車！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['隱藏專屬重機：納札雷「以森」(Arch Nazare "Itsan")'],
    iconicGear: [],
    tips: '秘密車庫密碼為「0214」（情人節日期），位於全食品工廠快速傳送點北邊馬路對面的捲簾門。',
    associatedNpc: 'Josie / James',
    backgroundContext: '夜之城沒有標記在地圖上的真實傳奇。六街幫的喬西愛上了瓦倫蒂諾幫的詹姆斯，兩人偷走了一輛天價改裝的納札雷機車準備遠走高飛，卻在仇恨與背叛中被命運徹底碾碎。',
    tacticalObjectives: [
      '階段一【水庫車庫起點】：在科羅納多農場東南方廢棄車庫檢修老摩托，讀取筆電中兩人的浪漫合影。',
      '階段二【賈潘敦長椅尋凶】：前往賈潘敦找尋坐在長椅上心虛的詹姆斯，逼問出他向六街幫出賣情人的骯髒真相。',
      '階段三【地鐵站暗角認屍】：在海伍德地鐵站垃圾箱旁掃描喬西冰冷的遺體，獲取刻有紀念日的密碼線索。',
      '階段四【輸入密碼開走以森】：在全食品廠秘密車庫輸入「0214」，引擎轟鳴聲中永久解鎖愛車。'
    ],
    explorationSecrets: [
      '此任務在整個夜之城地圖上沒有任何黃色驚嘆號標記，純粹依靠玩家實地探索觸發，被譽為探索設計典範。'
    ],
    gridPos: { column: 3, row: 6 }
  },
  {
    id: 'hidden_skippy',
    title: '機械槍小寶',
    titleEn: 'Machine Gun',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '在海伍德貧民窟垃圾堆中拾獲一把擁有獨立人格與全息投影的話癆手槍「小寶」。模式反轉陷阱！',
    spoilerSummary: '【必備防坑防雷核心知識】：撿起小寶時，它會詢問預設模式：【冷血殺手】（鎖頭）還是【愛狗人士】（鎖膝蓋）。在擊倒 50 名敵人後，小寶會【永久反轉模式】且不可逆！因此若想永久鎖頭，初始必須先選【愛狗人士】！最終可選擇將其物歸原主蕾吉娜換取獎金，或永遠留在身邊。',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Skippy / Regina Jones',
    choices: [
      {
        id: 'skippy_keep',
        label: '自己留下小寶 (拒絕交還給蕾吉娜)',
        description: '在得知其原主人是合事佬蕾吉娜後，拒絕歸還。',
        spoilerDetail: '小寶會不停大喊「壞蛋！壞蛋！」抱怨 V 是個偷槍賊，但你將永久擁有一把自動鎖頭的搞笑話癆神器！',
        consequences: ['永久保留不朽武器小寶', '小寶會持續開啟吐槽罵人語音'],
        rewards: ['不朽智慧手槍：小寶 (Skippy)']
      },
      {
        id: 'skippy_return',
        label: '交還給蕾吉娜·瓊斯 (換取歐元)',
        description: '將小寶送回蕾吉娜處物歸原主。',
        spoilerDetail: '蕾吉娜會將其重置清空記憶，小寶的名字被重命名為雛菊，失去話癆靈魂，換取約 7,000 歐元。',
        consequences: ['小寶被格式化重置', '失去話癆手槍'],
        rewards: ['7,000 歐元現金獎勵']
      }
    ],
    tips: '初始對話一定要選「愛狗人士」，等射擊 50 人後觸發對話反轉，小寶就會永久變成爆頭神器「冷血殺手」！',
    backgroundContext: '海伍德峽谷區一處無人後巷垃圾箱後，躺著一個裝著特殊定製改裝槍械的公事包。這是一把被前任主人遺忘的實驗型智慧手槍，內建擁有唱歌、抱怨、甚至擅自開火等多重性格的強大獨立 AI。',
    tacticalObjectives: [
      '階段一【後巷開箱認主】：翻越垃圾鐵絲網，拔出手槍聆聽其高亢刺耳的蕾哈娜歌曲哼唱聲。',
      '階段二【鎖定模式欺騙調校】：在對話中故意選擇「愛狗人士」（打膝蓋殘疾模式）。',
      '階段三【累計 50 次擊中】：在街頭戰鬥中累計用小寶擊倒 50 名幫派分子，等待其主動彈出強制對話。',
      '階段四【永久冷血鎖頭鎖定】：在對話中面對小寶的道德反思，成功引導其模式永久鎖死為爆頭冷血殺手。'
    ],
    explorationSecrets: [
      '小寶在玩家跑步時有小機率會不小心「走火」射擊路人，攜帶時需注意避免在警察面前引發通緝。'
    ],
    gridPos: { column: 4, row: 6 }
  },
  {
    id: 'hidden_im_in_love_with_my_car',
    title: '我愛我的車',
    titleEn: "I'm in Love with My Car",
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '探索沃森北區荒廢倉庫，致敬已故拉力賽車傳奇 Ken Block，免費開走雙聯武裝肌肉車！',
    spoilerSummary: '2.0 版本新增的最高人氣探索彩蛋。直接驅車前往沃森區北區大型鐵皮貨倉，在第二個半掩的大門內發現 43 號拉花的古德拉 Type-66 Hoon。在車尾箱子翻出鑰匙，上車即永久歸入車庫！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['武裝肌肉漂移戰車：古德拉 Type-66「Hoon」'],
    iconicGear: [],
    tips: '無需接取任何前置任務，開局完成第一幕後隨時驅車前往沃森區最北端倉庫即可直接解鎖！',
    associatedNpc: 'Johnny Silverhand / Ken Block Tribute',
    backgroundContext: 'CD Projekt RED 為了紀念因雪地摩托事故不幸離世的傳奇拉力賽車手、甩尾大師 Ken Block（43 號），在 2.0 更新中特意在沃森區深處打造了這處秘密賽車手基地。',
    tacticalObjectives: [
      '階段一【北區倉庫搜尋】：開車沿著沃森工業區北側公路尋找標有斑駁黃色警戒線的鋼骨倉庫群。',
      '階段二【強尼現身驚嘆】：走進半掩的第二間車庫，強尼會驚嘆地坐在廢輪胎上向這台速度機器致敬。',
      '階段三【搜刮車鑰匙綁定】：在車身左後方的倒塌貨架木箱中翻出備用鑰匙，點火啟動雙聯車載機槍。'
    ],
    explorationSecrets: [
      '該車是全遊戲唯二配備前置雙聯機槍的免費肌肉車，在追逐交火任務中具備毀滅性的壓制力。'
    ],
    gridPos: { column: 5, row: 6 }
  },
  {
    id: 'hidden_prophets_song',
    title: '先知的歌聲',
    titleEn: "The Prophet's Song",
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '聆聽米絲蒂通靈屋門口流浪先知蓋瑞的狂人預言，阻擊神祕黑衣人交易並截獲加密陰謀晶片。',
    spoilerSummary: '每次經過時給予蓋瑞施捨並聆聽其預言（涉及吸血鬼、藍眼睛貴族與荒坂陰謀）。最終觸發秘密交易，在舊碼頭打倒漩渦幫截獲神祕代碼晶片。向神秘學家解析牽扯出暗中操控夜之城命運的「藍眼人」龐大黑手！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['神祕加密儀式晶片 (解碼夜之城終極未解世界觀之謎)'],
    tips: '每次經過小唐人街時記得停下腳步給蓋瑞投幣，連續聆聽五次不同預言後方可觸發最終伏擊任務。',
    associatedNpc: 'Prophet Garry / Blue-Eyed People (藍眼人)',
    backgroundContext: '在米絲蒂通靈屋對面的破床墊上，整日坐著一個身上貼滿鋁箔紙、高喊著「外星機器人吸血鬼正統治夜之城」的流浪先知蓋瑞。所有人把他的話當成賽博精神病的胡言亂語，直到他的預言一條接一條在現實中殘酷應驗。',
    tacticalObjectives: [
      '階段一【定期佈施聆聽】：分 5 次前往老維診所門口與蓋瑞互動，每次給予 100 歐元並保護他免受混混毒打。',
      '階段二【埋伏舊工廠船塢】：根據預言時間前往歌舞伎區廢棄倉庫，藏身箱子後監聽漩渦幫與西裝黑衣人的神秘暗號交接。',
      '階段三【搶奪未知晶片】：擊斃交接雙方，搜刮「未知的古代密碼晶片」並返回通靈屋尋找失蹤的蓋瑞。'
    ],
    explorationSecrets: [
      '此任務的加密代碼與市長被洗腦任務《美夢繼續》以及太陽結局的水晶宮雇主「藍眼人」緊密相連，是 2077 最頂級的世界觀暗線！'
    ],
    gridPos: { column: 6, row: 6 }
  },
  {
    id: 'hidden_dream_on',
    title: '美夢繼續',
    titleEn: 'Dream On',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '調查即將當選市長的佩拉雷斯夫婦公寓被秘密入侵案，揭開毛骨悚然的遠端心智重寫陰謀。',
    spoilerSummary: '追蹤公寓深處的隱蔽通訊室，發現高階監視部隊正使用微波波段暗中改寫佩拉雷斯夫婦的記憶與性格！追逐監視黑車並在公園與傑佛遜見面。選擇是否告訴他殘酷真相：告訴他會讓他陷入終生偏執恐懼，隱瞞則讓他成為完美的傀儡木偶！',
    prerequisites: ['act2_arasaka_down_on_street'],
    isBranchPoint: true,
    branchType: 'critical_plot',
    associatedNpc: 'Jefferson Peralez / Elizabeth Peralez / Mr. Blue Eyes (藍眼人)',
    choices: [
      {
        id: 'dream_tell_truth',
        label: '向傑佛遜坦白被洗腦操控的殘酷真相',
        description: '在長凳上告訴他有人在監視並重寫他和妻子的記憶。',
        spoilerDetail: '傑佛遜陷入極度偏執與恐懼，當選市長後日夜懷疑身邊所有人，家庭關係破裂。神祕威脅者（藍眼人）會遠端短暫黑入 V 的神經並發出死亡警告。',
        consequences: ['傑佛遜精神瀕臨崩潰', '當選市長但陷入極度偏執', '收到神祕幕後黑手的直接威脅通話'],
        rewards: ['傑佛遜的巨額委託酬金']
      },
      {
        id: 'dream_hide_truth',
        label: '聽從伊莉莎白勸告，隱瞞洗腦真相 (編造謊言)',
        description: '告訴傑佛遜這只是政敵霍特副市長的常規竊聽手段。',
        spoilerDetail: '傑佛遜心情平靜地贏得市長大選，生活看似幸福美滿，但夫妻兩人的思想與政策已完全淪為幕後神秘勢力手中的提線木偶。',
        consequences: ['佩拉雷斯夫婦維持和睦表象', '市長徹底淪為幕後 AI/神秘組織的操縱傀儡'],
        rewards: ['伊莉莎白的私下感謝與全額酬金']
      }
    ],
    tips: '在公園長椅與傑佛遜對話時，抬頭看左側二樓陽台，會發現「藍眼人」正手持公事包站在陽台上冷冷俯視著你們！',
    backgroundContext: '傑佛遜·佩拉雷斯是夜之城罕見的不向大企業低頭的正直市長候選人。然而在他守備森嚴的豪華頂層公寓中，夫妻兩人開始出現莫名記憶斷層、口味突變與憑空消失的血跡。這是一起跨越科技認知極限的深層神經操縱案。',
    tacticalObjectives: [
      '階段一【豪宅深層排查】：掃描公寓二樓秘密防彈鋼板，沿著隱蔽電纜在暗房內發現連向天台的大型碟形微波發射器。',
      '階段二【飛車追逐黑衣特工】：追蹤微波訊號至街頭，駕駛車輛全速狂飆追趕神秘的黑色廂型通訊車。',
      '階段三【公園長椅終局審判】：接獲神秘變聲電話的直接腦神經威脅後，前往噴泉長椅與傑佛遜坦白或撒謊。'
    ],
    explorationSecrets: [
      '在公園二樓陽台用狙擊鏡或掃描器查看藍眼人，系統會顯示其為「？？？」，無法被標記或射擊，營造出絕頂的科幻懸疑氛圍。'
    ],
    gridPos: { column: 7, row: 6 }
  },
  {
    id: 'hidden_kold_mirage',
    title: '冷酷的幻影',
    titleEn: 'Kold Mirage',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '根據神秘座標重返垃圾場，打撈炸毀舊網路的傳奇神級黑客「雷奇·巴特莫斯」的冷凍艙。',
    spoilerSummary: '在第一幕德克斯特被爆頭的垃圾堆旁找到深埋的舊型冷凍維生艙。發現巴特莫斯早已因斷電死在艙內化為乾屍。取出其隨身攜帶的神級賽博甲板，前往來生找尼克斯破解，可獲得傳奇法術級快速黑客組件！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['雷奇·巴特莫斯的遠古賽博甲板', '多個傳奇級快速黑客組件晶片'],
    tips: '在尼克斯被過載黑客病毒燒腦時，切勿拔掉電源線！使用身旁的維修面板或用智力快速入侵中和病毒，即可救下尼克斯並全拿獎勵！',
    associatedNpc: 'Rache Bartmoss / Nix',
    backgroundContext: '2020 年代憑藉一己之力引爆全網「數據崩潰」、將人類舊網摧毀並催生黑牆的傳奇黑客之神雷奇·巴特莫斯，其肉體在消失數十年後，竟然被拋棄在夜之城最不起眼的垃圾山瓦礫之中。',
    tacticalObjectives: [
      '階段一【垃圾場定位冷凍艙】：根據神祕坐標重返惡土邊界的垃圾填埋場，在德肖恩腐爛的屍體旁挖掘出散發白霧的冷凍艙。',
      '階段二【護送甲板至來生】：將艙內拔下的遠古賽博甲板帶回微光搖曳的來生酒吧，交給首席黑客尼克斯進行冰壁解析。',
      '階段三【緊急解救尼克斯】：解碼過程中遠古流氓病毒暴走，尼克斯眼冒電火花抽搐，限時破解旁邊保險絲電路拯救其性命。'
    ],
    explorationSecrets: [
      '成功救下尼克斯後，他會對 V 肅然起敬，並將巴特莫斯甲板內儲存的所有極品黑客配方免費全數相贈。'
    ],
    gridPos: { column: 8, row: 6 }
  },
  {
    id: 'hidden_love_rollercoaster',
    title: '愛如雲霄飛車',
    titleEn: 'Love Rollercoaster',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '在太平洲海濱遊樂園修復年久失修的過山車發電機，與強尼·銀手共享罕見的童趣歡樂時光。',
    spoilerSummary: '極具人情味的暖心隱藏支線！在太平洲西風莊園海邊找到一群沮喪的年輕人。用掃描器找到左側軌道下方的控制面板修復保險絲，隨後邀請強尼一同坐上過山車。強尼會在身旁高舉雙手開懷大笑，留下 2077 中最治癒的美好瞬間！',
    prerequisites: ['act1_love_and_death'],
    isBranchPoint: false,
    keyRewards: ['強尼·銀手的開懷笑容與珍貴好感對話'],
    tips: '務必在完成太平洲巫毒幫主線前前去遊玩！如果主線推進太快，海灘上的年輕人會離開，雖然仍能手動修復過山車，但將失去部分劇情對話。',
    associatedNpc: 'Johnny Silverhand / Pacifica Youths',
    backgroundContext: '在充斥著暴力、槍戰與末路絕望的夜之城中，這座荒廢已久的大型過山車是太平洲最後的童年幻夢。幾名當地的年輕人夢想在逃離夜之城前再坐一次雲霄飛車，卻苦於電力中斷無計可施。',
    tacticalObjectives: [
      '階段一【過山車月台交涉】：在海邊軌道起點與垂頭喪氣的年輕人對話，主動接下檢修電路的承諾。',
      '階段二【排查隱藏配電箱】：沿著鐵軌下方的黃色纜線向左下方走，在觀景台底座後面找到被雜物遮擋的控制箱並合上電閘。',
      '階段三【與強尼並肩雲霄狂飆】：返回車廂坐上第一排，強尼會驚喜地坐在身旁，隨車體衝上最高點俯瞰夕陽下的夜之城海岸線。'
    ],
    explorationSecrets: [
      '這是全作少數能看見強尼發自內心純粹歡笑的治癒場景，強烈建議在相機模式中拍照留念。'
    ],
    gridPos: { column: 9, row: 6 }
  },
  {
    id: 'hidden_shoot_to_thrill',
    title: '全金屬狂潮',
    titleEn: 'Shoot to Thrill',
    category: 'hidden_secrets',
    actLabel: '隱藏秘密任務',
    summary: '接獲公寓樓下槍店老闆威爾遜的邀請，參加二號巨型建築內部靶場射擊比賽贏得大獎。',
    spoilerSummary: '走進第二號摩天樓槍店參加四人射擊比賽。規則是在限定時間內盡可能射擊所有亮起的靶標。只要用高射速手槍命中超過 45 個靶子奪得第一名，即可獲得一把頂級不朽動能手槍「終夜」！',
    prerequisites: ['act1_the_ripperdoc'],
    isBranchPoint: false,
    keyRewards: ['不朽動能手槍：終夜 (Dying Night - 威爾遜特製版)'],
    tips: '比賽中別人的靶子亮起時射擊也算有效得分！使用彈夾容量大、射速快的手槍（如萊克星頓），可以輕輕鬆鬆達到 45 分以上滿分奪冠！',
    associatedNpc: 'Robert Wilson (槍店老闆)',
    backgroundContext: 'V 居住的 H10 巨型大樓是座容納數萬底層民眾的垂直自給自足都市。槍店老闆羅伯特·威爾遜熱愛槍械文化，為了挽救慘淡的店面生意，自掏腰包舉辦了這場街坊射擊挑戰賽。',
    tacticalObjectives: [
      '階段一【前往 H10 武器店】：乘電梯回到自家公寓樓層，走進威爾遜的武器庫登記射擊名冊。',
      '階段二【就位一號靶位】：拔出手槍站在一號射擊台，等待紅色警告燈熄滅綠燈亮起。',
      '階段三【全場覆蓋快速射擊】：在限時 60 秒內迅速鎖定所有變換的標靶，利用跳彈與多發連射累計 45+ 分數壓倒鄰桌對手。'
    ],
    explorationSecrets: [
      '「終夜」是一把擁有極高射速與快速裝彈手感的傳奇手槍，前期推圖清小怪的極致平民神器。'
    ],
    gridPos: { column: 2, row: 5 }
  }
];
