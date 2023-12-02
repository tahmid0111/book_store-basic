import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import SingleBook from "../components/newbooks/SingleBook";
import DynamicSearch from "../components/dynamicsearch/DynamicSearch";

const New = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDatas, setFilterdatas] = useState(books);

  const handleNew = (todos) => {

    const todosLower = todos.toLowerCase();

    const newData = books.filter((d) => {

      let dataName = d.title.toLowerCase();

      return dataName.includes(todosLower);

    });

    setFilterdatas(newData);

  }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    // Show spinner
    setLoading(true);

    // Fetch data from API
    const response = await fetch("https://api.itbook.store/1.0/new");
    const data = await response.json();

    // Update books state
    setBooks(data.books);

    // Hide spinner
    setLoading(false);
  }

  return (
    <Layout>

      <DynamicSearch onText={handleNew} />

      {loading && (
        <div class="flex justify-center items-center h-screen">
          <span class="loading loading-dots loading-lg text-warning text-center"></span>
        </div>
      )}
      <div className="px-5 grid grid-cols-12">
        <div className="col-span-12 py-10">
          <h1 className="text-2xl border-l-[10px] border-red-500 pl-5 bg-pink-300 py-5">
            Check Our Latest Collections
          </h1>
        </div>

            {filterDatas.length === 0 ? books.map((item, i) => <SingleBook key={i} item={item} />) :
            filterDatas.map((item, i) => <SingleBook key={i} item={item} /> )}

      </div>
    </Layout>
  );
};

export default New;
