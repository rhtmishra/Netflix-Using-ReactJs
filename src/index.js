import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(
  <>
    <Card
      image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/23/903342-netflix-dark.jpg"
      category="A Netflix Original Series"
      title="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      image="https://i.pinimg.com/originals/51/b1/cd/51b1cdf92d3e3e57d8f2156aeea292a6.jpg"
      category="A Netflix Original Series"
      title="THE CROWN"
      link="https://www.netflix.com/in/title/80025678"
    />
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_.jpg"
      category="A Netflix Original Series"
      title="OZARK"
      link="https://www.netflix.com/in/title/80117552"
    />
    <Card
      imgsrc="https://cdn.onebauer.media/one/media/5d18/823d/2851/e25e/3066/1778/tcTjAGX9YPCMCrnXmbgXKKtECgh.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
      category="A Netflix Original Series"
      title="STRANGER THINGS"
      link="https://www.netflix.com/in/title/80057281"
    />
  </>,
  document.getElementById("root")
);