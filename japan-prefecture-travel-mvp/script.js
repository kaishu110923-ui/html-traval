const prefectures = [
  ["Hokkaido", "hokkaido", "Furano and Biei", "Wide flower fields, snow scenery, and road-trip landscapes.", ["nature", "snow", "flowers"]],
  ["Aomori", "tohoku", "Hirosaki Castle", "Cherry blossoms, castle history, apple country, and northern festival culture.", ["spring", "castle", "festival"]],
  ["Iwate", "tohoku", "Hiraizumi", "Calm temple heritage and gardens for a slower cultural stop.", ["heritage", "temples", "slow"]],
  ["Miyagi", "tohoku", "Matsushima Bay", "Island views, bay cruises, seafood, and an easy Sendai side trip.", ["coast", "seafood", "views"]],
  ["Akita", "tohoku", "Kakunodate", "Samurai houses, spring blossoms, and a quiet historical townscape.", ["history", "spring", "old town"]],
  ["Yamagata", "tohoku", "Yamadera", "A mountain temple climb with valley views and a rewarding half-day route.", ["temple", "hiking", "views"]],
  ["Fukushima", "tohoku", "Ouchi-juku", "A thatched-roof post town with local noodles and old-road atmosphere.", ["old town", "food", "history"]],
  ["Ibaraki", "kanto", "Hitachi Seaside Park", "Seasonal flower hills, especially nemophila in spring and kochia in autumn.", ["flowers", "spring", "autumn"]],
  ["Tochigi", "kanto", "Nikko Toshogu Shrine", "Lavish shrine architecture, forested sacred sites, waterfalls, and onsen add-ons.", ["heritage", "shrines", "nature"]],
  ["Gunma", "kanto", "Kusatsu Onsen", "A classic hot spring town centered around steaming yubatake fields.", ["onsen", "winter", "slow"]],
  ["Saitama", "kanto", "Kawagoe", "An easy Tokyo day trip with old storehouses, snacks, and Edo-period charm.", ["day trip", "old town", "food"]],
  ["Chiba", "kanto", "Naritasan Shinsho-ji", "A temple town near Narita Airport for arrival or departure day sightseeing.", ["temple", "airport", "day trip"]],
  ["Tokyo", "kanto", "Asakusa and Shibuya", "Old-town temple streets by day and neon city energy by night.", ["city", "food", "first trip"]],
  ["Kanagawa", "kanto", "Kamakura", "Coastal temples, the Great Buddha, hiking paths, and relaxed cafes near Tokyo.", ["coast", "temples", "day trip"]],
  ["Niigata", "chubu", "Sado Island", "Island culture, gold mine history, rugged coastlines, and slow travel.", ["island", "history", "slow"]],
  ["Toyama", "chubu", "Tateyama Kurobe Alpine Route", "Mountain transport, alpine scenery, and seasonal snow walls.", ["mountains", "snow", "scenery"]],
  ["Ishikawa", "chubu", "Kanazawa", "Gardens, craft culture, preserved districts, seafood, and a refined city pace.", ["gardens", "crafts", "food"]],
  ["Fukui", "chubu", "Dinosaur Museum", "A standout family museum with coastal and temple side trips nearby.", ["museum", "family", "coast"]],
  ["Yamanashi", "chubu", "Fuji Five Lakes", "Mt. Fuji views, lakeside stays, hot springs, and photography scenery.", ["fuji", "nature", "onsen"]],
  ["Nagano", "chubu", "Matsumoto and Kamikochi", "Original castle architecture plus alpine walking routes.", ["castle", "hiking", "mountains"]],
  ["Gifu", "chubu", "Shirakawa-go", "Thatched farmhouses, snowy scenes, and traditional village landscapes.", ["village", "heritage", "winter"]],
  ["Shizuoka", "chubu", "Izu Peninsula", "Coastal hot springs, beaches, seafood, and Mt. Fuji views.", ["coast", "onsen", "seafood"]],
  ["Aichi", "chubu", "Nagoya and Osu", "Miso cuisine, shopping arcades, castle history, and a practical city stop.", ["city", "food", "castle"]],
  ["Mie", "kansai", "Ise Jingu", "One of Japan's most important shrine areas, paired with old streets and coastal food.", ["shrines", "culture", "food"]],
  ["Shiga", "kansai", "Lake Biwa", "Japan's largest lake with cycling, castle towns, temples, and water views.", ["lake", "cycling", "slow"]],
  ["Kyoto", "kansai", "Arashiyama and Higashiyama", "Iconic temples, bamboo, gardens, tea culture, and heritage walks.", ["temples", "culture", "first trip"]],
  ["Osaka", "kansai", "Dotonbori and Shinsekai", "Casual food, nightlife, and a friendly base for Kansai day trips.", ["food", "nightlife", "city"]],
  ["Hyogo", "kansai", "Himeji Castle", "Japan's most famous original castle, easy to combine with Kobe or Osaka.", ["castle", "heritage", "day trip"]],
  ["Nara", "kansai", "Nara Park and Todai-ji", "Ancient capital atmosphere, huge temple architecture, parkland, and easy walking.", ["temples", "history", "family"]],
  ["Wakayama", "kansai", "Koyasan", "Temple lodging, forested pilgrimage atmosphere, and a deeper side of Kansai.", ["temple stay", "pilgrimage", "slow"]],
  ["Tottori", "chugoku", "Tottori Sand Dunes", "Large dunes, coastal views, and a landscape that surprises visitors.", ["coast", "nature", "unique"]],
  ["Shimane", "chugoku", "Izumo Taisha", "A major shrine with mythology, quiet streets, and strong cultural identity.", ["shrines", "mythology", "culture"]],
  ["Okayama", "chugoku", "Kurashiki Bikan Quarter", "Canals, white-walled storehouses, museums, and slow-travel town scenery.", ["old town", "museums", "slow"]],
  ["Hiroshima", "chugoku", "Peace Memorial Park and Miyajima", "A meaningful history stop paired with island shrine scenery.", ["history", "island", "heritage"]],
  ["Yamaguchi", "chugoku", "Motonosumi Shrine", "A dramatic line of red torii gates facing the Sea of Japan.", ["shrine", "coast", "photo"]],
  ["Tokushima", "shikoku", "Iya Valley", "Vine bridges, deep valleys, and festival dance culture.", ["valley", "festival", "nature"]],
  ["Kagawa", "shikoku", "Naoshima and Takamatsu", "Art islands, gardens, ferries, and excellent Sanuki udon.", ["art", "islands", "food"]],
  ["Ehime", "shikoku", "Dogo Onsen", "Classic hot spring atmosphere with Matsuyama Castle nearby.", ["onsen", "castle", "slow"]],
  ["Kochi", "shikoku", "Shimanto River", "Clear river landscapes, markets, local food, and outdoor travel.", ["river", "nature", "food"]],
  ["Fukuoka", "kyushu", "Hakata and Yatai Food Stalls", "Ramen, street stalls, shopping, and a convenient Kyushu gateway.", ["food", "city", "gateway"]],
  ["Saga", "kyushu", "Arita and Imari", "Porcelain towns with kilns, craft shopping, and a calmer culture route.", ["crafts", "ceramics", "slow"]],
  ["Nagasaki", "kyushu", "Nagasaki City", "Harbor views, international history, churches, night scenery, and local food.", ["history", "harbor", "food"]],
  ["Kumamoto", "kyushu", "Kumamoto Castle and Aso", "Castle restoration, volcanic landscapes, grasslands, and road-trip routes.", ["castle", "volcano", "nature"]],
  ["Oita", "kyushu", "Beppu Onsen", "A steam-filled hot spring town with baths, hell tours, and easy access.", ["onsen", "food", "slow"]],
  ["Miyazaki", "kyushu", "Takachiho Gorge", "A dramatic gorge with mythology, boat rides, waterfalls, and rural scenery.", ["gorge", "mythology", "nature"]],
  ["Kagoshima", "kyushu", "Sakurajima", "An active volcano across the bay with ferries, views, and hot sand baths nearby.", ["volcano", "views", "onsen"]],
  ["Okinawa", "kyushu", "Kerama Islands", "Clear water, snorkeling, diving, island stays, and subtropical Japan.", ["islands", "beach", "diving"]],
];

const regionLabels = {
  en: {
    all: "All",
    hokkaido: "Hokkaido",
    tohoku: "Tohoku",
    kanto: "Kanto",
    chubu: "Chubu",
    kansai: "Kansai",
    chugoku: "Chugoku",
    shikoku: "Shikoku",
    kyushu: "Kyushu + Okinawa",
  },
  ja: {
    all: "すべて",
    hokkaido: "北海道",
    tohoku: "東北",
    kanto: "関東",
    chubu: "中部",
    kansai: "関西",
    chugoku: "中国",
    shikoku: "四国",
    kyushu: "九州・沖縄",
  },
  zh: {
    all: "全部",
    hokkaido: "北海道",
    tohoku: "东北",
    kanto: "关东",
    chubu: "中部",
    kansai: "关西",
    chugoku: "中国地方",
    shikoku: "四国",
    kyushu: "九州・冲绳",
  },
  ko: {
    all: "전체",
    hokkaido: "홋카이도",
    tohoku: "도호쿠",
    kanto: "간토",
    chubu: "주부",
    kansai: "간사이",
    chugoku: "주고쿠",
    shikoku: "시코쿠",
    kyushu: "규슈・오키나와",
  },
  fr: {
    all: "Tous",
    hokkaido: "Hokkaido",
    tohoku: "Tohoku",
    kanto: "Kanto",
    chubu: "Chubu",
    kansai: "Kansai",
    chugoku: "Chugoku",
    shikoku: "Shikoku",
    kyushu: "Kyushu + Okinawa",
  },
  it: {
    all: "Tutte",
    hokkaido: "Hokkaido",
    tohoku: "Tohoku",
    kanto: "Kanto",
    chubu: "Chubu",
    kansai: "Kansai",
    chugoku: "Chugoku",
    shikoku: "Shikoku",
    kyushu: "Kyushu + Okinawa",
  },
};

const translations = {
  en: {
    htmlLang: "en",
    brand: "Japan Prefecture Picks",
    languageLabel: "Language",
    navPrefectures: "Prefectures",
    navHow: "How to use",
    heroEyebrow: "Japan travel ideas for international visitors",
    heroTitle: "One recommended travel spot for every prefecture in Japan.",
    heroText:
      "Start with a simple map of ideas. Search by region, season, food, temples, islands, snow, castles, hot springs, or nature, then turn the best-performing destinations into full travel guides later.",
    heroButton: "Browse 47 picks",
    summaryPrefectures: "prefectures covered",
    summaryRegions: "regions to filter",
    summarySpot: "simple spot per prefecture",
    pickerEyebrow: "Travel picker",
    pickerTitle: "Find a prefecture worth adding to your Japan trip.",
    pickerText:
      "This MVP keeps each recommendation short. The goal is to learn which prefectures attract clicks before building deeper hotel, itinerary, transport, and activity pages.",
    searchLabel: "Search",
    searchPlaceholder: "Try Fuji, onsen, food, island...",
    countSingular: "prefecture shown",
    countPlural: "prefectures shown",
    cardIntro: "A simple pick for travelers interested in",
    nextEyebrow: "MVP next step",
    nextTitle: "If people click, expand only what proves demand.",
    nextText:
      "After publishing, track which prefectures and keywords get attention. Then add detailed pages for those destinations first.",
    nextCard1Title: "First expansion",
    nextCard1Text: "Build detail pages for the top 5 clicked prefectures with 1-day and 3-day itineraries.",
    nextCard2Title: "Useful revenue paths",
    nextCard2Text: "Add natural links for hotels, eSIM, Wi-Fi, rail passes, local tours, and travel insurance.",
    nextCard3Title: "Keep it safe",
    nextCard3Text: "Do not overfill the page with ads. Prioritize readable travel advice and official source checks.",
    footerBrand: "Japan Prefecture Picks",
    footerText: "Simple MVP for testing interest in prefecture-based Japan travel recommendations.",
  },
  ja: {
    htmlLang: "ja",
    brand: "日本47都道府県トラベルピック",
    languageLabel: "言語",
    navPrefectures: "都道府県",
    navHow: "使い方",
    heroEyebrow: "訪日旅行者向けの日本旅行アイデア",
    heroTitle: "日本の47都道府県から、おすすめスポットを1つずつ紹介。",
    heroText:
      "地域、季節、食、寺社、島、雪、城、温泉、自然で探せるシンプルな旅行アイデア集です。反応が良い場所から詳しい旅行ガイドへ広げていきます。",
    heroButton: "47件を見る",
    summaryPrefectures: "都道府県を掲載",
    summaryRegions: "地域で絞り込み",
    summarySpot: "各都道府県に1スポット",
    pickerEyebrow: "旅行スポット検索",
    pickerTitle: "日本旅行に加えたい都道府県を見つける。",
    pickerText:
      "このMVPでは各おすすめを短くまとめています。どの都道府県がクリックされるかを見て、ホテル、旅程、交通、体験ページを後から作ります。",
    searchLabel: "検索",
    searchPlaceholder: "例: Fuji, onsen, food, island...",
    countSingular: "件を表示中",
    countPlural: "件を表示中",
    cardIntro: "旅行者におすすめ。テーマ:",
    nextEyebrow: "次の展開",
    nextTitle: "反応がある場所だけ、詳しく育てる。",
    nextText:
      "公開後は、クリックされる都道府県と検索キーワードを確認し、需要がある場所から詳細ページを追加します。",
    nextCard1Title: "最初の拡張",
    nextCard1Text: "クリック上位5都道府県に、1日・3日のモデルコース付き詳細ページを作ります。",
    nextCard2Title: "収益化導線",
    nextCard2Text: "ホテル、eSIM、Wi-Fi、交通パス、現地ツアー、旅行保険への自然なリンクを追加します。",
    nextCard3Title: "安全に運用",
    nextCard3Text: "広告を詰め込みすぎず、読みやすい旅行情報と公式情報の確認を優先します。",
    footerBrand: "日本47都道府県トラベルピック",
    footerText: "都道府県別の日本旅行ニーズを試すためのシンプルなMVPです。",
  },
  zh: {
    htmlLang: "zh",
    brand: "日本都道府县旅行精选",
    languageLabel: "语言",
    navPrefectures: "都道府县",
    navHow: "使用方法",
    heroEyebrow: "面向访日游客的日本旅行灵感",
    heroTitle: "日本47个都道府县，每个推荐一个旅行地点。",
    heroText:
      "从地区、季节、美食、寺社、岛屿、雪景、城堡、温泉和自然中快速寻找灵感。表现好的目的地之后再扩展成完整攻略。",
    heroButton: "浏览47个推荐",
    summaryPrefectures: "覆盖都道府县",
    summaryRegions: "可按地区筛选",
    summarySpot: "每个地区一个精选点",
    pickerEyebrow: "旅行选择器",
    pickerTitle: "找到值得加入日本行程的都道府县。",
    pickerText:
      "这个MVP让每个推荐保持简短，用来测试哪些地区更容易获得点击，再扩展酒店、行程、交通和体验内容。",
    searchLabel: "搜索",
    searchPlaceholder: "试试 Fuji, onsen, food, island...",
    countSingular: "个都道府县显示中",
    countPlural: "个都道府县显示中",
    cardIntro: "适合对这些主题感兴趣的旅行者:",
    nextEyebrow: "MVP下一步",
    nextTitle: "如果有人点击，就只扩展有需求的内容。",
    nextText: "发布后观察哪些都道府县和关键词有反应，然后优先制作这些目的地的详细页面。",
    nextCard1Title: "第一步扩展",
    nextCard1Text: "为点击最高的5个都道府县制作1日和3日行程页面。",
    nextCard2Title: "可用的收益路径",
    nextCard2Text: "自然加入酒店、eSIM、Wi-Fi、交通票券、当地体验和旅行保险链接。",
    nextCard3Title: "保持安全",
    nextCard3Text: "不要过度堆放广告，优先保证可读性和官方信息确认。",
    footerBrand: "日本都道府县旅行精选",
    footerText: "用于测试都道府县型日本旅行推荐需求的简单MVP。",
  },
  ko: {
    htmlLang: "ko",
    brand: "일본 도도부현 여행 추천",
    languageLabel: "언어",
    navPrefectures: "도도부현",
    navHow: "사용 방법",
    heroEyebrow: "방일 여행자를 위한 일본 여행 아이디어",
    heroTitle: "일본 47개 도도부현마다 추천 여행지를 하나씩 소개합니다.",
    heroText:
      "지역, 계절, 음식, 사찰, 섬, 눈, 성, 온천, 자연으로 간단히 찾아보세요. 반응이 좋은 목적지는 나중에 자세한 여행 가이드로 확장합니다.",
    heroButton: "47개 추천 보기",
    summaryPrefectures: "도도부현 수록",
    summaryRegions: "지역 필터",
    summarySpot: "도도부현별 추천 1곳",
    pickerEyebrow: "여행지 선택",
    pickerTitle: "일본 여행에 추가할 만한 도도부현을 찾아보세요.",
    pickerText:
      "이 MVP는 추천을 짧게 유지합니다. 어떤 지역이 클릭되는지 확인한 뒤 호텔, 일정, 교통, 액티비티 페이지를 확장합니다.",
    searchLabel: "검색",
    searchPlaceholder: "예: Fuji, onsen, food, island...",
    countSingular: "개 도도부현 표시 중",
    countPlural: "개 도도부현 표시 중",
    cardIntro: "이런 테마에 관심 있는 여행자에게 추천:",
    nextEyebrow: "다음 단계",
    nextTitle: "클릭이 있는 콘텐츠만 확장합니다.",
    nextText: "게시 후 어떤 도도부현과 키워드가 반응을 얻는지 추적하고, 먼저 상세 페이지를 추가합니다.",
    nextCard1Title: "첫 확장",
    nextCard1Text: "클릭 상위 5개 도도부현에 1일 및 3일 여행 일정 페이지를 만듭니다.",
    nextCard2Title: "수익화 경로",
    nextCard2Text: "호텔, eSIM, Wi-Fi, 교통패스, 현지 투어, 여행 보험 링크를 자연스럽게 추가합니다.",
    nextCard3Title: "안전한 운영",
    nextCard3Text: "광고를 과하게 넣지 말고 읽기 쉬운 여행 정보와 공식 정보 확인을 우선합니다.",
    footerBrand: "일본 도도부현 여행 추천",
    footerText: "도도부현 기반 일본 여행 추천의 수요를 테스트하는 간단한 MVP입니다.",
  },
  fr: {
    htmlLang: "fr",
    brand: "Sélection Japon par préfecture",
    languageLabel: "Langue",
    navPrefectures: "Préfectures",
    navHow: "Mode d'emploi",
    heroEyebrow: "Idées de voyage au Japon pour visiteurs internationaux",
    heroTitle: "Un lieu recommandé pour chaque préfecture du Japon.",
    heroText:
      "Commencez avec une carte simple d'idées. Cherchez par région, saison, cuisine, temples, îles, neige, châteaux, onsen ou nature, puis développez les destinations qui attirent le plus.",
    heroButton: "Voir les 47 choix",
    summaryPrefectures: "préfectures couvertes",
    summaryRegions: "régions à filtrer",
    summarySpot: "un lieu simple par préfecture",
    pickerEyebrow: "Sélecteur de voyage",
    pickerTitle: "Trouvez une préfecture à ajouter à votre voyage au Japon.",
    pickerText:
      "Ce MVP garde chaque recommandation courte afin d'identifier les préfectures qui attirent des clics avant de créer des pages hôtels, itinéraires, transports et activités.",
    searchLabel: "Recherche",
    searchPlaceholder: "Essayez Fuji, onsen, food, island...",
    countSingular: "préfecture affichée",
    countPlural: "préfectures affichées",
    cardIntro: "Un choix simple pour les voyageurs intéressés par",
    nextEyebrow: "Prochaine étape du MVP",
    nextTitle: "Si les visiteurs cliquent, développez seulement ce qui prouve la demande.",
    nextText:
      "Après publication, suivez les préfectures et mots-clés qui attirent l'attention, puis ajoutez d'abord des pages détaillées pour ces destinations.",
    nextCard1Title: "Première extension",
    nextCard1Text: "Créer des pages détaillées pour les 5 préfectures les plus cliquées avec itinéraires de 1 et 3 jours.",
    nextCard2Title: "Pistes de revenus utiles",
    nextCard2Text: "Ajouter des liens naturels vers hôtels, eSIM, Wi-Fi, pass de transport, visites locales et assurance voyage.",
    nextCard3Title: "Rester prudent",
    nextCard3Text: "Ne surchargez pas la page avec des publicités. Priorisez des conseils lisibles et la vérification des sources officielles.",
    footerBrand: "Sélection Japon par préfecture",
    footerText: "MVP simple pour tester l'intérêt envers les recommandations de voyage au Japon par préfecture.",
  },
  it: {
    htmlLang: "it",
    brand: "Scelte Giappone per prefettura",
    languageLabel: "Lingua",
    navPrefectures: "Prefetture",
    navHow: "Come usarlo",
    heroEyebrow: "Idee di viaggio in Giappone per visitatori internazionali",
    heroTitle: "Un luogo consigliato per ogni prefettura del Giappone.",
    heroText:
      "Inizia con una mappa semplice di idee. Cerca per regione, stagione, cibo, templi, isole, neve, castelli, onsen o natura, poi sviluppa le destinazioni che funzionano meglio.",
    heroButton: "Sfoglia 47 scelte",
    summaryPrefectures: "prefetture coperte",
    summaryRegions: "regioni filtrabili",
    summarySpot: "un luogo semplice per prefettura",
    pickerEyebrow: "Selettore di viaggio",
    pickerTitle: "Trova una prefettura da aggiungere al tuo viaggio in Giappone.",
    pickerText:
      "Questo MVP mantiene ogni consiglio breve. L'obiettivo è capire quali prefetture attirano clic prima di creare pagine più profonde su hotel, itinerari, trasporti e attività.",
    searchLabel: "Cerca",
    searchPlaceholder: "Prova Fuji, onsen, food, island...",
    countSingular: "prefettura mostrata",
    countPlural: "prefetture mostrate",
    cardIntro: "Una scelta semplice per viaggiatori interessati a",
    nextEyebrow: "Prossimo passo MVP",
    nextTitle: "Se le persone cliccano, espandi solo ciò che dimostra domanda.",
    nextText:
      "Dopo la pubblicazione, monitora prefetture e parole chiave che attirano attenzione. Poi aggiungi prima pagine dettagliate per quelle destinazioni.",
    nextCard1Title: "Prima espansione",
    nextCard1Text: "Crea pagine dettagliate per le 5 prefetture più cliccate con itinerari di 1 e 3 giorni.",
    nextCard2Title: "Percorsi di ricavo utili",
    nextCard2Text: "Aggiungi link naturali verso hotel, eSIM, Wi-Fi, pass trasporti, tour locali e assicurazione viaggio.",
    nextCard3Title: "Mantienilo sicuro",
    nextCard3Text: "Non riempire la pagina di annunci. Dai priorità a consigli leggibili e controlli sulle fonti ufficiali.",
    footerBrand: "Scelte Giappone per prefettura",
    footerText: "MVP semplice per testare l'interesse verso consigli di viaggio in Giappone per prefettura.",
  },
};

const tagLabels = {
  en: {},
  ja: {
    nature: "自然",
    snow: "雪",
    flowers: "花",
    spring: "春",
    castle: "城",
    festival: "祭り",
    heritage: "世界遺産",
    temples: "寺院",
    slow: "ゆっくり旅",
    coast: "海岸",
    seafood: "海鮮",
    views: "絶景",
    history: "歴史",
    "old town": "古い町並み",
    temple: "寺院",
    hiking: "ハイキング",
    food: "食",
    autumn: "秋",
    shrines: "神社",
    onsen: "温泉",
    winter: "冬",
    "day trip": "日帰り",
    airport: "空港",
    city: "都市",
    "first trip": "初回旅行",
    island: "島",
    mountains: "山",
    scenery: "景色",
    gardens: "庭園",
    crafts: "工芸",
    museum: "博物館",
    family: "家族",
    fuji: "富士山",
    village: "村",
    lake: "湖",
    cycling: "サイクリング",
    nightlife: "夜遊び",
    "temple stay": "宿坊",
    pilgrimage: "巡礼",
    unique: "ユニーク",
    mythology: "神話",
    museums: "美術館",
    shrine: "神社",
    photo: "写真",
    valley: "渓谷",
    art: "アート",
    islands: "島",
    river: "川",
    gateway: "玄関口",
    ceramics: "陶磁器",
    harbor: "港",
    volcano: "火山",
    gorge: "峡谷",
    beach: "ビーチ",
    diving: "ダイビング",
  },
  zh: {
    nature: "自然",
    snow: "雪景",
    flowers: "花",
    spring: "春天",
    castle: "城堡",
    festival: "祭典",
    heritage: "遗产",
    temples: "寺庙",
    slow: "慢旅行",
    coast: "海岸",
    seafood: "海鲜",
    views: "景观",
    history: "历史",
    "old town": "古街",
    temple: "寺庙",
    hiking: "徒步",
    food: "美食",
    autumn: "秋天",
    shrines: "神社",
    onsen: "温泉",
    winter: "冬天",
    "day trip": "一日游",
    airport: "机场",
    city: "城市",
    "first trip": "首次旅行",
    island: "岛屿",
    mountains: "山",
    scenery: "风景",
    gardens: "庭园",
    crafts: "工艺",
    museum: "博物馆",
    family: "亲子",
    fuji: "富士山",
    village: "村落",
    lake: "湖",
    cycling: "骑行",
    nightlife: "夜生活",
    "temple stay": "寺宿",
    pilgrimage: "巡礼",
    unique: "独特",
    mythology: "神话",
    museums: "美术馆",
    shrine: "神社",
    photo: "摄影",
    valley: "溪谷",
    art: "艺术",
    islands: "岛屿",
    river: "河流",
    gateway: "门户",
    ceramics: "陶瓷",
    harbor: "港口",
    volcano: "火山",
    gorge: "峡谷",
    beach: "海滩",
    diving: "潜水",
  },
  ko: {
    nature: "자연",
    snow: "눈",
    flowers: "꽃",
    spring: "봄",
    castle: "성",
    festival: "축제",
    heritage: "유산",
    temples: "사찰",
    slow: "느린 여행",
    coast: "해안",
    seafood: "해산물",
    views: "전망",
    history: "역사",
    "old town": "옛 거리",
    temple: "사찰",
    hiking: "하이킹",
    food: "음식",
    autumn: "가을",
    shrines: "신사",
    onsen: "온천",
    winter: "겨울",
    "day trip": "당일치기",
    airport: "공항",
    city: "도시",
    "first trip": "첫 여행",
    island: "섬",
    mountains: "산",
    scenery: "풍경",
    gardens: "정원",
    crafts: "공예",
    museum: "박물관",
    family: "가족",
    fuji: "후지산",
    village: "마을",
    lake: "호수",
    cycling: "자전거",
    nightlife: "밤 문화",
    "temple stay": "사찰 숙박",
    pilgrimage: "순례",
    unique: "특별함",
    mythology: "신화",
    museums: "미술관",
    shrine: "신사",
    photo: "사진",
    valley: "계곡",
    art: "아트",
    islands: "섬",
    river: "강",
    gateway: "관문",
    ceramics: "도자기",
    harbor: "항구",
    volcano: "화산",
    gorge: "협곡",
    beach: "해변",
    diving: "다이빙",
  },
  fr: {
    nature: "nature",
    snow: "neige",
    flowers: "fleurs",
    spring: "printemps",
    castle: "château",
    festival: "festival",
    heritage: "patrimoine",
    temples: "temples",
    slow: "voyage lent",
    coast: "côte",
    seafood: "fruits de mer",
    views: "vues",
    history: "histoire",
    "old town": "vieille ville",
    temple: "temple",
    hiking: "randonnée",
    food: "gastronomie",
    autumn: "automne",
    shrines: "sanctuaires",
    onsen: "onsen",
    winter: "hiver",
    "day trip": "excursion",
    airport: "aéroport",
    city: "ville",
    "first trip": "premier voyage",
    island: "île",
    mountains: "montagnes",
    scenery: "paysages",
    gardens: "jardins",
    crafts: "artisanat",
    museum: "musée",
    family: "famille",
    fuji: "Fuji",
    village: "village",
    lake: "lac",
    cycling: "vélo",
    nightlife: "vie nocturne",
    "temple stay": "nuit au temple",
    pilgrimage: "pèlerinage",
    unique: "unique",
    mythology: "mythologie",
    museums: "musées",
    shrine: "sanctuaire",
    photo: "photo",
    valley: "vallée",
    art: "art",
    islands: "îles",
    river: "rivière",
    gateway: "porte d'entrée",
    ceramics: "céramique",
    harbor: "port",
    volcano: "volcan",
    gorge: "gorge",
    beach: "plage",
    diving: "plongée",
  },
  it: {
    nature: "natura",
    snow: "neve",
    flowers: "fiori",
    spring: "primavera",
    castle: "castello",
    festival: "festival",
    heritage: "patrimonio",
    temples: "templi",
    slow: "viaggio lento",
    coast: "costa",
    seafood: "pesce",
    views: "panorami",
    history: "storia",
    "old town": "centro storico",
    temple: "tempio",
    hiking: "escursioni",
    food: "cibo",
    autumn: "autunno",
    shrines: "santuari",
    onsen: "onsen",
    winter: "inverno",
    "day trip": "gita giornaliera",
    airport: "aeroporto",
    city: "città",
    "first trip": "primo viaggio",
    island: "isola",
    mountains: "montagne",
    scenery: "paesaggi",
    gardens: "giardini",
    crafts: "artigianato",
    museum: "museo",
    family: "famiglia",
    fuji: "Fuji",
    village: "villaggio",
    lake: "lago",
    cycling: "ciclismo",
    nightlife: "vita notturna",
    "temple stay": "soggiorno al tempio",
    pilgrimage: "pellegrinaggio",
    unique: "unico",
    mythology: "mitologia",
    museums: "musei",
    shrine: "santuario",
    photo: "foto",
    valley: "valle",
    art: "arte",
    islands: "isole",
    river: "fiume",
    gateway: "porta d'accesso",
    ceramics: "ceramica",
    harbor: "porto",
    volcano: "vulcano",
    gorge: "gola",
    beach: "spiaggia",
    diving: "immersioni",
  },
};

const grid = document.querySelector("#prefectureGrid");
const count = document.querySelector("#resultCount");
const search = document.querySelector("#prefectureSearch");
const regionButtons = document.querySelectorAll(".region-button");
const languageSelect = document.querySelector("#languageSelect");
let activeRegion = "all";
let currentLanguage = "en";
let lastSelectedLanguage = "en";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function labelRegion(region) {
  return regionLabels[currentLanguage][region] || regionLabels.en[region] || region;
}

function labelTag(tag) {
  return tagLabels[currentLanguage]?.[tag] || tag;
}

function localPitch(englishPitch, spot, tags) {
  if (currentLanguage === "en") return englishPitch;

  const shownTags = tags.map(labelTag).join(" / ");
  const formats = {
    ja: `${spot}。${t("cardIntro")} ${shownTags}。`,
    zh: `${spot}。${t("cardIntro")} ${shownTags}。`,
    ko: `${spot}. ${t("cardIntro")} ${shownTags}.`,
    fr: `${spot}. ${t("cardIntro")} ${shownTags}.`,
    it: `${spot}. ${t("cardIntro")} ${shownTags}.`,
  };

  return formats[currentLanguage];
}

function updateStaticText() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("brand");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t(key);

    if (element.classList.contains("brand")) {
      element.lastChild.textContent = ` ${value}`;
    } else {
      element.textContent = value;
    }
  });
  search.placeholder = t("searchPlaceholder");
  regionButtons.forEach((button) => {
    button.textContent = labelRegion(button.dataset.region);
  });
}

function renderPrefectures() {
  const query = search.value.trim().toLowerCase();
  const filtered = prefectures.filter(([name, region, spot, pitch, tags]) => {
    const regionMatch = activeRegion === "all" || region === activeRegion;
    const searchableText = [
      name,
      labelRegion(region),
      regionLabels.en[region],
      spot,
      pitch,
      ...tags,
      ...tags.map(labelTag),
    ]
      .join(" ")
      .toLowerCase();
    return regionMatch && (!query || searchableText.includes(query));
  });

  count.textContent = `${filtered.length} ${filtered.length === 1 ? t("countSingular") : t("countPlural")}`;
  grid.innerHTML = filtered
    .map(
      ([name, region, spot, pitch, tags]) => `
        <article class="prefecture-card">
          <span class="prefecture-region">${labelRegion(region)}</span>
          <h3>${name}</h3>
          <p class="prefecture-spot">${spot}</p>
          <p>${localPitch(pitch, spot, tags)}</p>
          <div class="prefecture-tags">
            ${tags.map((tag) => `<span>${labelTag(tag)}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function changeLanguage() {
  currentLanguage = languageSelect.value;
  lastSelectedLanguage = currentLanguage;
  updateStaticText();
  renderPrefectures();
}

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeRegion = button.dataset.region;
    regionButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPrefectures();
  });
});

search.addEventListener("input", renderPrefectures);
languageSelect.addEventListener("change", changeLanguage);
languageSelect.addEventListener("input", changeLanguage);
setInterval(() => {
  if (languageSelect.value !== lastSelectedLanguage) {
    changeLanguage();
  }
}, 150);

updateStaticText();
renderPrefectures();
