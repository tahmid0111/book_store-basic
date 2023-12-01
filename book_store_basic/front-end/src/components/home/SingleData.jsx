import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SingleData = (props) => {
    const {title, desc, price, image, _id} = props.item

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
    <div className='col-span-6'>

      <div className="card card-side shadow-xl bg-red-400 m-5">
        <figure><img src={image} alt="book" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{price}</button>
            <button className="btn btn-primary">Buy Now</button>
            {/* <button><Link to={`/readone/${_id}`}>Details</Link></button> */}


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
              
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
              </dialog>




            <button><Link to={`/update/${_id}`}>Update</Link></button>
            <button onClick={() => handleClick(_id)}>delete</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleData
