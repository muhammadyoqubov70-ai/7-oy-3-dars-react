import { Link } from "react-router-dom";
import { Palette, Zap, Shield } from "lucide-react";
import { features } from "../data/features";

const icons = { Palette, Zap, Shield };

export default function Home() {
  return (
    <div className="inl-page">
      <section className="inl-hero">
        <span className="inl-badge">Explore what's new with Basmachi</span>
        <h1>Basmachi. GL JS</h1>
        <p>
          A networking library for building fast, real-time, and adaptive
          interfaces on the web — engineered for developers who care about
          performance.
        </p>
        <div className="inl-hero-btns">
          <button className="inl-btn-outline">Explore now</button>
        </div>
      </section>

      <section className="inl-split">
        <img
          className="inl-split-img"
          src="https://picsum.photos/seed/basmachi-design/700/500"
          alt="Design"
        />
        <div className="inl-split-text">
          <span className="inl-tag">Design without limits</span>
          <h2>Design</h2>
          <p>
            Style your interface with components, layouts, and themes, with
            hundreds of options and a powerful expression language — not only
            controlling all visual aspects but having the freedom to change
            them at any time dynamically.
          </p>
          <span className="inl-link">Learn more about design →</span>
        </div>
      </section>

      <section className="inl-split reverse">
        <img
          className="inl-split-img"
          src="https://picsum.photos/seed/basmachi-nav/700/500"
          alt="Navigation"
        />
        <div className="inl-split-text">
          <span className="inl-tag">Design without limits</span>
          <h2>Navigation</h2>
          <p>
            Basmachi provides powerful routing engines, accurate,
            traffic-powered load times, and intuitive turn-by-turn structure
            to help you build engaging, fast-loading pages.
          </p>
          <span className="inl-link">More about navigation →</span>
        </div>
      </section>

      <section className="inl-split">
        <img
          className="inl-split-img"
          src="https://picsum.photos/seed/basmachi-studio/700/500"
          alt="Studio"
        />
        <div className="inl-split-text">
          <span className="inl-tag">See what's inside our studio</span>
          <h2>Studio</h2>
          <p>
            Basmachi Studio is like Photoshop, for interfaces. We give
            developers control over everything from colors and fonts, to
            component structure and layout, down to every pixel.
          </p>
          <span className="inl-link">Know more about studio →</span>
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

      <section className="inl-testimonials">
        <span className="inl-tag center">Tell us what to explore</span>
        <h2>Testimonials</h2>
        <p className="inl-sub">
          Search and feedback is tied to everything we build — and underlies
          every app that helps people explore their world.
        </p>
        <div className="inl-test-row">
          {["Aziz", "Malika", "Sardor", "Nodira"].map((name) => (
            <div className="inl-test-card" key={name}>
              <div className="inl-test-top">
                <div className="inl-avatar">{name[0]}</div>
                <div>
                  <strong>{name}</strong>
                  <div className="inl-stars">★★★★★</div>
                </div>
              </div>
              <p>
                Global community proof that you can be a successful developer
                no matter where you live. Collaborate, network, and grow.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="inl-cta">
        <span className="inl-badge">You're good to go</span>
        <h2>Ready to Get Started</h2>
        <p>Create an account or talk to one of our experts.</p>
        <div className="inl-hero-btns">
          <button className="inl-btn-outline">Login</button>
          <button className="inl-btn-filled">Signup</button>
        </div>
      </section>
    </div>
  );
}
