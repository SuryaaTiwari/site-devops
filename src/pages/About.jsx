import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px', color: '#2c3e50' }}>About DevOps Tutorials</h1>
      <p style={{ color: '#666', marginBottom: '40px', fontSize: '18px' }}>
        Learn DevOps from practical experience and real-world scenarios
      </p>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate DevOps Engineer with 1+ year of experience in containerization, cloud platforms,
          and infrastructure automation. I created this platform to share my knowledge and help aspiring DevOps
          engineers learn practical skills through real-world examples.
        </p>
        <p>
          My journey in DevOps started with Docker and Kubernetes, and I've since expanded my expertise to
          include CI/CD pipelines, Infrastructure as Code, cloud platforms (AWS), monitoring, and security best practices.
        </p>
      </div>

      <div className="about-section">
        <h2>My Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🐳</div>
            <strong>Docker</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Containerization</p>
          </div>
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>☸️</div>
            <strong>Kubernetes</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Orchestration</p>
          </div>
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🔄</div>
            <strong>CI/CD</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Automation</p>
          </div>
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🏗️</div>
            <strong>Terraform</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>IaC</p>
          </div>
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>☁️</div>
            <strong>AWS</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Cloud Platforms</p>
          </div>
          <div className="skill-item">
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>📊</div>
            <strong>Monitoring</strong>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Prometheus, Grafana</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Mission</h2>
        <p>
          My mission is to make DevOps accessible to everyone. Whether you're just starting your DevOps journey
          or looking to deepen your expertise, you'll find practical, easy-to-follow tutorials here.
        </p>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '8px',
        marginTop: '40px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Ready to Learn?</h3>
        <p style={{ marginBottom: '20px', opacity: 0.9 }}>
          Start your DevOps journey today with practical tutorials
        </p>
        <Link to="/blog" className="btn" style={{ color: '#667eea' }}>
          Explore Tutorials
        </Link>
      </div>
    </div>
  );
}
