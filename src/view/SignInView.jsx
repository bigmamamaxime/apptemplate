import { useState, useContext } from "react"
import { UserContext, UserProvider } from "../shared/global/provider/UserProvider"
import { useNavigate } from "react-router-dom"

export const SignInView = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState() 
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        navigate ('/')
    }

    return (
        <div>
            <h1>Please provide your username and password:</h1>
            <span>Username: </span><input onChange={event => setUsername(event.target.value)} /> <br />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} /> <br />
            <button onClick={() => login()}>LogIn</button>
        </div>
    )
}