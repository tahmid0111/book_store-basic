import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleRead = () => {
    const [items, setItems] = useState({})
    const {userName, Email} = items

    let {id} =useParams()
    useEffect(()=> {
        fetch(`http://localhost:8080/api/v1/readbyid/${id}`)
        .then(res => res.json())
        .then(data => setItems(data.data))
    }, [])
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{Email}</h1>
    </div>
  )
}

export default SingleRead
