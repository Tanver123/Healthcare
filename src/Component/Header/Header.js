/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from '../../images/logo.png';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" width={150} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link as={Link} className="nav-link" aria-current="page" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link as={Link} className="nav-link" aria-current="page" to="/doctors">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link as={Link} className="nav-link" aria-current="page" to="/contact">Contacts us</Link>
                        </li>

                        <li className="nav-item">
                            <Link as={Link} className="nav-link" aria-current="page" to="/login">
                                {loggedInUser.email ? <p>{loggedInUser.name || loggedInUser.email} <button className="border-0 bg-info">Log Out</button></p> : <p>Login</p>}
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;