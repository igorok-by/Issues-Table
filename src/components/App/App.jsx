import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { issuesData, STATUSES, DEFAULT_COMMENT } from '../../data'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import './App.scss'

const App = () => {
  const [issues, setIssues] = useState(
    issuesData.map((issue) => ({
      ...issue,
      status: STATUSES[0],
      comment: DEFAULT_COMMENT,
      isDeleted: false,
    })),
  )

  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage rowsData={issues} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
