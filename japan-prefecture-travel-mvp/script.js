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
  hokkaido: "Hokkaido",
  tohoku: "Tohoku",
  kanto: "Kanto",
  chubu: "Chubu",
  kansai: "Kansai",
  chugoku: "Chugoku",
  shikoku: "Shikoku",
  kyushu: "Kyushu + Okinawa",
};

const grid = document.querySelector("#prefectureGrid");
const count = document.querySelector("#resultCount");
const search = document.querySelector("#prefectureSearch");
const regionButtons = document.querySelectorAll(".region-button");
let activeRegion = "all";

function renderPrefectures() {
  const query = search.value.trim().toLowerCase();
  const filtered = prefectures.filter(([name, region, spot, pitch, tags]) => {
    const regionMatch = activeRegion === "all" || region === activeRegion;
    const searchableText = [name, regionLabels[region], spot, pitch, ...tags].join(" ").toLowerCase();
    return regionMatch && (!query || searchableText.includes(query));
  });

  count.textContent = `${filtered.length} prefecture${filtered.length === 1 ? "" : "s"} shown`;
  grid.innerHTML = filtered
    .map(
      ([name, region, spot, pitch, tags]) => `
        <article class="prefecture-card">
          <span class="prefecture-region">${regionLabels[region]}</span>
          <h3>${name}</h3>
          <p class="prefecture-spot">${spot}</p>
          <p>${pitch}</p>
          <div class="prefecture-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
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
renderPrefectures();
