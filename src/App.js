import React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/authProvider";
import Admin from "./Pages/Admin/Admin/Admin";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/My Order/MyOrder";
import OrderPlace from "./Pages/Dashboard/OrderPlace/OrderPlace";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Navigation from "./Pages/Shared/Navigation/Navigation";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/orderPlace'>
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/orderPlace/:serviceId'>
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute exact path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
