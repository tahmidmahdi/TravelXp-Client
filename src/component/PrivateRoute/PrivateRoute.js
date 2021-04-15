import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { emailContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(emailContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser || localStorage.getItem('key') ? (
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