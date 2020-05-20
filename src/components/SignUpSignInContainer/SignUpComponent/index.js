import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { classPrefixor } from "../../../utils/classPrefixor";
import { Form, Input, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../actions/userAction";
import { RGX } from "../../../core/validations";
const prefix = "signUp";
const c = classPrefixor(prefix);
const SignUpComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, currentAccount, err } = useSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    if (status === 200) {
      history.replace("/signin");
    }
  }, [currentAccount]);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (values) => {
    const dataSubmit = {
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      hoTen: values.hoTen,
      soDT: values.soDT,
      maNhom: "GP01",
      email: values.email,
    };
    dispatch(signUpAction(dataSubmit));
    form.resetFields();
  };
  return (
    <>
      <section className={prefix}>
        <Container className={c`form`}>
          <Row>
            <Col lg="6" className={c`form__left`}>
              <img src="./img/signup-1.png " alt="img" />
            </Col>
            <Col lg="6" className={c`form__right`}>
              <div className={c`form__right--inside`}>
                <Form
                  className="register"
                  onFinish={onFinish}
                  form={form}
                  {...formItemLayout}
                >
                  <h3 className="text-center p-4">Register Your Account</h3>
                  <p className="text-center text-danger">{err}</p>
                  <Form.Item
                    label="User Name"
                    name="taiKhoan"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="matKhau"
                    label="Password"
                    rules={[
                      {
                        pattern: RGX.PASSWORD_STRONG_RGX,
                        message:
                          "Password must be at least six characters, at least one uppercase letter, one letter and one number and at least one special character.",
                      },
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["matKhau"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("matKhau") === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Full Name"
                    name="hoTen"
                    rules={[
                      {
                        pattern: RGX.NAME_RGX,
                        message: "The input is not valid Name!",
                      },
                      {
                        required: true,
                        message: "Please input your FullName!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone Number"
                    name="soDT"
                    rules={[
                      {
                        pattern: RGX.PHONE_NUMBER_RGX,
                        message: "The input is not valid Phone Number!",
                      },
                      {
                        required: true,
                        message: "Please input your Phone Number!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Link to="/signin">You Have Account?</Link>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUpComponent;
