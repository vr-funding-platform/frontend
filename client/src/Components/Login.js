import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Styles/login.scss';

const Login = ({ errors, touched }) => {
  return (
    <section className="login-form">
      <div className="login-container">
        <h1 className="login-head">LOGIN</h1>
        <Form className="login-form-inputs">
          <div className="form-element">
            <h2 className="login-input-label">EMAIL</h2>
            <Field
              type="email"
              name="email"
              spellCheck="false"
              className="login-input-field"
            />
            <div className="login-error-container">
              {touched.email && errors.email && (
                <p className="login-input-error">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="form-element">
            <h2 className="login-input-label">PASSWORD</h2>
            <Field
              type="password"
              name="password"
              className="login-input-field"
            />
            <div className="under-password-container">
              <div className="login-error-container">
                {touched.password && errors.password && (
                  <p className="under-password-error">{errors.password}</p>
                )}
              </div>
              <div className="forgot-password">
                <button className="forgot-pw-btn" type="button">
                  Forgot Password?
                </button>
              </div>
            </div>
          </div>
          <button className="login-button" type="submit">
            LOG IN
          </button>
        </Form>
      </div>
    </section>
  );
};

const FomikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },

  //=======Validation Schema======
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is not valid'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters or longer')
      .required('Password is required')
  }),
  //=====End Validation Schema====

  handleSubmit(values) {
    console.log(values);
  }
})(Login);

export default FomikLoginForm;
