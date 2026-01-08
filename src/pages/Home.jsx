import React from 'react';
import { Link } from 'react-router-dom';
import { categories, tutorials } from '../data/tutorials';

export default function Home() {
  const featuredTutorials = tutorials.slice(0, 6);

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>DevOps Tutorials</h1>
          <p>Master Docker, Kubernetes, CI/CD, and more with practical tutorials</p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog" className="btn">
              Explore Tutorials
            </Link>
            <button className="btn btn-secondary" style={{ background: 'transparent', borderColor: 'white' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center', color: '#2c3e50' }}>
          Explore Categories
        </h2>
        <div className="cards-grid">
          {categories.map(category => (
            <Link key={category.id} to={`/category/${category.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-header">{category.emoji}</div>
                <div className="card-body">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div style={{ color: '#667eea', fontWeight: 'bold', marginTop: '10px' }}>
                    View Tutorials →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center', color: '#2c3e50' }}>
          Featured Tutorials
        </h2>
        <div className="tutorials-container">
          {featuredTutorials.map(tutorial => (
            <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="tutorial-card">
                <div className="tutorial-card-image">
                  {categories.find(c => c.name === tutorial.category)?.emoji}
                </div>
                <div className="tutorial-card-content">
                  <div style={{ marginBottom: '10px' }}>
                    <span className="badge">{tutorial.category}</span>
                  </div>
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.description}</p>
                  <div className="tutorial-meta">
                    <span>📅 {new Date(tutorial.date).toLocaleDateString()}</span>
                    <span>⏱️ {tutorial.readTime} min</span>
                    <span>📚 {tutorial.difficulty}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '60px 0', marginBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Ready to Learn DevOps?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>
            Start your DevOps journey with hundreds of tutorials and practical examples
          </p>
          <Link to="/contact" className="btn" style={{ color: '#667eea' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
