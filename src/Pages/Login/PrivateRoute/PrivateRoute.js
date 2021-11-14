import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { 
    return (
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )}

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;