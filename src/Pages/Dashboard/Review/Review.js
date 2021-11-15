import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    return (
        <div className='container mb-5'>
            <div className="d-flex row my-3 g-4">
            {
                <div className="card my-card h-100  bg-light">
                <div className='p-2'>
                    {<i className="fs-1 text-danger fas fa-user-circle"></i>}
                </div>
                <div className="card-body">
                    <h6>{user.displayName}</h6>
                    <p className="text-danger">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </p>
                </div> 
                </div>
            }
            </div>
        </div>
    );
};

export default Review;