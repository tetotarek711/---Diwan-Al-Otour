import "./App.css";
function App() {
  return (
    <>
      <div className="hero">
        <div className="overlay">

          <nav className="navbar">
            <h2 className="logo">ديوان العطور - Diwan Al Otour</h2>

            <div className="links">
              <a href="#home">الرئيسية</a>
              <a href="#products">العطور</a>
              <a href="#about">من نحن</a>
              <a
                href="https://wa.me/201141376617"
                target="_blank"
              >
                واتساب
              </a>
            </div>
          </nav>

          <div className="content" id="home">
            <span>Luxury Collection</span>

            <h1>
              Discover The Art
              <br />
              Of Perfume
            </h1>

            <p>
              عطور فاخرة تجمع بين الأناقة والثبات والفخامة
              لتمنحك تجربة استثنائية لا تُنسى
            </p>

            <div className="buttons">

              <a href="#products">
                <button className="shop-btn">
                  تسوق الآن
                </button>
              </a>

              <a
                href="https://wa.me/201141376617"
                target="_blank"
              >
                <button className="contact-btn">
                  واتساب
                </button>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* المنتجات */}

      <section className="products" id="products">

        <h2>أفضل العطور</h2>

        <div className="products-grid">

          <div className="products-grid">

  <div className="card">
    <img
      src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"
      alt="رجالي"
    />

    <div className="card-content">
      <h3>عطور رجالي</h3>
      <p>أفضل العطور الرجالي الفاخرة</p>

      <a href="/men" className="btn">
        قسم الرجالي
      </a>
    </div>
  </div>

  <div className="card">
    <img
      src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
      alt="حريمي"
    />

    <div className="card-content">
      <h3>عطور حريمي</h3>
      <p>عطور ساحرة جذابة وفخمة</p>

      <a href="/women" className="btn">
        قسم الحريمي
      </a>
    </div>
  </div>

  <div className="card">
    <img
      src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop"
      alt="يونيسكس"
    />

    <div className="card-content">
      <h3>عطور يونيسكس</h3>
      <p>عطور تناسب الجميع بثبات رائع</p>

      <a href="/unisex" className="btn">
        قسم اليونيسكس
      </a>
    </div>
  </div>

</div>

        </div>

      </section>

      {/* من نحن */}

      <section className="about" id="about">

        <h2>من نحن</h2>

        <p>
          نحن متجر متخصص في تقديم العطور الفاخرة
          بأعلى جودة وثبات يدوم طويلاً.
          نسعى لتقديم تجربة مميزة تجمع بين الفخامة والأناقة.
        </p>

      </section>
    </>
  );
}

export default App;