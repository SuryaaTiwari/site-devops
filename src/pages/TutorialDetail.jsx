import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tutorials, categories } from '../data/tutorials';

export default function TutorialDetail() {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === parseInt(id));
  const category = categories.find(c => c.name === tutorial?.category);

  if (!tutorial) {
    return (
      <div className="container" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h1>Tutorial not found</h1>
        <Link to="/blog" className="btn" style={{ marginTop: '20px' }}>
          Back to Tutorials
        </Link>
      </div>
    );
  }

  const relatedTutorials = tutorials.filter(
    t => t.category === tutorial.category && t.id !== tutorial.id
  ).slice(0, 3);

  return (
    <div className="container">
      <div className="tutorial-detail">
        <div style={{ marginBottom: '20px' }}>
          <Link to="/blog" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to Tutorials
          </Link>
        </div>

        <h1>{tutorial.title}</h1>

        <div className="tutorial-meta-info">
          <span>
            <strong>Category:</strong> {category?.emoji} {tutorial.category}
          </span>
          <span>
            <strong>Difficulty:</strong> {tutorial.difficulty}
          </span>
          <span>
            <strong>Read Time:</strong> {tutorial.readTime} minutes
          </span>
          <span>
            <strong>Published:</strong> {new Date(tutorial.date).toLocaleDateString()}
          </span>
        </div>

        <div className="tutorial-content">
          {tutorial.content.split('\n').map((line, idx) => {
            if (line.startsWith('## ')) {
              return <h2 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#2c3e50' }}>
                {line.substring(3)}
              </h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={idx} style={{ marginTop: '20px', marginBottom: '10px', color: '#2c3e50' }}>
                {line.substring(4)}
              </h3>;
            } else if (line.startsWith('```')) {
              return null;
            } else if (line.trim() === '') {
              return <br key={idx} />;
            } else if (line.includes('```bash') || line.includes('```yaml') || line.includes('```hcl') || line.includes('```')) {
              return null;
            } else if (line.startsWith('- ')) {
              return <li key={idx} style={{ marginLeft: '20px', marginBottom: '8px' }}>
                {line.substring(2)}
              </li>;
            } else {
              return <p key={idx}>{line}</p>;
            }
          })}
        </div>

        <div style={{ marginTop: '20px' }}>
          {tutorial.content.includes('```') && (
            <div>
              <h3 style={{ marginTop: '30px', color: '#2c3e50' }}>Code Examples</h3>
              {tutorial.content.split('```').map((block, idx) => {
                if (idx % 2 === 1) {
                  return <div key={idx} className="code-block">{block.trim()}</div>;
                }
                return null;
              })}
            </div>
          )}
        </div>

        {relatedTutorials.length > 0 && (
          <div className="related-tutorials">
            <h2>Related Tutorials</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {relatedTutorials.map(related => (
                <Link
                  key={related.id}
                  to={`/tutorial/${related.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="card">
                    <div className="card-header" style={{ fontSize: '32px' }}>
                      {category?.emoji}
                    </div>
                    <div className="card-body">
                      <h3 style={{ fontSize: '16px' }}>{related.title}</h3>
                      <p style={{ fontSize: '13px' }}>{related.description}</p>
                      <div style={{ color: '#667eea', marginTop: '10px', fontSize: '12px' }}>
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
          <p style={{ marginBottom: '15px', color: '#666' }}>Found this tutorial helpful?</p>
          <button
            className="btn"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tutorial.title + ' - DevOps Tutorials')}`)}
          >
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
