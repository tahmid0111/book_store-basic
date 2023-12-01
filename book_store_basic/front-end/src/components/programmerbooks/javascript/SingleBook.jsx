import React from 'react'

const SingleBook = (props) => {

    const {title, subtitle: desc, isbn13, price, image} = props.book

  return (
    <div>
      <h1>{title}</h1>
      <h1>{desc}</h1>
      <h1>{price}</h1>
      <img src={image} alt="image" />
    </div>
  )
}

export default SingleBook
