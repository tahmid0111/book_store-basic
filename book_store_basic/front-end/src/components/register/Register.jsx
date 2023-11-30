import { useState, useEffect } from 'react'
import axios from 'axios'

const Register = () => {
    const [todo, setTodo] = useState({username: '', email: ''})


    const handleChange = (e) => {
      setTodo({...todo, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      let myTodo = {
        userName: todo.username,
        Email: todo.email
      }
  
      axios.post('http://localhost:8080/api/v1/create', myTodo)
      .then(res => {
        if(res===200){
          return 'success'
        }else{
          return 'false'
        }
      })
      setTodo({username: '', email: ''})
    }
  return (
    <>

    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">User Name : </label>
          <input className='bg-gray-500 mb-4' type="text" name='username' value={todo.username} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="email">Email : </label>
          <input className='bg-gray-500 mb-4' type="text" name='email' value={todo.email} onChange={handleChange} required />
        </div>
        <div>
          <button className='btn btn-primary' type="submit">register</button>
        </div>
      </form>

    </>
  )
}

export default Register

