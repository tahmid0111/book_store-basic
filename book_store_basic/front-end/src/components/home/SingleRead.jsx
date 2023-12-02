import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'

const SingleRead = () => {

    const [items, setItems] = useState({})

    const {title, subtitle: desc, price, image} = items

    const navigate = useNavigate()

    let {id} =useParams()
    
    useEffect(()=> {
        fetch(`https://api.itbook.store/1.0/books/${id}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    const handleClick = () => {
      navigate(-1)
    }

  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{desc}</p>
            <btn className="btn btn-accent cursor-default">{price}</btn>
            <button onClick={handleClick} className="btn btn-warning ml-10 px-10">Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleRead
