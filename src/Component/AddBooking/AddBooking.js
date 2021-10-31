import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBooking.css';
const AddBooking = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post("https://eerie-hollow-26937.herokuapp.com/booking", data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('service booking successfully added')
                }
            })
        console.log(data)
    };
    return (
        <div>
            <div className="add-booking-service my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("displayName", { required: true, maxLength: 20 })} placeholder="your name " />
                    <textarea {...register("description")} placeholder=" write description " />
                    <input {...register("title")} placeholder=" title " />
                    <input {...register("country")} placeholder=" country " />
                    <input type="number" {...register("price")} placeholder=" price " />
                    <input {...register("img")} placeholder=" img url " />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddBooking;