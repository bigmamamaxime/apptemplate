import React from "react";
import "./NavigationBar.css"
import logotype from "../../shared/images/logotype.svg"

export const NavigationBar = () => {
    return (
        <div className='NavigationBarWrapper'>
            <img src={logotype} alt="Error..." />
            <span>Sign In</span>
        </div>
    )
}