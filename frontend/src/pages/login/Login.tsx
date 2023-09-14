import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "antd/dist/reset.css";
import { Link } from "react-router-dom";
import { LoginProps } from "../../interface/interface";
import "./Login.css";
import { loginUser } from "../../redux/actions/userActions";

const Login = () => {
  const defaultData: LoginProps = {
    email: "",
    password: "",
  };

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onFinish = async (values: LoginProps) => {
    const { email, password } = values;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.error("Please enter a valid Email.");
      return;
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      message.error(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
      return;
    }

    try {
      await dispatch(loginUser(values));
      setLoginSuccess(true);
      message.success("Login successfully");

      localStorage.setItem("LOGGEDIN_USER_EMAIL", email);

      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      message.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={defaultData}
        onFinish={onFinish}
      >
        <h3>Login</h3>
        <Form.Item name="email">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            visibilityToggle={true} // Enable hide/unhide functionality
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
         <Link to="/signup">Don't have an account? Signup here</Link>
        </Form.Item>
        {loginSuccess && <p>Login successfully done!</p>}
      </Form>
    </div>
  );
};

export default Login;
