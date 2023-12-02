import React from 'react'
import { Link } from 'react-router-dom'

const SingleBook = (props) => {

    const {title, subtitle: desc, isbn13, price, image} = props.item

  return (
    <div className='col-span-4 my-10 mx-auto'>

    <div className="card w-96 shadow-xl bg-pink-200">

      <figure><img src={image} alt="dream books" /></figure>

      <div className="card-body">

        <h2 className="card-title">
          {title}

          <div className="badge badge-secondary">NEW</div>

        </h2>

        <p>{desc? desc : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam.</p>}</p>

        <div className="card-actions">

          <button className="btn btn-accent w-[37%] cursor-default">{price}</button>
          <button className="btn btn-primary w-[60%]">Add to Cart</button>

          <button className="btn btn-warning w-full mt-2">

            <Link to={`https://api.itbook.store/1.0/books/${isbn13}`} target="_blank">Open Book in New Tab</Link>

          </button>

        </div>

      </div>

    </div>

    </div>
  )
}

export default SingleBook
