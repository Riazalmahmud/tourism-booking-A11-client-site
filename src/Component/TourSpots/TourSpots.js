import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TourSpot from '../TourSpot/TourSpot';

const TourSpots = () => {
    const [tourSpots, setTourSpots] = useState([]);
    useEffect(() => {
        fetch('https://eerie-hollow-26937.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setTourSpots(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    tourSpots.map(tourSport => <TourSpot
                        key={tourSport.id}
                        tourSport={tourSport}
                    ></TourSpot>)
                }
            </Row>
        </div>
    );
};

export default TourSpots;