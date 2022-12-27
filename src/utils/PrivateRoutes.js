import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    let hasToken = false
    if(localStorage.getItem("TCP_JWT") != null){hasToken = true}
    
    let auth = {'hasToken': hasToken}
    return(
        auth.hasToken ? <Outlet/> : <Navigate to='login' />
    )
}

export default PrivateRoutes