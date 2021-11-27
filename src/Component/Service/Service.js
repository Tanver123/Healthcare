import React from 'react';
import DUMMY_SERVICE from '../../DUMMY_SERVICES.json';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    return (
        <section>
            <div className="p-5 text-center">
                <h2 className='text-secondary'>Services</h2>
                <strong><b className='text-info'>HOME</b> 	&nbsp;	&nbsp;	&nbsp; /	&nbsp;	&nbsp;	&nbsp;Services</strong>
            </div>
            <div className="row container mx-auto">
                {
                    DUMMY_SERVICE.map(service => <SingleService key={service.id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Service; <h1>This is service</h1>