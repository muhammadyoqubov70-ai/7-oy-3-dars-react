import { Link } from "react-router-dom";
import { Palette, Zap, Shield, CheckCircle } from "lucide-react";
import { features } from "../data/features";

const icons = { Palette, Zap, Shield };

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
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
        {features.map((feature) => {
          const Icon = icons[feature.icon];
          return (
            <Link to={`/feature/${feature.id}`} key={feature.id} className="card">
              <Icon size={32} className="card-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.short}</p>
              <span className="card-link">Learn more →</span>
            </Link>
          );
        })}
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
