import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(data => setPosts(data.data.children));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Reddit Posts from r/reactjs</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h2 className="post-title">{post.data.title}</h2>
            {post.data.selftext_html && (
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}
              ></div>
            )}
            {post.data.url && <a href={post.data.url} className="post-url" target="_blank" rel="noopener noreferrer">Read More</a>}
            <p className="post-score">Score: {post.data.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
