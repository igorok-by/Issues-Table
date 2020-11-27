import React, { useCallback, useState } from 'react'
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

  const handleCommentStartEdit = useCallback((commentId) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === commentId && issue.comment === DEFAULT_COMMENT
          ? { ...issue, comment: '' }
          : issue,
      ),
    )
  }, [])

  const handleCommentChange = useCallback((newComment, commentId) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) => {
        if (issue.id === commentId) {
          const updatedComment =
            newComment.trim() === DEFAULT_COMMENT || !newComment.trim()
              ? DEFAULT_COMMENT
              : newComment
          return { ...issue, comment: updatedComment }
        }

        return issue
      }),
    )
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage
            rowsData={issues}
            handleCommentStartEdit={handleCommentStartEdit}
            handleCommentChange={handleCommentChange}
          />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
