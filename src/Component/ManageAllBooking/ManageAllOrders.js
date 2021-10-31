import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const ManageAllOrders = () => {
    const { bookingID } = useParams();
    const [booking, setBooking] = useState({})

    useEffect(() => {
        fetch(`https://eerie-hollow-26937.herokuapp.com/booking${bookingID}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div>
            <h1>this is booking {bookingID} </h1>
        </div>
    );
};

export default ManageAllOrders;
