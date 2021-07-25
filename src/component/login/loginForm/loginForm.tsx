import React from "react";
import "./loginForm.css";
import SignIn from "../../../component/signIn/signIn";
import "../../signIn/signIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Formik } from "formik";
import * as yup from "yup";

export default class LogIn extends React.Component {
  render() {
    const phoneRegExp = /^\+?3?8?(0\d{9})$/;

    const validationSchema = yup.object().shape({
      name: yup
        .string()
        .typeError("Поле має містити лише букви")
        .required("Обов'язкове поле"),
      lastName: yup
        .string()
        .typeError("Поле має містити лише букви")
        .required("Обов'язкове поле"),
      password: yup
        .string()
        .typeError("Поле має містити лише букви")
        .required("Обов'язкове поле"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Паролі повинні співпадати")
        .required("Обов'язкове поле"),
      email: yup
        .string()
        .email("Введіть коректний email ")
        .required("Обов'язкове поле"),
      phone: yup
        .string()
        .matches(phoneRegExp, "Вкажіть коректний номер у форматі +380 ")
        .required("Обов'язкове поле"),
    });

    return (
      <>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <div className="authorization-block">
                  <h1>Зареєструватися</h1>
                  <div className="login-form">
                    <div className="UserName">
                      <div className="forName">
                        <input
                          placeholder="Ваше ім'я"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.name && errors.name && (
                          <p className="error">{errors.name}</p>
                        )}
                      </div>
                      <div className="forSurname">
                        <input
                          className="lastName"
                          name="lastName"
                          placeholder="Ваше прізвище"
                          type="text"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.lastName && errors.lastName && (
                          <p className="errorForLastName">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="phoneAndMail">
                      <input
                        placeholder="+38 (xxx) xxx xx xx"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && errors.phone && (
                        <p className="error">{errors.phone}</p>
                      )}

                      <input
                        className="email"
                        placeholder="Ваш емейл"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </div>

                    <div className="password-container">
                      <div className="forPassword">
                        <input
                          placeholder="Пароль"
                          name="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.password && errors.password && (
                          <p className="passwordErrorFirst">
                            {errors.password}
                          </p>
                        )}
                      </div>

                      <div className="forConfirmPassword">
                        <input
                          className="checkPassword"
                          placeholder="Повторіть пароль"
                          name="confirmPassword"
                          type="password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <p className="passwordError">
                            {" "}
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    className="loginBtn"
                    disabled={!isValid && !dirty}
                    onClick={(event: any) => {}}
                    type={"submit"}
                  >
                    Зареєструватись
                  </button>
                </div>
              </form>
              <BrowserRouter>
                <Switch>
                  <Route path="/signIn" component={SignIn} />
                </Switch>
              </BrowserRouter>
              <SignIn />
            </div>
          )}
        </Formik>
      </>
    );
  }
}
