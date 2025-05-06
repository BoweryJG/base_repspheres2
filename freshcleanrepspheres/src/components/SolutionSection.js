import React from 'react';
import '../index.css';

export default function SolutionSection() {
  return (
    <section className="solution-section section" id="solution">
      <div className="container">
        <h2 className="section-title">Give Your Sales Team an Unfair Advantage</h2>
        <span className="section-title-underline"></span>
        <p className="section-description" style={{textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem'}}>
          Give your team the power to move faster, personalize smarter, and close deals others miss—powered by psychological science and AI.
        </p>
        <div className="solution-cards">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Instant Buyer Insights</h3>
            <p className="card-content">Know exactly what motivates each prospect—no guesswork, just results.</p>
          </div>
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3 className="card-title">Personalization at Scale</h3>
            <p className="card-content">Deliver messaging that feels tailor-made, every time, automatically.</p>
          </div>
          <div className="card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">Seamless Automation</h3>
            <p className="card-content">Connect your tools, automate the busywork, and let your reps focus on selling.</p>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <a href="#schedule" className="cta-button hero-cta">Start Winning More Deals</a>
        </div>
      </div>
    </section>
  );
}
