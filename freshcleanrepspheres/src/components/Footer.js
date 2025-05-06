import React from 'react';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-links">
          <a href="/blog.html" className="footer-link">Blog</a>
          <a href="/podcast.html" className="footer-link">Podcast</a>
          <a href="/dashboard/vault.html" className="footer-link">Intelligence Vault</a>
          <a href="/workspace.html" className="footer-link">Sphere OS</a>
          <a href="/privacy.html" className="footer-link">Privacy Policy</a>
          <a href="/terms.html" className="footer-link">Terms of Service</a>
        </div>
        <p className="copyright">© 2025 RepSpheres. All rights reserved.</p>
      </div>
    </footer>
  );
}
