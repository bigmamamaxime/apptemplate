import { useEffect, useContext } from 'react'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SetttingsView'
import RoutingPath from './RoutingPath'


export const Routing = (children) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }

    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return authenticatedUser ? navigateToView : SignInView
    }

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }
    

    return (
        <Router>
            {children}
            <Routes>
                <Route path={RoutingPath.recipeView} element={ <RecipeView /> } />
                <Route path={RoutingPath.signInView} element={blockRouteIfAuthenticated(<SignInView/>)} />
                <Route path={RoutingPath.profileView} element={blockRouteIfNotAuthenticated(<ProfileView/>)} />
                <Route path={RoutingPath.settingsView} element={blockRouteIfNotAuthenticated(<SettingsView/>)} />
                <Route path={RoutingPath.homeView} element={ <HomeView /> } />
            </Routes>
        </Router>
    )
}