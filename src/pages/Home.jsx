import { Palette, Zap, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>React App with Dark & Light Mode</h1>
          <p>A modern, fast, and adaptive interface built with Context API.</p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.15)" />
            <circle cx="100" cy="100" r="55" fill="rgba(255,255,255,0.25)" />
            <circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <Palette size={32} className="card-icon" />
          <h3>Adaptive Design</h3>
          <p>Instantly adapts to any color scheme using CSS variables.</p>
        </div>
        <div className="card">
          <Zap size={32} className="card-icon" />
          <h3>Fast Performance</h3>
          <p>Only CSS variables switch, no page reload required.</p>
        </div>
        <div className="card">
          <Shield size={32} className="card-icon" />
          <h3>Reliable Storage</h3>
          <p>Your chosen theme is saved in localStorage.</p>
        </div>
      </section>

      <section className="choose-us">
        <h2>Why Choose Us</h2>
        <div className="choose-list">
          <div className="choose-item">
            <CheckCircle size={24} className="choose-icon" />
            <p>Clean and simple component-based architecture</p>
          </div>
          <div className="choose-item">
            <CheckCircle size={24} className="choose-icon" />
            <p>Built with modern React Router v6</p>
          </div>
          <div className="choose-item">
            <CheckCircle size={24} className="choose-icon" />
            <p>Fully responsive across all devices</p>
          </div>
          <div className="choose-item">
            <CheckCircle size={24} className="choose-icon" />
            <p>Easy to extend with new pages and features</p>
          </div>
        </div>
      </section>
    </div>
  );
}
