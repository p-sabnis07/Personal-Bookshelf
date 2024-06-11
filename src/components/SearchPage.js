import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async (q) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setResults(response.data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      searchBooks(value);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...storedBookshelf, book]));
  };

  return (
    <div className="search-page">
      <h2>Search for Books</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type book name..."
      />
      <div className="results">
        {results.map((book, index) => (
          <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
