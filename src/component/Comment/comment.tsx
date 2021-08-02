import React, { useState } from "react";
import "./comment.css";

import { Formik } from "formik";
import * as yup from "yup";
import StarRating from "../StarRating/starRating";
import Response from "../Response/response";

const Comment = () => {
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
    email: yup
      .string()
      .email("Введіть коректний email ")
      .required("Обов'язкове поле"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Вкажіть коректний номер у форматі +380 ")
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
          <form onSubmit={handleSubmit}>
            <div className="authorization-block">
              <h1>Залишіть відгук</h1>
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

              <StarRating />

              <button
                onClick={(event: any) => {}}
                className="sendBtn"
                disabled={!isValid && !dirty}
                type={"submit"}
              >
                Надіслати
              </button>
            </div>
          </form>
        )}
      </Formik>
      <Response />
    </>
  );
};

export default Comment;
