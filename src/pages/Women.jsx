import { useState } from "react";

export default function Women({ addToCart }) {

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

      <h1>العطور الحريمي</h1>

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
          <img src="https://images.unsplash.com/photo-1615634262417-8f2c2c9f7b7d?q=80&w=800" />

          <div className="card-content">
            <h3>Rose Queen</h3>
            <p>عطر حريمي فاخر</p>

            <button
              className="btn"
              onClick={() =>
                handleAdd({
                  name: "Rose Queen",
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
  );
}