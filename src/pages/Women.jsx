export default function Women({ addToCart }) {
  return (
    <div className="page">
      <h1>العطور الحريمي</h1>

      <a href="/checkout" className="floating-cart">
      🛒
      </a>

      {showMsg && (
      <div className="toast">
      ✅ تم إضافة المنتج للسلة
      </div>
      )}

      <div className="products-grid">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1615634262417-8f2c2c9f7b7d?q=80&w=800" />
          <div className="card-content">
            <h3>Chanel No 5</h3>
            <p>عطر رجالي فاخر</p>

            <button
              className="btn"
              onClick={() =>
  handleAdd({
    name: "Chanel No 5",
    price: "1500 جنيه"
  })
}
              
            >
              أضف للسلة
            </button>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800" />
          <div className="card-content">
            <h3>Chanel No 5</h3>
            <p>عطر رجالي فاخر</p>

            <button
              className="btn"
              onClick={() =>
  handleAdd({
    name: "Chanel No 5",
    price: "1500 جنيه"
  })
}
              
            >
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}