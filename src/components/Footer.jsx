import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DevOps Tutorials</h3>
            <p>Learning DevOps made simple with practical tutorials and real-world examples.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Tutorials</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="/category/docker">Docker</a></li>
              <li><a href="/category/kubernetes">Kubernetes</a></li>
              <li><a href="/category/ci-cd">CI/CD</a></li>
              <li><a href="/category/aws">AWS</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:contact@devopstutorials.in">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} DevOps Tutorials. All rights reserved.</p>
          <p>Built with React + Vite | Containerized with Docker</p>
        </div>
      </div>
    </footer>
  );
}
