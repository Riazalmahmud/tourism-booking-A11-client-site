import React from 'react';
import './Destination.css';
import { Card } from 'react-bootstrap';
const Destination = (props) => {
  const { img, country } = props.destination
  console.log(props.destination)
  return (
    <div>
      <div className="container">
        <Card>
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body>
            <Card.Title>{country}</Card.Title>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default Destination;