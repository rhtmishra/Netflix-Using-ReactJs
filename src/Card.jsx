import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.image} alt="" />
          <div className="card_info">
            <span className="card_category">{props.category}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
