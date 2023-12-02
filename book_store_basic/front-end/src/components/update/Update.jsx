import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [book, setBook] = useState({title: '', desc: '', price: 0, image: ''});
  const {title, desc, price, image} = book

  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateBody = {
      title,
      desc,
      price,
      image
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/update/${id}`,
        updateBody
      );

      if (response.status === 200) {
        navigate("/home");
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
    }

    setBook({title: '', desc: '', price: 0, image: ''})
  };

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <div className="px-5 py-20 bg-gray-200">
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white p-8 shadow rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Update Book</h2>
        <div className="flex flex-col mt-4">
          <label for="title" className="mb-2 text-gray-700">Book Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="bg-gray-100 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label for="desc" className="mb-2 text-gray-700">Short Description:</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            className="bg-gray-100 border-gray-300 rounded-md p-2"
            rows="4"
          />
        </div>
        <div className="flex flex-row mt-4">
          <div className="flex flex-col basis-1/2">
            <label for="price" className="mb-2 text-gray-700">Price:</label>
            <input
              id="price"
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              className="bg-gray-100 border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col basis-1/2 ml-4">
            <label for="image" className="mb-2 text-gray-700">Image URL:</label>
            <input
              id="image"
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              className="bg-gray-100 border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 bg-red-500 text-white font-bold p-2 rounded-md w-32">
          Update
        </button>

        <button onClick={handleBack} className="mt-4 bg-blue-500 text-white font-bold p-2 rounded-md w-32 float-right">
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Update;
