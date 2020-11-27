import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { issuesData, STATUSES, DEFAULT_COMMENT } from '../../data'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import './App.scss'

const App = () => {
  const rowsData = issuesData.map((issue) => ({
    ...issue,
    status: STATUSES[0],
    comment: DEFAULT_COMMENT,
  }))

  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage rowsData={rowsData} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
