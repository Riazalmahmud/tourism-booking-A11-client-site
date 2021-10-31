import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="container">
                <div className="place-order py-5">
                    <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header> <img className="placeOrder-photo" src={user.photoURL} alt="" /> </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <span className="tw-bold text-dark">Your Name :</span> {user.displayName} </ListGroup.Item>
                            <ListGroup.Item><span className="tw-bold text-dark">Your email :</span> {user.email}</ListGroup.Item>

                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;