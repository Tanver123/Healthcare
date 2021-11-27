import React from 'react';
import healthCare from "../../../images/healthcare.png"
import userIcon from "../../../images/man.png"
import infoBanner from "../../../images/infoBanner.jpg"

const Information = () => {
    return (
        <section >
            <div className="row container py-5 mx-auto">
                <div className="col-md-6">
                    <h1><b>Why Choose Docfind Clinic?</b></h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country.</p>
                    <div className="row">
                        <div className="col-md-2"><img className="w-100" src={healthCare} alt="" /></div>
                        <div className="col-md-10">
                            <h2>Quality Control System</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"><img className="w-100" src={userIcon} alt="" /></div>
                        <div className="col-md-10">
                            <h2>Highly Professional Staff</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img className="w-100" src={infoBanner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Information;