import React, { useEffect } from 'react';
import './StarryBackground.css';

const STAR_COUNT = 120;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function StarryBackground() {
  useEffect(() => {
    const container = document.getElementById('starry-bg');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${randomBetween(0, 100)}vw`;
      star.style.top = `${randomBetween(0, 100)}vh`;
      star.style.width = `${randomBetween(1, 3)}px`;
      star.style.height = star.style.width;
      star.style.opacity = 0.2 + Math.random() * 0.6;
      star.style.setProperty('--twinkle-duration', `${randomBetween(2, 5)}s`);
      star.style.setProperty('--twinkle-delay', `${randomBetween(0, 4)}s`);
      container.appendChild(star);
    }
  }, []);

  return <div id="starry-bg" className="starry-background" />;
}
