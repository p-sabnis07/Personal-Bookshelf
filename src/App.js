import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Search</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
