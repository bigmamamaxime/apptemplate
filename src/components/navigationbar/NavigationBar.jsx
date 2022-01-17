import React from "react";
import "./NavigationBar.css";
import logotype from "../../shared/images/logotype.svg";
import {useNavigate} from "react-router-dom";

export const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <div className='NavigationBarWrapper'>
            <img onClick={() => navigate.push('/')}
            className="logotype" 
            src={logotype} 
            alt="Error..." />
            <span onClick={() => navigate.push('/signin')}
            className="signIn">Sign In</span>
        </div>
    )
}