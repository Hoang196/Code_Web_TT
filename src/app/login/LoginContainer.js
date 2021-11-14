import { Button, Checkbox, Form, Input, notification } from "antd";
import 'antd/dist/antd.css';
import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { loginApi } from "../../services/api/AccountApi";
import firebase from "../firebase/index";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "./LoginContainer.scss";

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/u/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],

};

const LoginContainer = () => {

    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(AppContext)

    const onSubmit = async (values) => {
        setLoading(true)
        const { data, success } = await loginApi(values.email, values.password)
        if (success) {
            if (data.data.status_code === 200) {
                setUser(data.data.user)
                window.location.href = "/u/"
                setLoading(false)
                await notification.success({
                    message: "Login success",
                    description: data.data.detail,
                })
            }
        } else {
            setLoading(false)
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }


    return (
        <div className="login__page container-fluid">
            <div className={"login-form"}>
                <div className={"title"}>
                    <p style={{ fontSize: "25px", fontWeight: "600", color: "red" }}>
                        Đăng nhập
                    </p>
                </div>
                <div className={"content"}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
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
                            label="Mật khẩu"
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

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 5,
                                span: 20,
                            }}
                        >
                            <Checkbox>Nhớ tài khoản</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button className={"button"} loading={loading} type="primary" htmlType="submit" size="large">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="login row">
                    <div className="login-logo">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                    <div className="login-logo">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </div>
                <hr />
                <div className={"login__footer"}>
                    Bạn chưa có tài khoản? <a href={"/register"}>Đăng ký ngay</a> <br />
                    <a href={"/login"} onClick={() => { alert("Tính năng đang được bảo trì") }}>Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    )
}
export default LoginContainer