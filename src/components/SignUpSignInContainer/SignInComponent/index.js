import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { classPrefixor } from "../../../utils/classPrefixor";
import { Form, Input, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../actions/userAction";
import withNotification from "../../common/HOC/withNotification";
import { CREDENTIAL_TYPE } from "../../../constants/userConstants";

const prefix = "signIn";
const c = classPrefixor(prefix);

const SignInComponent = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { credentials, err, status, currentAccount } = useSelector(
    (state) => state.userReducer
  );
  let history = useHistory();
  const handleLoginSuccess = () => {
    history.replace("/");
  };

  useEffect(() => {
    if (Object.keys(credentials).length !== 0) {
      history.push("/");
    }
  }, [credentials, history]);
  useEffect(() => {
    if (status === 200) {
      props.showNotification({
        type: "SUCCESS",
        message: "Tạo tài khoản thành công",
      });
      form.setFieldsValue({
        taiKhoan: currentAccount.taiKhoan,
        matKhau: currentAccount.matKhau,
      });
    }
    dispatch({
      type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_FAILURE,
      data: "",
    });
  }, [currentAccount, dispatch, form, props, status]);
  const onFinish = (values) => {
    dispatch(signInAction(values, handleLoginSuccess));
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  return (
    <section className={prefix}>
      <Container className={c`form`}>
        <Row>
          <Col lg="6" className={c`form__left`}>
            <img src="./img/edu_ilastration.png " alt="img" />
          </Col>
          <Col lg="6" className={c`form__right`}>
            <div className={c`form__right--inside`}>
              <Form
                className="login"
                onFinish={onFinish}
                {...formItemLayout}
                form={form}
              >
                <h3 className="text-center p-4">Login Your Account</h3>
                {!Object.keys(currentAccount).length > 0 && (
                  <p className="text-center text-danger">{err}</p>
                )}
                <Form.Item
                  label="UserName"
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
                  label="Password"
                  name="matKhau"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
                <Link to="/signup">Create Account</Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withNotification(SignInComponent);
