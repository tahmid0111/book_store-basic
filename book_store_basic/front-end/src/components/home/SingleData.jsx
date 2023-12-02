import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleData = (props) => {
  const { title, desc, price, image, _id } = props.item;

  const handleClick = (_id) => {
    let id = _id;
    axios.post(`http://localhost:8080/api/v1/deleteone/${id}`).then((res) => {
      if (res === 200) {
        return "success";
      } else {
        return "false";
      }
    });
  };

  return (
    <div className="col-span-4">
      {/* // ==================main-card-start===================== */}
      <div className="card card-side shadow-xl bg-cyan-400 m-5">
        <figure>
          <img src={image} alt="book" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-warning cursor-default">{price}</button>

            {/* <button><Link to={`/readone/${_id}`}>Details</Link></button> */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* // ========================modal-start============================ */}
            <button
              className="btn px-10"
              onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}>
              Details
            </button>

            <dialog id={`my_modal_${_id}`} className="modal">
              <div className="modal-box p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                {/* // ========================card-start============================ */}
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src={image} alt="image" />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <p>{desc}</p>

                    <div className="card-actions justify-end pt-5">
                      <button className="btn btn-warning">
                        <Link to={`/update/${_id}`}>Update</Link>
                      </button>
                      <button
                        className="btn btn-accent"
                        onClick={() => handleClick(_id)}>
                        delete
                      </button>
                      <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* // ========================card-end============================ */}
              </div>
            </dialog>
            {/* // ========================modal-end============================ */}
          </div>
        </div>
      </div>

      {/* // ==================main-card-end=================== */}
    </div>
  );
};

export default SingleData;
