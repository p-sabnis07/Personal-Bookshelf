import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      <div className="results">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
