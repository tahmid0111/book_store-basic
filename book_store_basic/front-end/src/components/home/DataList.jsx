import { useState, useEffect } from "react";
import SingleData from "./SingleData";
import { Link } from "react-router-dom";
import DynamicSearch from "../dynamicsearch/DynamicSearch";

const DataList = () => {
  const [datas, setDatas] = useState([]);
  const [filterDatas, setFilterdatas] = useState(datas);

  const handleNew = (todos) => {

    const todosLower = todos.toLowerCase();

    const newData = datas.filter((d) => {

      let dataName = d.title.toLowerCase();

      return dataName.includes(todosLower);

    });

    setFilterdatas(newData);
  }

    useEffect(() => {

      fetch("http://localhost:8080/api/v1/read")
        .then((res) => res.json())
        .then((result) => setDatas(result.data));

    }, [datas]);

    return (

      <div>
        <DynamicSearch onText={handleNew} />

        <div className="px-5 mx-auto grid grid-cols-12 pb-20">
          <div className="col-span-12 py-10">
            <h1 className="text-2xl border-l-[10px] border-red-500 pl-5 bg-orange-500 py-5">
              Your Favourate Books are here
            </h1>
          </div>

          <div className="col-span-12 mx-auto">
            <button className="btn btn-secondary">
              <Link to="/registration" className="text-2xl px-5">
                Add New Book
              </Link>
            </button>
          </div>
        </div>

        <div className="px-5 grid grid-cols-12">
            {filterDatas.length === 0 ? datas.map((item, i) => <SingleData key={i} item={item} />) :
            filterDatas.map((item, i) => <SingleData key={i} item={item} /> )}
          </div>

      </div>
    );
  };

export default DataList;
