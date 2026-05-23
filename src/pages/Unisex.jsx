export default function Unisex({ addToCart }) {
  return (
    <div className="page">
      <h1>عطور يونيسكس</h1>

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
          <img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59b3f?q=80&w=800" />
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
          <img src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800" />
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