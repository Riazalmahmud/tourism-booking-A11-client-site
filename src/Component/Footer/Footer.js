import React from 'react';
import './Footer.css'
import brandlogo from '../../images/logo/brand-logov1.png'
const Footer = () => {
    return (
        <div className="primar-custom-color">
            <div className="container py-5">
                <div className="row footer-text">
                    <div className="col-lg-4 col-md-4 col-sm-6 col">
                        <img src={brandlogo} alt="" />
                        <p className=" text-white"><span className="fw-bold">Address:</span> Noakhali, Chitagong,Bangladesh</p>
                        <p className=" text-white"><span className="fw-bold">Email:</span> riazalmahmud041@gmail.com</p>
                        <p className="text-white"><span className="fw-bold">Phone:</span> 01812345678</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col me-auto">
                        <h4 className="text-white">Our Services</h4>
                        <li><a href="#">Just-In-Time Booking</a></li>
                        <li><a href="#">Time based service levels</a></li>
                        <li><a href="#">Warehousing</a></li>
                        <li><a href="#">Global stock transparency</a></li>
                        <li><a href="#">Transport consolidation</a></li>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col">
                        <h4 className="text-white">Industry Sectors</h4>
                        <li><a href="#">Electronics Industry</a></li>
                        <li><a href="#">Industrial  Manufacturing</a></li>
                        <li><a href="#">Semicon  Solar</a></li>
                        <li><a href="#">Oil  Gas Cargo</a></li>
                        <li><a href="#">Transport consolidation Energy</a></li>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col"></div>
                </div>
            </div>
            <p className="text-white fw-bold py-4">Copyright &copy; 2021 riazalmahmud </p>
        </div>
    );
};

export default Footer;