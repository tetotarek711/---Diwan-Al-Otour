import { useState } from "react";

export default function Unisex({ addToCart }) {

  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = (product) => {

    addToCart(product);

    setShowMsg(true);

    setTimeout(() => {
      setShowMsg(false);
    }, 2000);
  };

  return (
    <div className="page">

      <h1>عطور يونيسكس</h1>

      {showMsg && (
        <div className="toast">
          ✅ تم إضافة المنتج للسلة
        </div>
      )}

      <a href="/checkout" className="floating-cart">
        🛒
      </a>

      <div className="products-grid">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59b3f?q=80&w=800" />

          <div className="card-content">
            <h3>Magic Mood</h3>
            <p>يونيسكس فاخر</p>

            <button
              className="btn"
              onClick={() =>
                handleAdd({
                  name: "Magic Mood",
                  price: "1700 جنيه"
                })
              }
            >
              أضف للسلة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}