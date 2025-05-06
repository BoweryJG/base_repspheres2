import React from 'react';
import '../index.css';

export default function TimelineSection() {
  return (
    <section className="timeline-section section" id="timeline">
      <div className="container">
        <h2 className="section-title">How RepSpheres Works</h2>
        <span className="section-title-underline"></span>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1</div>
            <div className="timeline-content card">
              <h3>Sphere Creation</h3>
              <p>Create a Sphere for any target, account, or opportunity—this becomes your workspace for focused intelligence and engagement.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content card">
              <h3>Data Ingestion & Enrichment</h3>
              <p>Automatically pull in and enrich data from your CRM, web, email, and other connected sources.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content card">
              <h3>Psychological Trigger Mapping</h3>
              <p><strong>RepSpheres</strong> analyzes all available data to identify the psychological motivators and triggers most likely to drive action—leveraging a library of 150+ behavioral science principles.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content card">
              <h3>Automated Playbooks & Messaging</h3>
              <p>Launch automations or receive suggested actions—personalized messaging, outreach, or tasks—algorithmically aligned to each target's unique psychological fingerprint.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">5</div>
            <div className="timeline-content card">
              <h3>Feedback & Optimization</h3>
              <p>Results and engagement data flow back into the Sphere, powering continuous learning and smarter future actions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
