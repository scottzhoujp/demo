const dishes = [
  {
    number: "01",
    name: "陈皮脆皮乳鸽",
    description: "二十年新会陈皮 · 龙眼木慢烤",
    price: "¥ 128",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    name: "黑松露焖饭",
    description: "云南野菌 · 东北五常米",
    price: "¥ 88",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    name: "茉莉烟熏桂鱼",
    description: "当日鲜桂鱼 · 横县茉莉花",
    price: "¥ 168",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    name: "花雕熟醉蟹",
    description: "三年陈花雕 · 当季膏蟹",
    price: "¥ 198",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    name: "青梅汁慢炖小排",
    description: "绍兴青梅 · 黑毛猪肋排",
    price: "¥ 108",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    name: "山笋腌笃鲜",
    description: "临安春笋 · 金华火腿",
    price: "¥ 98",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "07",
    name: "藤椒炙烤和牛",
    description: "谷饲和牛 · 汉源鲜藤椒",
    price: "¥ 238",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "08",
    name: "蟹粉豆腐",
    description: "手拆湖蟹粉 · 盐卤嫩豆腐",
    price: "¥ 118",
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "09",
    name: "荷香糯米鸡",
    description: "新荷叶 · 崇明散养鸡",
    price: "¥ 78",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "10",
    name: "酒酿清蒸鲥鱼",
    description: "古法酒酿 · 新鲜鲥鱼",
    price: "¥ 268",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "11",
    name: "龙井虾仁",
    description: "明前龙井 · 钱塘河虾仁",
    price: "¥ 138",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "12",
    name: "桂花酒酿圆子",
    description: "满觉陇桂花 · 手作糯米圆子",
    price: "¥ 48",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "13",
    name: "陈皮红豆沙",
    description: "十年陈皮 · 崇明大红袍赤豆",
    price: "¥ 42",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#home" aria-label="山禾餐厅首页">
            <span className="brand-mark">山禾</span>
            <span className="brand-en">SHAN HE</span>
          </a>

          <div className="nav-links">
            <a href="#menu">时令菜单</a>
            <a href="#story">关于山禾</a>
            <a href="#visit">到店</a>
          </div>

          <a className="nav-book" href="tel:02168081888">
            预订席位
          </a>
        </nav>

        <div className="hero-content shell">
          <p className="eyebrow light">MODERN CHINESE CUISINE · SHANGHAI</p>
          <h1>
            一席山野
            <br />
            <em>四时风味</em>
          </h1>
          <p className="hero-copy">
            取本味于山川，以当代手法重释江南餐桌。
            <br />
            每一季，都有恰逢其时的相遇。
          </p>
          <div className="hero-actions">
            <a className="button button-fill" href="#menu">
              探索本季菜单 <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link light-link" href="#story">
              认识山禾 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-side">
          <span>晚餐</span>
          <strong>17:30 — 22:30</strong>
        </div>
        <a className="scroll-hint" href="#menu" aria-label="向下浏览">
          <span>SCROLL TO DISCOVER</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="menu-section" id="menu">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">SEASONAL SELECTION</p>
              <h2>本季 · 山野入席</h2>
            </div>
            <p className="section-intro">
              跟随节气更迭，我们与小产区农人合作，
              <br />
              将此刻最鲜活的风物带上餐桌。
            </p>
          </div>

          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.name}>
                <div
                  className="dish-image"
                  style={{ backgroundImage: `url("${dish.image}")` }}
                  role="img"
                  aria-label={dish.name}
                >
                  <span>{dish.number}</span>
                </div>
                <div className="dish-info">
                  <div>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </div>
                  <strong>{dish.price}</strong>
                </div>
              </article>
            ))}
          </div>

          <a className="text-link menu-link" href="tel:02168081888">
            咨询完整菜单 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image" role="img" aria-label="山禾餐厅雅致用餐空间">
          <div className="seal">山<br />禾</div>
        </div>
        <div className="story-copy">
          <p className="eyebrow light">OUR PHILOSOPHY</p>
          <h2>
            山有馈赠
            <br />
            禾有时序
          </h2>
          <p>
            山禾相信，好的料理始于对自然的敬意。我们走访山林、湖泊与田野，
            寻找熟悉却常被忽略的中国风物；以克制的烹饪，留下食材本来的性格。
          </p>
          <p>
            在这里，一餐不只是味道，也是一段关于土地、季节与人的故事。
          </p>
          <a className="text-link light-link" href="#visit">
            了解我们的餐桌 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-card shell">
          <div className="visit-title">
            <p className="eyebrow">RESERVATIONS</p>
            <h2>今晚，留一席给你</h2>
          </div>
          <div className="visit-details">
            <div>
              <span>地址</span>
              <p>上海市静安区铜仁路 88 号<br />山禾里 2F</p>
            </div>
            <div>
              <span>营业时间</span>
              <p>周二至周日<br />17:30 — 22:30</p>
            </div>
            <div>
              <span>电话</span>
              <p>021 6808 1888<br />12:00 — 21:00</p>
            </div>
          </div>
          <a className="button button-dark" href="tel:02168081888">
            电话预订 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">山禾</span>
            <span className="brand-en">SHAN HE</span>
          </a>
          <p>山野之味 · 四时之鲜</p>
          <div>
            <a href="#menu">菜单</a>
            <a href="#story">关于</a>
            <a href="#visit">到店</a>
          </div>
        </div>
        <div className="shell copyright">
          <span>© 2026 SHAN HE RESTAURANT</span>
          <span>沪ICP备 2026080818号</span>
        </div>
      </footer>
    </main>
  );
}
