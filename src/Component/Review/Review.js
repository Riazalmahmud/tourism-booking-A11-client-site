import React from 'react';
import { Card, Carousel, Row } from 'react-bootstrap';
import './Review.css';
const Review = (props) => {
    const { img, description } = props.review
    console.log(props.review)
    return (
        <div>
            <div className="container">
                <Card className="review-img">
                    <img src={img} alt="" />
                    <Card.Body>
                        <p className="text-dark">
                            {description.slice(0, 200)}
                        </p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Review;
