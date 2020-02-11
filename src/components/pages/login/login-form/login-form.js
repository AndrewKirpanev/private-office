import React, { useEffect } from "react";
import { Form, Icon, Input, Button } from "antd";
import { navigate } from "gatsby";
import { fireBaseLogin, isLogin } from "utils/auth";
import withForm from "components/shared/form";
import styles from "./login-form.module.scss";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    hasErrors
  } = props;

  if (isLogin()) {
    navigate(`/app/profile`);
  }

  return (
    <Form
      onSubmit={() => {
        handleSubmit();
        navigate(`/app/profile`);
      }}
      className={styles.form}
    >
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
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          !touched.password ? "" : errors.password ? "error" : "success"
        }
        hasFeedback
        help={!touched.password ? "" : errors.password}
      >
        <Input.Password
          id="password"
          size="large"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Введите пароль"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          className={styles.input}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            handleSubmit();
            fireBaseLogin({
              email: values.email,
              password: values.password
            });
          }}
          disabled={hasErrors(errors)}
          className={styles.button}
        >
          Войти в аккаунт
        </Button>
      </Form.Item>
    </Form>
  );
};

const EnhancedComponent = withForm(LoginForm, {
  subtitle: "Личный кабинет",
  desc: "Пожалуйста, войдите в свой аккаунт"
});

export default EnhancedComponent;
