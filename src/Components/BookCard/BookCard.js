import React from "react";
import Card from "react-bootstrap/Card";

const BookCard = (props) => {
  return (
    // <div className="card" style={{ width: "18rem" }}>
    //   <img src={props.image} className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <div className="card-text">
    //       <h3>{props.title}</h3>
    //       <h5>{props.author}</h5>
    //       <p>Year: {props.year}</p>
    //       <p>Pages: {props.pages}</p>
    //     </div>
    //   </div>
    // </div>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <h5>{props.title}</h5>
        </Card.Title>
        <Card.Text>
          <p>
            <b>{props.author}</b>
          </p>
          <p>Year: {props.year}</p>
          <span className="text-end">Pages: {props.pages}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
