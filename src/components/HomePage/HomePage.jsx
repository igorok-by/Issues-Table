import React from 'react'
import { Layout, Table, Select, Popconfirm, Typography } from 'antd'

import { STATUSES } from '../../data'
import './HomePage.scss'

const { Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = ({
  rowsData,
  handleCommentStartEdit,
  handleCommentChange,
  handleSelectChange,
  handleDeleteIssue,
}) => {
  const statusOptions = STATUSES.map((status) => ({ value: status }))

  const severityFilters = [...new Set(rowsData.map(({ severity }) => severity))]
    .map((severity) => ({
      text: severity,
      value: severity,
    }))
    .sort((a, b) => a.value - b.value)

  const locationFilters = [
    ...new Set(rowsData.map(({ location }) => location)),
  ].map((location) => ({
    text: location,
    value: location,
  }))

  const statusFilters = STATUSES.map((status) => ({
    text: status,
    value: status,
  }))

  const columns = [
    {
      title: <p className="home-page__column-title">Severity</p>,
      dataIndex: 'severity',
      align: 'center',
      className: 'home-page__table-column',
      filters: severityFilters,
      onFilter: (value, row) => row.severity === value,
      sorter: (a, b) => a.severity - b.severity,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: <p className="home-page__column-title">User</p>,
      dataIndex: 'user',
      align: 'center',
      className: 'home-page__table-column',
    },
    {
      title: <p className="home-page__column-title">User location</p>,
      dataIndex: 'location',
      align: 'center',
      className: 'home-page__table-column',
      filters: locationFilters,
      onFilter: (value, row) => row.location === value,
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
      className: 'home-page__table-column home-page__table-column--status',
      filters: statusFilters,
      onFilter: (value, row) => row.status.props.defaultValue === value,
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
    ({
      id,
      severity,
      userInfo,
      location,
      description,
      status,
      comment,
      date,
    }) => ({
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
      status: (
        <Select
          className="home-page__cell-select"
          defaultValue={status}
          options={statusOptions}
          onChange={(selectedValue, option, rowId = id) =>
            handleSelectChange(selectedValue, rowId)
          }
        ></Select>
      ),
      comment: (
        <Paragraph
          editable={{
            autoSize: { maxRows: 3 },
            onStart: (issueId = id) => handleCommentStartEdit(issueId),
            onChange: (newComment, issueId = id) =>
              handleCommentChange(newComment, issueId),
          }}
        >
          {comment}
        </Paragraph>
      ),
      date,
      delete: (
        <Popconfirm
          title="Are you sure to delete this issue?"
          onConfirm={(e, rowId = id) => handleDeleteIssue(rowId)}
          okText="Yes"
          cancelText="No"
          placement="topRight"
        >
          <a href=" ">Delete</a>
        </Popconfirm>
      ),
    }),
  )
  console.log(rows)

  const setRowClass = ({ severity }) =>
    `home-page__table-row home-page__table-row--${severity}`

  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log('params', pagination, filters, sorter, extra)
  // }

  return (
    <Content className="home-page">
      <Title level={1}>Issues</Title>
      <Table
        columns={columns}
        dataSource={rows}
        rowClassName={setRowClass}
        // onChange={onChange}
        bordered
      />
    </Content>
  )
}

export default HomePage
