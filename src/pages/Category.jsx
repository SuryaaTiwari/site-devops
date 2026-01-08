import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tutorials, categories } from '../data/tutorials';

export default function Category() {
  const { name } = useParams();
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
  const category = categories.find(c => c.name === categoryName);
  const categoryTutorials = tutorials.filter(t => t.category === categoryName);

  if (!category) {
    return (
      <div className="container" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h1>Category not found</h1>
        <Link to="/" className="btn" style={{ marginTop: '20px' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section style={{
        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
        color: 'white',
        padding: '60px 0'
      }}>
        <div className="container">
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>
            {category.emoji}
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '15px' }}>
            {category.name}
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            {category.description}
          </p>
          <p style={{ marginTop: '20px', opacity: 0.8 }}>
            {categoryTutorials.length} tutorials available
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
        {categoryTutorials.length > 0 ? (
          <div className="tutorials-container">
            {categoryTutorials.map(tutorial => (
              <Link
                key={tutorial.id}
                to={`/tutorial/${tutorial.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="tutorial-card">
                  <div className="tutorial-card-image">
                    {category.emoji}
                  </div>
                  <div className="tutorial-card-content">
                    <div style={{ marginBottom: '10px' }}>
                      <span className="badge">{tutorial.difficulty}</span>
                    </div>
                    <h3>{tutorial.title}</h3>
                    <p>{tutorial.description}</p>
                    <div className="tutorial-meta">
                      <span>📅 {new Date(tutorial.date).toLocaleDateString()}</span>
                      <span>⏱️ {tutorial.readTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
            <h3>No tutorials in this category yet</h3>
            <p>Check back soon for more content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
