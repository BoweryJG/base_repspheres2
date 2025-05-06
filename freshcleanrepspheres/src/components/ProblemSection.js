import React from 'react';
import '../index.css';

export default function ProblemSection() {
  return (
    <section className="problem-section section" id="problem">
      <div className="container">
        <h2 className="section-title">What's Holding Elite Sales Teams Back?</h2>
        <span className="section-title-underline"></span>
        <p className="section-description" style={{textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem'}}>
          Even the best sales teams hit a wall—buried under disconnected tools, generic messaging, and missed opportunities. <strong>The real cost?</strong> Lost deals, wasted effort, and burnout.
        </p>
        <div className="problem-cards">
          <div className="card">
            <div className="card-icon">🧩</div>
            <h3 className="card-title">Fragmented Tools</h3>
            <p className="card-content">Juggling too many platforms leads to confusion, wasted time, and critical insights slipping through the cracks.</p>
          </div>
          <div className="card">
            <div className="card-icon">⏳</div>
            <h3 className="card-title">Momentum Killers</h3>
            <p className="card-content">Every context switch and manual step drains energy and slows down the path from insight to closed deal.</p>
          </div>
          <div className="card">
            <div className="card-icon">🗣️</div>
            <h3 className="card-title">One-Size-Fits-None</h3>
            <p className="card-content">Personalization is promised but rarely delivered—most outreach is bland, forgettable, and easy to ignore.</p>
          </div>
        </div>
        <p style={{textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem'}}>
          It's time to break through the plateau. <strong>RepSpheres</strong> unifies, personalizes, and accelerates every step.
        </p>
      </div>
    </section>
  );
}
