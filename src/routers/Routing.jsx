import { useEffect, useContext } from 'react'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SetttingsView'
import RoutingPath from './RoutingPath'


export const Routing = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }
    
    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])
    return (
        <Router>
            {props.children}
            <Routes>
                <Route path={RoutingPath.recipeView} element={ <RecipeView /> } />
                <Route path={RoutingPath.signInView} element={ <SignInView /> } />
                <Route path={RoutingPath.profileView} element={ <ProfileView />} />
                <Route path={RoutingPath.settingsView} element={ <SettingsView />} />
                <Route path={RoutingPath.homeView} element={ <HomeView /> } />
            </Routes>
        </Router>
    )
}