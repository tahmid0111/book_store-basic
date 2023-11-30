import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SingleData = (props) => {
    const {userName, Email, _id} = props.item

    const handleClick = (_id) => {
        let id = _id
        axios.post(`http://localhost:8080/api/v1/deleteone/${id}`)
        .then(res => {
            if(res===200){
                return 'success'
              }else{
                return 'false'
              }
        })
    }

  return (
    <div>
      <h1>{userName}</h1>
      <h1>{Email}</h1>
      <Link to={`/readone/${_id}`}>Details</Link>
      <Link to={`/update/${_id}`}>Update</Link>
      <button onClick={() => handleClick(_id)}>delete</button>
    </div>
  )
}

export default SingleData
