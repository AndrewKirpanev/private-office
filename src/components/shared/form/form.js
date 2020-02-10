import React, { useState } from "react";
import { Formik } from "formik";
import styles from "./form.module.scss";

const withForm = (Component, subtitle) => {
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  let wrapperFrom = () => {
    return (
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={values => {
          let errors = {};

          if (!values.username) {
            errors.username = "Обязательное поле";
          } else if (!/^[A-Z0-9._%+-]{4,10}$/i.test(values.username)) {
            errors.username = "Неверный логин";
          }

          // if (!values.email) {
          //   errors.email = "Обязательное поле";
          // } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          // ) {
          //   errors.email = "Проверьте правильность ввода email";
          // }

          if (!values.password) {
            errors.password = "Введите пароль";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(
              values.password
            )
          ) {
            errors.password = "Неверный пароль";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={styles.headSubtitle}>{subtitle.subtitle}</div>
              <div className={styles.headDesc}>{subtitle.desc}</div>
            </div>
            <div className={styles.formWrapper}>
              <Component {...props} hasErrors={hasErrors} />
            </div>
          </div>
        )}
      </Formik>
    );
  };
  return wrapperFrom;
};

export default withForm;
