import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path="/recipe" component={RecipeView} />
                <Route exact path="/signin" component={SignInView} />
                <Route component={HomeView} />
            </Routes>
        </Router>
    )
}