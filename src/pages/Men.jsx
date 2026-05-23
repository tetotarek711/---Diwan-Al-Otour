import { useState } from "react";

export default function Men({ addToCart }) {

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

      <h1>العطور الرجالي</h1>

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

          <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800" />

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

          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800" />

          <div className="card-content">

            <h3>Dior Sauvage</h3>

            <p>ثبات وفخامة</p>

            <button
              className="btn"
              onClick={() =>
                handleAdd({
                  name: "Dior Sauvage",
                  price: "1800 جنيه"
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