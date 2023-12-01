import React from 'react'

const SingleBook = (props) => {

    const {title, subtitle: desc, isbn13, price, image} = props.book

  return (
    <div className='col-span-4 my-10'>

    <div className="card w-96 shadow-xl bg-pink-200">
      <figure><img src={image} alt="dream books" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">{price}</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SingleBook
