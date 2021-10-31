import React from 'react';
import { useForm } from "react-hook-form";
import Destinations from '../Destinations/Destinations';
import Reviews from '../Reviews/Reviews';
import TourSpots from '../TourSpots/TourSpots';
import './Home.css'
const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="header-bg">
                <h1 className="text-white fw-bold">Find your next stay</h1>
                <h4 className="text-white fw-bold">Search deals on hotels, homes, and much more...</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("TourBooking", { required: true, maxLength: 20 })} placeholder="where are you ? " />
                    <input {...register("Check Out")} placeholder="Check in or Check Out ? " />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder=" Child" />
                    <button> Search</button>
                </form>
            </div>

            <div className="text-dark py-5">
                <div className="destination-text py-5">
                    <h2>Featured Destinations</h2>
                    <h5>let's explore the world</h5>
                </div>
                <Destinations></Destinations>
            </div>
            <div className="text-dark py-5">
                <div className="destination-text py-5">
                    <h2>Explore Bangladesh</h2>
                    <h5>These popular destinations have a lot to offer </h5>
                    <TourSpots></TourSpots>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">

                        <h2>People Say About Our  <span className="primay-custom-color-text"> Company</span> </h2>
                    </div>
                    <div className="col-lg-8">
                        <Reviews></Reviews>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;