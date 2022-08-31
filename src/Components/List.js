import React from "react";
import CardComponent from "./CardComponent";

function List({ films, caracter, rate }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {films
        .filter(
          (elt) =>
            elt.title.toLowerCase().includes(caracter.toLowerCase()) &&
            elt.rate >= rate
        )
        .map((elt) => (
          <CardComponent key={elt.id} movie={elt} />
        ))}
    </div>
  );
}

export default List;
