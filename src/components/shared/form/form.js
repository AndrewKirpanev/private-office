import React from "react";
import { withFormik } from "formik";
import styles from "./form.scss";

const withForm = Component =>
  withFormik({
    mapPropsToValues: () => ({ email: "", password: "" }),

    // Custom sync validation
    validate: values => {
      let errors = {};

      if (!values.email) {
        errors.email = "Обязательное поле";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Проверьте правильность ввода email";
      }

      if (!values.password) {
        errors.password = "Введите пароль";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(values.password)
      ) {
        errors.password = "Неверный пароль";
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },

    displayName: "BasicForm" // helps with React DevTools
  })(Component);

export default withForm;
