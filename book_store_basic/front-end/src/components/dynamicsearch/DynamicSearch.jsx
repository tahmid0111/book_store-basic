import React, { useEffect, useState } from "react";

const DynamicSearch = (props) => {
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    useEffect(() => {
        
        props.onText(searchText)

    }, [searchText])

  return (
    <div className="px-10 pt-5 grid grid-cols-12">

        <div className="col-span-12 mx-auto">

            <h1 className="text-lg mb-3 font-semibold">Search your book</h1>

            <input 
            type="text" 
            value={searchText}
            onChange={handleChange}
            placeholder="search" 
            className="input input-bordered input-error w-[500px]" 
            />

        </div>

    </div>
  );
};

export default DynamicSearch;
