import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../shared/global/provider/UserProvider"
import "./Profile.css"
import RoutingPath from "../../routers/RoutingPath"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser(false)
        navigate (RoutingPath.homeView)
    }

    return(
        <div className="profilewrapper">
            <img className="profileimg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayUsername">{authenticatedUser}</span>
            <div className="dropdownmenu">
                <a onClick={() => navigate(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => navigate(RoutingPath.profileView)}>Profile</a>
                <hr />
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}