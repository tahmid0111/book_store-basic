import React, { useState, useEffect } from "react";
import CommonSingleBook from "../../commonsinglebook/CommonSingleBook";

const Java = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    // Show spinner
    setLoading(true);

    // Fetch data from API
    const response = await fetch("https://api.itbook.store/1.0/search/Java");
    const data = await response.json();

    // Update books state
    setBooks(data.books);

    // Hide spinner
    setLoading(false);
  }

  return (
    <>
      <div>
        {loading && (
          <div class="flex justify-center items-center h-screen">
            <span class="loading loading-dots loading-lg text-warning text-center"></span>
          </div>
        )}

        <div className="px-5 grid grid-cols-12">
          <div className="col-span-12 py-10">
            <h1 className="text-2xl border-l-[10px] border-red-500 pl-5 bg-green-400 py-5">
            Java Book Collection
            </h1>
          </div>

          {books.map((item, i) => (
            <CommonSingleBook key={i} book={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Java;
