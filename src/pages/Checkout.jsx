import { useState } from "react";



export default function Checkout({ cart }) {
  const [governorate, setGovernorate] = useState("");

  const egyptGovernorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "القليوبية",
    "الشرقية",
    "الدقهلية",
    "البحيرة",
    "الغربية",
    "المنوفية",
    "كفر الشيخ",
    "الفيوم",
    "بني سويف",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "الأقصر",
    "أسوان",
    "البحر الأحمر",
    "الوادي الجديد",
    "مطروح",
    "شمال سيناء",
    "جنوب سيناء",
    "الإسماعيلية",
    "السويس",
    "بورسعيد",
    "دمياط"
  ];

  return (
    <div className="checkout-page">

      <h1>إتمام الطلب</h1>

      <div className="cart-box">

  <h2>المنتجات المختارة</h2>

  {cart.length === 0 ? (
    <p>السلة فارغة</p>
  ) : (
    
  cart.map((item, index) => (

    <div key={index} className="cart-item">

      <h3>{item.name}</h3>

      <p>{item.price}</p>

    </div>

  ))

  )}



</div>

      <form className="checkout-form">

        <input type="text" placeholder="الاسم بالكامل" />

        <input type="text" placeholder="رقم الهاتف" />

        <select
          value={governorate}
          onChange={(e) => setGovernorate(e.target.value)}
        >
          <option value="">اختر المحافظة</option>

          {egyptGovernorates.map((gov, index) => (
            <option key={index} value={gov}>
              {gov}
            </option>
          ))}
        </select>

        <input type="text" placeholder="المدينة / المنطقة" />

        <input type="text" placeholder="اسم الشارع" />

        <textarea placeholder="تفاصيل العنوان"></textarea>

        <div className="payment-methods">

          <h3>طريقة الدفع</h3>

          <label>
            <input type="radio" name="payment" />
            فودافون كاش
          </label>

          <label>
            <input type="radio" name="payment" />
            انستا باي
          </label>

          <label>
            <input type="radio" name="payment" />
            الدفع عند الاستلام
          </label>

        </div>

        <button type="submit">
          تأكيد الطلب
        </button>
        

      </form>

    </div>
  );
}