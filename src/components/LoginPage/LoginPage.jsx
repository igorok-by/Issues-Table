import React, { useState } from 'react'
import { Form, Input, Button, Col, Row, Card, Typography } from 'antd'
import classNames from 'classnames'

import { USER_NAME, USER_PASSWORD } from '../../data'
import './LoginPage.scss'

const { Title } = Typography

const LoginPage = ({ setIsLogged }) => {
  const [isMessageShown, setIsMessageShown] = useState(false)

  const onFinish = ({ username, password }) => {
    username === USER_NAME && password === USER_PASSWORD
      ? setIsLogged(true)
      : setIsMessageShown(true)
  }

  const messageClasses = classNames('login-page__message', {
    'login-page__message--shown': isMessageShown,
  })

  return (
    <div className="login-page">
      <Row justify="center">
        <Col span={18}>
          <Card className="login-page-card">
            <Form
              labelCol={{ offset: 2, span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
            >
              <Title level={2} className="login-page__title">
                Log in
              </Title>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
              <Title level={5} className={messageClasses}>
                You have to input correct name and password (admin)
              </Title>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
