import React from "react";
import "./myAccount.css";

import { Formik } from "formik";
import * as yup from "yup";




  const myAccount = ()=>{
    
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Введіть коректний email ")
        .required("Обов'язкове поле"),

      password: yup
        .string()
        .typeError("Поле має містити лише букви")
        .required("Обов'язкове поле"),
    });
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
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
            <form onSubmit={handleSubmit}>
              <div className="authorization-block">
                <h1>Вхід в кабінет</h1>
                <div className="login-form">
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

       <div className="forPasswordAccount">
                  <input
                  className='pass'
                    placeholder="Пароль"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <p className="error2">{errors.password}</p>
                  )}
          </div>
                <button
                className="loginBtn"
                disabled={!isValid && !dirty}
                onClick={(event: any) => {}}
                type={"submit"}
              >
                Увійти в кабінет
              </button>
              </div>

            
            </form>
          )}
        </Formik>
      </>
    );
  }

export default myAccount