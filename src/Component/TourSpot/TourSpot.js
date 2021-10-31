import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";
const TourSpot = (props) => {
    const { img, description, country, price, title, _id } = props.tourSport
    console.log(props.tourSport)
    return (
        <div>
            <div className="container">
                <Card>
                    <Card.Img variant="top" className="img-fluid" src={img} />
                    <Card.Text>
                        {description.slice(0 - 150)}
                    </Card.Text>
                    <h6 className="text-dark">
                        {title}
                    </h6>
                    <Card.Body className="d-block">
                        <Card.Title>  <i className="fas fa-map-marker-alt mr-3"></i> {country}</Card.Title>
                        <Card.Title> booking fee ${price}</Card.Title>

                    </Card.Body>
                    <Link to={`/ManageAllOrders/${_id}`}><Button variant="warning" >booking now</Button></Link>

                </Card>
            </div>
        </div>
    );
};

export default TourSpot;
