import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Styles/signup.scss';

const SignUp = ({ errors, touched }) => {
  return (
    <section className="signup-form">
      <div className="signup-container">
        <h1 className="signup-head">SIGN UP</h1>
        <Form className="signup-form-inputs">
          <div className="form-element">
            <h2 className="signup-input-label">EMAIL</h2>
            <Field
              type="email"
              name="username"
              spellCheck="false"
              className="signup-input-field"
            />
            <div className="signup-error-container">
              {touched.username && errors.username && (
                <p className="signup-input-error">{errors.username}</p>
              )}
            </div>
          </div>
          <div className="form-element">
            <h2 className="signup-input-label">PASSWORD</h2>
            <Field
              type="password"
              name="password"
              className="signup-input-field"
            />
            <div className="under-password-container">
              <div className="signup-error-container">
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
          <button className="signup-button" type="submit">
            LOG IN
          </button>
        </Form>
      </div>
    </section>
  );
};

const FomiksignupForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  //=======Validation Schema======
  validationSchema: Yup.object().shape({
    username: Yup.string()
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
})(SignUp);

export default FomiksignupForm;
