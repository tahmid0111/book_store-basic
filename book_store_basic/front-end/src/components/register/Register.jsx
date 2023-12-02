import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

const Register = () => {
    const [todo, setTodo] = useState({title: '', desc: '', price: 0, image: ''})
    const { title, desc, price, image} = todo


    const handleChange = (e) => {
      setTodo({...todo, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      let myTodo = {
        title,
        desc,
        price,
        image
      }
  
      axios.post('http://localhost:8080/api/v1/create', myTodo)
      .then(res => {
        if (res.status === 200) {
          return (toast("New Book Added!"))
        } else {
          return (toast.error('some error occured'))
        }
      })
      setTodo({title: '', desc: '', price: 0, image: ''})
    }
  return (
    <div className="px-5 py-20 bg-gray-200">
      <ToastContainer autoClose={2000} />
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white p-8 shadow rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Book</h2>
        <div className="flex flex-col mt-4">
          <label htmlFor="title" className="mb-2 text-gray-700">Book Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
            className="bg-gray-100 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="desc" className="mb-2 text-gray-700">Short Description:</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            required
            className="bg-gray-100 border-gray-300 rounded-md p-2"
            rows="4"
          />
        </div>
        <div className="flex flex-row mt-4">
          <div className="flex flex-col basis-1/2">
            <label htmlFor="price" className="mb-2 text-gray-700">Price:</label>
            <input
              id="price"
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              required
              className="bg-gray-100 border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col basis-1/2 ml-4">
            <label htmlFor="image" className="mb-2 text-gray-700">Image URL:</label>
            <input
              id="image"
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              required
              className="bg-gray-100 border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 bg-red-500 text-white font-bold p-2 rounded-md w-32">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default Register

