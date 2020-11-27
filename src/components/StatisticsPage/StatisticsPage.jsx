import React from 'react'
import { Layout, Typography } from 'antd'

import './StatisticsPage.scss'

const { Content } = Layout
const { Title } = Typography

const StatisticsPage = () => {
  return (
    <Content className="home-page">
      <Title level={1}>Statistics</Title>
    </Content>
  )
}

export default StatisticsPage
