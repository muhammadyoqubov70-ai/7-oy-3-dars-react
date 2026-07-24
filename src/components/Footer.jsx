import { Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Basmachi. All rights reserved.</p>
      <div className="footer-socials">
        
          href="https://instagram.com/uygriy1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        
          href="https://t.me/uygriy1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Send size={20} />
        </a>
      </div>
    </footer>
  );
}
