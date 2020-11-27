import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { Layout } from 'antd'

import { URL_PATHS } from '../../data'
import './PageHeader.scss'

const { Header } = Layout
const { HOME, STATISTICS } = URL_PATHS

const PageHeader = () => {
  const { pathname } = useLocation()

  const classesHomeLink = classNames('header__link', {
    'header__link--active': pathname === HOME,
  })
  const classesStatsLink = classNames('header__link', {
    'header__link--active': pathname === STATISTICS,
  })

  return (
    <Header className="header">
      <NavLink to={HOME} className={classesHomeLink}>
        Home
      </NavLink>
      <NavLink to={STATISTICS} className={classesStatsLink}>
        Statistics
      </NavLink>
    </Header>
  )
}

export default PageHeader
