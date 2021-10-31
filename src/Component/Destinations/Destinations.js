import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestination] = useState([])
    useEffect(() => {
        fetch('./fakedestination.json')
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    destinations.map(destination => <Destination
                        key={destination.id}
                        destination={destination}
                    ></Destination>)
                }
            </Row>
        </div>
    );
};

export default Destinations;