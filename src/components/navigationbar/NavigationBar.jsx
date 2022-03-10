import "./NavigationBar.css";
import logotype from "../../shared/images/logotype.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";
import RoutingPath from "../../routers/RoutingPath";

export const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <div className='NavigationBarWrapper'>
            <img onClick={() => navigate(RoutingPath.homeView)}
                className="logotype" 
                src={logotype} 
                alt="Error..." />
        </div>
    )
}