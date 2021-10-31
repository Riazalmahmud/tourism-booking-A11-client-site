import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = (props) => {
    const [bookings, setBooking] = useState([])
    const { title, country } = props.booking



    const handaleDelete = id => {
        const url = `https://eerie-hollow-26937.herokuapp.com/booking/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                console.log(data)
            })

    }

    return (
        <div>
            <div className="container">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No-</th>
                            <th>image</th>
                            <th>title</th>
                            <th>country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src={props.booking.img} alt="" /></td>
                            <td>{title}</td>
                            <td>{country}</td>
                            <td> <Button variant="danger" onClick={() => handaleDelete(bookings._id)}>delete</Button> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrder;