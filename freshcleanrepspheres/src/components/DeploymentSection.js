import React from 'react';
import '../index.css';

export default function DeploymentSection() {
  return (
    <section className="deployment-section section" id="deployment">
      <div className="container">
        <h2 className="section-title">Deployment Timeline</h2>
        <span className="section-title-underline"></span>
        <div className="deployment-timeline">
          <div className="deployment-item">
            <div className="deployment-marker">1</div>
            <div className="deployment-content">
              <span className="phase-tag">Weeks 1-2</span>
              <h3>Phase 1: Stack Audit & Trigger Mapping</h3>
              <p>We analyze your existing tools and map your ideal customer's psychological triggers.</p>
            </div>
          </div>
          <div className="deployment-item">
            <div className="deployment-marker">2</div>
            <div className="deployment-content">
              <span className="phase-tag">Weeks 3-4</span>
              <h3>Phase 2: Territory Intelligence Sync</h3>
              <p>We connect your data sources and begin enriching leads with psychological insights.</p>
            </div>
          </div>
          <div className="deployment-item">
            <div className="deployment-marker">3</div>
            <div className="deployment-content">
              <span className="phase-tag">Week 5</span>
              <h3>Phase 3: Content Engine Activation</h3>
              <p>Your custom messaging library goes live, with personalized communications ready for deployment.</p>
            </div>
          </div>
          <div className="deployment-item">
            <div className="deployment-marker">4</div>
            <div className="deployment-content">
              <span className="phase-tag">Week 6</span>
              <h3>Phase 4: Sales Coaching & Execution Loop</h3>
              <p>Your team receives training on the system and begins implementing trigger-based communications.</p>
            </div>
          </div>
          <div className="deployment-item">
            <div className="deployment-marker">5</div>
            <div className="deployment-content">
              <span className="phase-tag">Ongoing</span>
              <h3>Phase 5: Continuous Optimization</h3>
              <p>We monitor results, refine triggers, and continuously improve the system's effectiveness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
