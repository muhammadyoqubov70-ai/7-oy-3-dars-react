export default function Footer() {
  return (
    <footer className="inl-footer">
      <div className="inl-footer-top">
        <div className="inl-footer-col">
          <h4>Basmachi</h4>
          <p className="inl-footer-desc">
            Building fast, adaptive, and modern web experiences.
          </p>
        </div>
        <div className="inl-footer-col">
          <h4>Products</h4>
          <span>Plans</span>
          <span>Navigation</span>
          <span>Studio</span>
          <span>Data</span>
        </div>
        <div className="inl-footer-col">
          <h4>Resources</h4>
          <span>Industries</span>
          <span>Use Cases</span>
          <span>Webinars</span>
          <span>Events</span>
        </div>
        <div className="inl-footer-col">
          <h4>Support</h4>
          <span>Help</span>
          <span>Community</span>
          <span>Documentation</span>
          <span>Open Source</span>
        </div>
      </div>

      <div className="inl-footer-bottom">
        <p>© {new Date().getFullYear()} Basmachi. All rights reserved.</p>
        <div className="footer-socials">
          <a
            href="https://instagram.com/uygriy1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://t.me/uygriy1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.5 2.5L2 10.5l6 2.3 2.3 6.9 3.1-4 4.6 3.4L21.5 2.5zM8.9 13.6l9-6.6-7.3 7.9-.1 3.3-1.6-4.6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
