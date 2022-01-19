import "./NavigationBar.css";
import logotype from "../../shared/images/logotype.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";
import RoutingPath from "../../routers/RoutingPath";

export const NavigationBar = () => {
    const navigate = useNavigate();
    const [authenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser) 
        ? <div className="profile"> <Profile /> </div> 
        : <span onClick={() => navigate(RoutingPath.signInView)} className="signIn">Sign In!</span>
    }
    return (
        <div className='NavigationBarWrapper'>
            <img onClick={() => navigate(RoutingPath.homeView)}
                className="logotype" 
                src={logotype} 
                alt="Error..." />
            {displayUserIfAuthenticated()}
        </div>
    )
}