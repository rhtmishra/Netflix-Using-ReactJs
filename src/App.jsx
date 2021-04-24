import React from "react";
import Card from "./Card";
import Sdata from "./Sdata.jsx";
import "./index.css";

function ncard(cvalue) {
  return (
    <Card
      key={cvalue.id}
      image={cvalue.image}
      category={cvalue.category}
      title={cvalue.title}
      link={cvalue.link}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="heading">Top Netflix Webseries</h1>
      <div className="flex">{Sdata.map(ncard)}</div>
    </>
  );
}

export default App;
