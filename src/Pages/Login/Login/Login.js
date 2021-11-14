import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Login = () => {

    const [loginData, setLoginData] = useState([]);
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className='container col-12 col-md-5 mx-auto'>
            <h1 className='text-danger my-4'>Login Here</h1>

            <form onSubmit={handleLoginSubmit} className=''>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input onBlur={handleOnBlur} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                 <div className="mb-3 text-start">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handleOnBlur} name='password' type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" className="mb-3 mt-2 w-100 btn btn-primary">Login</button>
                <Link to='register'><p>New User? Please Register</p></Link>
            </form>

            {isLoading && (<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>)}

            {user?.email && (<div className="alert alert-primary" role="alert">Login Successfully!</div>)}

            {authError && (<div className="alert alert-danger" role="alert">{authError}</div>)}

            <div className='my-4 d-flex justify-content-center align-items-center'>
                <h3 className='text-danger me-5'>Also Signin</h3>
                <button className='btn btn-danger py-2' onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;