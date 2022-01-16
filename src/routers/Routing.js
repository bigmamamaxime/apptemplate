import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/recipe" component={RecipeView} />
                <Route component={HomeView} />
            </Routes>
        </Router>
    )
}