import React, { useState } from 'react';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom'
import {helper} from '../../helpers/common'
import { Row, Col, Form, Input, Button } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginPage = () => {
    const [errorLogin, setErrorLogin] = useState('');
    const history = useHistory();
    const onFinish = (values) => {
        const user = values.username;
        const pass = values.password;
        let token = api.loginUser(user, pass)
        if (token !== null) {
            setErrorLogin('')
            helper.saveToken(token)
            history.push('/search-movie')
        } else {
            setErrorLogin('account invalid')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row style={{ marginTop: '30px' }}>
            <Col span={10} offset={7}>
                <h3 style={{ textAlign: 'center', color: 'red' }}>{errorLogin}</h3>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* <Link to="/">Home page</Link> */}
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
export default React.memo(LoginPage);