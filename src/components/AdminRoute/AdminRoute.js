import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = (props) => {
    const { user, loading, admin } = useAuth();
    console.log(user.email, admin);
    const { children, ...rest } = props;
    if (loading) {
        return <Spinner animation="border" size="lg" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default AdminRoute;
