import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../My Order/MyOrder';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Dashboard = () => {
    const {user, logOut} = useAuth();
    let { path, url } = useRouteMatch();
    
    return (
        <div className='container-fluid p-0'>
            <div className='row'>
            <div className='col-12 col-md-3 bg-info my-dashboard p-0 border-0 accordion-item'>
                <Link to='/services'>Dashboard</Link>
                <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                <Link to={`${url}/addService`}>Add item</Link>
                <h2>Dashboard</h2>
                <h6>{user.displayName}</h6>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        My Order
                    </button>
                </h2>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Review
                    </button>
                </h2>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Payment
                    </button>
                </h2>
                <Link className="nav-link text-white" onClick={logOut} to="/home">Log Out</Link>
            </div>
            <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:makeAdmin`}>
          <Topic />
        </Route>
      </Switch>
            <div className="col-12 col-md-8 p-0 accordion" id="accordionExample">
                {/* <div className="col-12 col-md-3 p-0 ">

                </div> */}
                <div className="p-0">
                    <div>
                    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-0">
                            <MyOrder></MyOrder>
                        </div>
                    </div>
                    </div >
                    <div>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <MyOrder></MyOrder>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-0 my-5 pt-5">
                                <h3>Payment methood will be comming soon....</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;