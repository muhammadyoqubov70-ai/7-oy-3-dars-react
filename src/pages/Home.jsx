import { Palette, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Dark & Light rejimli React loyiha</h1>
        <p>Context API yordamida yaratilgan zamonaviy, tez va moslashuvchan interfeys.</p>
        <button className="hero-btn">Boshlash</button>
      </section>

      <section className="cards">
        <div className="card">
          <Palette size={32} className="card-icon" />
          <h3>Moslashuvchan dizayn</h3>
          <p>CSS o'zgaruvchilar orqali istalgan rangga moslashadi.</p>
        </div>
        <div className="card">
          <Zap size={32} className="card-icon" />
          <h3>Tez ishlaydi</h3>
          <p>Faqat CSS variable almashadi, sahifa qayta yuklanmaydi.</p>
        </div>
        <div className="card">
          <Shield size={32} className="card-icon" />
          <h3>Ishonchli saqlash</h3>
          <p>Tanlangan rejim localStorage'da saqlanib qoladi.</p>
        </div>
      </section>
    </div>
  );
}
