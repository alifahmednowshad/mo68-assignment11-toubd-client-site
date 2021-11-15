import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'


const Navigation = () => {

    const {user, admin, logOut} = useAuth();

    return (
        <div className='my-navigation p-0 m-0'>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">  
                <div className="container">
                    <span className="navbar-brand fs-3 text-white">Buy Bicycle</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Services">Services</Link>
                            </li>
                            {
                                !admin?
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-white " data-bs-toggle="dropdown" role="button" aria-expanded="false" to="/Dashboard">Dashboard</Link>
                                    <ul className="dropdown-menu bg-danger ">
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/myOrder">My Orders</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/dashboard">Review</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/payment">Payment</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" onClick={logOut}  to="/home">Log Out</Link>
                                        </li>
                                    </ul>
                                </li>
                                :
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-white " data-bs-toggle="dropdown" role="button" aria-expanded="false" to="/admin">Admin</Link>
                                    <ul className="dropdown-menu bg-danger ">
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/manageOrder">Manage All Orders</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/addProduct">Add Product</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/manageProduct">Manage All Products</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/makeAdmin">Make Admin</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" onClick={logOut}  to="/home">Log Out</Link>
                                        </li>
                                    </ul>
                                </li>
                            
                            }
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
                            <li className="nav-item">
                                <span className="nav-link text-warning" >{user.displayName}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;