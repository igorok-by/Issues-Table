import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'

import PageHeader from '../PageHeader'
import LoginPage from '../LoginPage'
import StatisticsPage from '../StatisticsPage'
import HomePage from '../HomePage'
import './App.scss'

import { issuesData, STATUSES, DEFAULT_COMMENT, URL_PATHS } from '../../data'

const { HOME, STATISTICS, LOGIN } = URL_PATHS

const App = () => {
  const [issues, setIssues] = useState(
    issuesData.map((issue) => ({
      ...issue,
      status: STATUSES[0],
      comment: DEFAULT_COMMENT,
      isDeleted: false,
    })),
  )

  const rowsData = issues.filter((issue) => !issue.isDeleted)

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

  const handleSelectChange = useCallback((selectedValue, rowId) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === rowId ? { ...issue, status: selectedValue } : issue,
      ),
    )
  }, [])

  const handleDeleteIssue = useCallback((rowId) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === rowId ? { ...issue, isDeleted: true } : issue,
      ),
    )
  }, [])

  return (
    <Router>
      <Route path={LOGIN} exact>
        <LoginPage />
      </Route>

      <Layout className="app">
        <Route path="/">
          <PageHeader />
        </Route>

        <Route path={HOME}>
          <HomePage
            rowsData={rowsData}
            handleCommentStartEdit={handleCommentStartEdit}
            handleCommentChange={handleCommentChange}
            handleSelectChange={handleSelectChange}
            handleDeleteIssue={handleDeleteIssue}
          />
        </Route>
        <Route path={STATISTICS}>
          <StatisticsPage />
        </Route>
      </Layout>
    </Router>
  )
}

export default App
