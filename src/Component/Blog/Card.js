import React, { useState } from "react";

const Card = (props) => {
  const [Modal, setModal] = useState(false);


  const togglemodel = () => {
    setModal(!Modal);
  };
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} onClick={togglemodel} />
        </div>

        <div className="category d_flex">
          <span>{props.date}</span>
        </div>
        <div className="title">
          <h2 onClick={togglemodel}>{props.title_one}</h2>
          <a href="#popup" className="arrow" onClick={togglemodel}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {Modal && (
        <div className="modal modal-blog">
          <div onClick={togglemodel} className="overlay">
            <div className="modal-content ">
              <div className="modal-img left">
                <img src={props.image} />
              </div>
              <div className="modal-text right">
                <span>{props.date}</span>
                <h1>{props.title_one}</h1>
                <p>{props.desc_one}</p>

                <h1>{props.title_two}</h1>
                <p>{props.desc_two}</p>

                <h1>{props.title_three}</h1>
                <p>{props.desc_three}</p>

                <button
                  className="close-modal btn_shadow"
                  onClick={togglemodel}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
