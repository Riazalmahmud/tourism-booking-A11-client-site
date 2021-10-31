import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [bookings, setBooking] = useState([])

    useEffect(() => {
        fetch('https://eerie-hollow-26937.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])



    return (
        <div>
            <h1>hello my orders page </h1>
            {
                bookings.map(booking => <MyOrder
                    key={booking._id}
                    booking={booking}
                ></MyOrder>)
            }
        </div>

    );
};

export default MyOrders;