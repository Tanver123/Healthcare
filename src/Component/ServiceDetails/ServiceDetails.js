import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Tanver123/all-json-file/main/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const serviceDetails = service.find(item => item.title === serviceId)
    return (
        <div className="card shadow border-0 m-4 mx-auto" style={{ width: "22rem" }}>
            <img className="w-100 card-img-top" src={serviceDetails?.img} alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-bold">{serviceDetails?.title}</h5>
                <p className="card-text">{serviceDetails?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;