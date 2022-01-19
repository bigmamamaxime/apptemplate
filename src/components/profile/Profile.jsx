import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../shared/global/provider/UserProvider"
import "./Profile.css"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser(false)
        navigate ('/')
    }

    return(
        <div className="profilewrapper">
            <img className="profileimg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayUsername">{authenticatedUser}</span>
            <div className="dropdownmenu">
                <a onClick={() => navigate("/settings")}>Settings</a>
                <a onClick={() => navigate("/profile")}>Profile</a>
                <hr />
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}