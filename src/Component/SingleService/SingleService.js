import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { title, img, description } = service;

    return (
        <div className="col-md-4">
            <div className="card shadow border-0 p-3 mb-5 bg-body rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><b>{title}</b></h5>
                    <p>{description.slice(0, 100)}</p>
                    <Link to={`/service/${title}`} className="btn btn-info text-white">SHOW MORE</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;