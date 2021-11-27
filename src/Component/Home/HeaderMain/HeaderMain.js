import React from 'react';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';

const HeaderMain = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={slider1} className="d-block w-100" style={{ height: "90vh", objectFit: 'cover' }} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="fw-bold">Dr. Beatrice Prior.</h1>
                        <p>Dr. Prior's Plastic Surgery Clinic Welcomes You!
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <button className="btn btn-info text-white me-2">FIND SERVICE</button>
                        <button className="btn btn-info text-white">READ MORE</button>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={slider2} className="d-block w-100" style={{ height: "90vh", objectFit: 'cover' }} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="fw-bold">Have an Access to a Health Professional at any time</h1>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <button className="btn btn-info text-white me-2">FIND SERVICE</button>
                        <button className="btn btn-info text-white">READ MORE</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" style={{ height: "90vh", objectFit: 'cover' }} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="fw-bold">Dr. Mark Bowman</h1>
                        <p>Dr. Mark Bowman's Dental Clinic Welcomes You!
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <button className="btn btn-info text-white me-2">FIND SERVICE</button>
                        <button className="btn btn-info text-white">READ MORE</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;