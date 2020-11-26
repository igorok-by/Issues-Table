import React from 'react'
import { Button, Layout, Menu, Table, Typography } from 'antd'

import './HomePage.scss'

const { Header, Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = ({ rowsData }) => {
  const columns = [
    {
      title: <p className="home-page__column-title">Severity</p>,
      dataIndex: 'severity',
      align: 'center',
      className: 'home-page__table-column',
      // filters: [
      //   {
      //     text: 'Joe',
      //     value: 'Joe',
      //   },
      //   {
      //     text: 'Jim',
      //     value: 'Jim',
      //   },
      //   {
      //     text: 'Submenu',
      //     value: 'Submenu',
      //     children: [
      //       {
      //         text: 'Green',
      //         value: 'Green',
      //       },
      //       {
      //         text: 'Black',
      //         value: 'Black',
      //       },
      //     ],
      //   },
      // ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ['descend'],
    },
    {
      title: <p className="home-page__column-title">User</p>,
      dataIndex: 'user',
      align: 'center',
      className: 'home-page__table-column',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: <p className="home-page__column-title">User location</p>,
      dataIndex: 'location',
      align: 'center',
      className: 'home-page__table-column',
      // filters: [
      //   {
      //     text: 'London',
      //     value: 'London',
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York',
      //   },
      // ],
      // filterMultiple: false,
      // onFilter: (value, record) => record.address.indexOf(value) === 0,
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: <p className="home-page__column-title">Issue description</p>,
      dataIndex: 'description',
      className: 'home-page__table-column home-page__table-column--descr',
    },
    {
      title: <p className="home-page__column-title">Status</p>,
      dataIndex: 'status',
      align: 'center',
      className: 'home-page__table-column',
    },
    {
      title: <p className="home-page__column-title">Comment</p>,
      dataIndex: 'comment',
      className: 'home-page__table-column home-page__table-column--comment',
    },
    {
      title: <p className="home-page__column-title">Date</p>,
      dataIndex: 'date',
      align: 'center',
      className: 'home-page__table-column home-page__table-column--date',
    },
    {
      title: <p className="home-page__column-title">Delete</p>,
      dataIndex: 'delete',
      align: 'center',
      className: 'home-page__table-column',
    },
  ]

  const rows = rowsData.map(
    ({ id, severity, userInfo, location, description, status, date }) => ({
      key: id,
      severity,
      user: (
        <p className="home-page__cell-name">
          <span>{userInfo.name}</span>
          <span>{userInfo.position}</span>
        </p>
      ),
      location,
      description,
      status,
      comment: (
        <Paragraph editable={{ autoSize: { maxRows: 3 } }}>
          no comment yet
        </Paragraph>
      ),
      date,
      delete: (
        <Button size="small" type="link" danger>
          Delete
        </Button>
      ),
    }),
  )

  const setRowClass = ({ severity }) =>
    `home-page__table-row home-page__table-row--${severity}`

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <Layout className="home-page">
      <Header className="home-page__header">
        <Menu
          className="home-page__menu"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
        >
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="Statistics">Statistics</Menu.Item>
        </Menu>
      </Header>
      <Content className="home-page__content">
        <Title level={1}>Issues</Title>
        <Table
          columns={columns}
          dataSource={rows}
          rowClassName={setRowClass}
          onChange={onChange}
          bordered
        />
      </Content>
    </Layout>
  )
}

export default HomePage
