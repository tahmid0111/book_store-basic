import React, { useState, useEffect } from 'react';
import SingleBook from './SingleBook';

const MongoDB = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    // Show spinner
    setLoading(true);

    // Fetch data from API
    const response = await fetch('https://api.itbook.store/1.0/search/javascript');
    const data = await response.json();

    // Update books state
    setBooks(data.books);


    // Hide spinner
    setLoading(false);
  }

  return (
    <>
      <div>

        {loading && <div class="flex justify-center items-center h-screen">
        <span class="loading loading-dots loading-lg text-warning text-center"></span>
        </div>}

        {
            books.map((item, i) => <SingleBook key={i} book={item} />)
        }

      </div>

    </>
  );
};

export default MongoDB;
