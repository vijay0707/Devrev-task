import React from "react";

const BookCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-text">
          <h3>{props.title}</h3>
          <h5>{props.author}</h5>
          <p>Year: {props.year}</p>
          <p>Pages: {props.pages}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
