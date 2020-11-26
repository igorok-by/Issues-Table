import React from 'react'
import { Form, Input, Button, Col, Row, Card, Typography } from 'antd'

import './LoginPage.scss'

const { Title } = Typography

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-page">
      <Row justify="center">
        <Col span={18}>
          <Card>
            <Form
              labelCol={{ offset: 2, span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
