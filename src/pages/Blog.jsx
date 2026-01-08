import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { tutorials, categories } from '../data/tutorials';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filtered = useMemo(() => {
    return tutorials.filter(tutorial => {
      const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || tutorial.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container">
      <div style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px', color: '#2c3e50' }}>All Tutorials</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Explore our comprehensive collection of DevOps tutorials and guides
        </p>

        <div className="filter-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filter">
            <button
              className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="tutorials-container">
          {filtered.length > 0 ? (
            filtered.map(tutorial => (
              <Link
                key={tutorial.id}
                to={`/tutorial/${tutorial.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
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
            ))
          ) : (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999'
            }}>
              <h3>No tutorials found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>
          <p>Showing {filtered.length} of {tutorials.length} tutorials</p>
        </div>
      </div>
    </div>
  );
}
