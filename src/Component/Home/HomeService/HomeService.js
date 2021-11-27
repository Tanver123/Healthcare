import React from 'react';
import DUMMY_SERVICE from '../../../DUMMY_SERVICES.json';
import SingleService from '../../SingleService/SingleService';

const HomeService = () => {
    return (
        <div className='row container mx-auto'>
            {
                DUMMY_SERVICE.slice(0, 6).map(service => <SingleService key={service.id} service={service} />)
            }
        </div>
    );
};

export default HomeService;