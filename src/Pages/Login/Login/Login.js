import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Login = () => {

    const [loginData, setLoginData] = useState([]);
    const { user,loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className='container'>
            <div className='my-5'>
                <h1 className='text-danger'>Login Here</h1>
                <button className='btn btn-danger' onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>

            <form onSubmit={handleLoginSubmit} className='col-12 col-md-6 mx-auto'>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input onChange={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleOnChange} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="w-100 btn btn-primary">Login</button>
                <Link to='register'><p>New User? Please Register</p></Link>

                {isLoading && (<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>)}
                {user?.email && (<div className="alert alert-primary" role="alert">Login Successfully!</div>)}
                {authError && alert({authError})}
            </form>
        </div>
    );
};

export default Login;