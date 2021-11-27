import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='container py-5'>
            <div className='row container mx-auto'>
                <div className="col-md-4">
                    <h3>Resource</h3>
                    <p className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Helps</Link>
                    </p>
                    <p className="nav-item">
                        <Link as={Link} className="nav-link" aria-current="page" to="/">Terms and Conditions</Link>
                    </p>
                    <p className="nav-item">
                        <Link as={Link} className="nav-link" aria-current="page" to="/">Privacy Policy</Link>
                    </p>
                </div>
                <div className="col-md-4">
                    <h3>Company</h3>
                    <p className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/Service">Service</Link>
                    </p>
                    <p className="nav-item">
                        <Link as={Link} className="nav-link" aria-current="page" to="/about">About us</Link>
                    </p>
                    <p className="nav-item">
                        <Link as={Link} className="nav-link" aria-current="page" to="/doctors">Doctors</Link>
                    </p>

                </div>
                <div className="col-md-4">
                    <h3>Join A News Letter</h3>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                    <button className="btn btn-info w-100 text-white mt-3">SEND</button>
                </div>
            </div>
            <div className="row text-center">
                <strong>@ {new Date().getFullYear()} Tanver. All rights reserved.</strong>
            </div>
        </section>
    );
};

export default Footer;