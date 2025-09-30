import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Travel Website</h1>
        <p>Explore the best destinations, book accommodations, and enjoy your journey!</p>
      </header>
      <section className="home-content">
        <h2>Featured Posts</h2>
        <ul className="post-list">
          {data.map(post => (
            <li key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;