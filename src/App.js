import React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/authProvider";
import AddItem from "./Pages/Admin/AddItem/AddItem";
import Admin from "./Pages/Admin/Admin/Admin";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Admin/ManageAllOrders/ManageAllOrders";
import UpdateStatus from "./Pages/Admin/ManageAllOrders/UpdateStatus/UpdateStatus";
import ManageProduct from "./Pages/Admin/ManageProduct/ManageProduct";
import MyOrder from "./Pages/Dashboard/My Order/MyOrder";
import OrderPlace from "./Pages/Dashboard/OrderPlace/OrderPlace";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
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
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/payment'>
              <Payment></Payment>
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
            <PrivateRoute exact path='/manageOrder'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/orders/update/:id'>
              <UpdateStatus></UpdateStatus>
            </PrivateRoute>
            <PrivateRoute exact path='/addProduct'>
              <AddItem></AddItem>
            </PrivateRoute>
            <PrivateRoute exact path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute exact path='/manageProduct'>
              <ManageProduct></ManageProduct>
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
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
