import React from 'react';
import error from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;