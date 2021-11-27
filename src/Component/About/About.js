import React from 'react';
import aboutUs from '../../images/aboutUs1.jpg'
import aboutUs2 from '../../images/aboutUs2.jpg'
import aboutUs3 from '../../images/surgery.jpg'


const About = () => {
    return (
        <section>
            <div className="p-5 text-center">
                <h2 className='text-secondary'>About Us</h2>
                <strong><b className='text-info'>HOME</b> 	&nbsp;	&nbsp;	&nbsp; /	&nbsp;	&nbsp;	&nbsp;About Us</strong>
            </div>

            <div className="row container mx-auto">
                <div className="col-md-6">
                    <img className="w-100" src={aboutUs} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>We Provide The Best Service On The Hole World</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-info text-center">Meet Our Team</p>
                <h1 className="text-dark text-center">Our Creative Team</h1>

            </div>
            <div className="row container mx-auto mt-5">
                <div className="col-md-6">
                    <h4 className="text-center fw-bold">Management Team</h4>
                    <img className="w-100" src={aboutUs2} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-center fw-bold">Surgary Team</h4>
                    <img className="w-100" src={aboutUs3} alt="" />
                </div>
            </div>

        </section>
    );
};

export default About; <h1>About Us</h1>