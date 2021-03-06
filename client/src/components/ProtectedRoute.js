import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.authReducer);
    if (!user) {
        return <Navigate to='/login'></Navigate>;
    }

    return children;
};

export default ProtectedRoute;
