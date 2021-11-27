import React from 'react';
import DUMMY_DOCTORS from '../../DUMMY_DOCTORS.json';

const Doctors = () => {
    return (
        <section className='container'>
            <div className="p-5 text-center">
                <h2 className='text-secondary'>Doctors</h2>
                <strong><b className='text-info'>HOME</b> 	&nbsp;	&nbsp;	&nbsp; /	&nbsp;	&nbsp;	&nbsp;Doctors</strong>
            </div>

            <div className="row">
                {
                    DUMMY_DOCTORS.map(doctor => (
                        <div className="col-md-4">
                            <div className="card shadow border-0 p-3 mb-5 bg-body rounded">
                                <img src={doctor.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><b>{doctor.name}</b></h5>
                                    <p>{doctor.info}</p>
                                    <p> &#9742; {doctor.number}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Doctors;