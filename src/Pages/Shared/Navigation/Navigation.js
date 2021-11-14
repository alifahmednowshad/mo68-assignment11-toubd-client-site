import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {

    const {user, logOut} = useAuth();

    return (
        <div className='bg-info'>
            <nav className="navbar navbar-expand-lg navbar-light m-0 p-0 bg-danger">  
                <div className="container">
                    <span className="navbar-brand fs-3 m-0 p-1 text-white">Buy Bicycle</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/myBooking">My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-warning" >{user.displayName}</span>
                            </li>
                            {
                                user.email ?
                                <li className="nav-item">
                                    <Link className="nav-link text-white" onClick={logOut} to="/home">Log Out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;