import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { issuesData } from '../../data'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import './App.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage rowsData={issuesData} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
