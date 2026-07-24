import { useState } from "react";
import { playWelcomeSound } from "../utils/playWelcomeSound";

export default function WelcomeScreen({ onEnter }) {
  const [closing, setClosing] = useState(false);

  const handleEnter = () => {
    playWelcomeSound();
    setClosing(true);
    setTimeout(onEnter, 500);
  };

  return (
    <div className={`welcome-screen ${closing ? "closing" : ""}`}>
      <div className="stars"></div>
      <svg className="welcome-atom" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="0.6" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
      <h1>Basmachi</h1>
      <p>Click to enter</p>
      <button className="enter-btn" onClick={handleEnter}>Enter</button>
    </div>
  );
}
