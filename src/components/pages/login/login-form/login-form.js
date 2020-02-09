import React from "react";
import { Form, Icon, Input, Button } from "antd";
import withForm from "components/shared/form";
import styles from "./login-form.scss";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <div className={styles.wrapper}>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item
          validateStatus={
            !touched.email ? "" : errors.email ? "error" : "success"
          }
          hasFeedback
          help={!touched.email ? "" : errors.email}
        >
          <Input
            id="email"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Введите e-mail"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item
          validateStatus={
            !touched.password ? "" : errors.password ? "error" : "success"
          }
          hasFeedback
          help={!touched.password ? "" : errors.password}
        >
          <Input
            id="password"
            size="large"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Введите пароль"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit} disabled={errors}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const EnhancedComponent = withForm(LoginForm);

export default EnhancedComponent;
