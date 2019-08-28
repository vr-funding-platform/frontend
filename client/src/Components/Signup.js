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
            <h2 className="signup-input-label">USERNAME</h2>
            <Field
              type="name"
              name="name"
              spellCheck="false"
              className="signup-input-field"
            />
            <div className="signup-error-container">
              {touched.name && errors.name && (
                <p className="signup-input-error">{errors.name}</p>
              )}
            </div>
          </div>
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
            <div className="signup-error-container">
              {touched.password && errors.password && (
                <p className="signup-input-error">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="radio-form-element">
            <h2 className="radio-input-label">
              PLEASE CHOOSE YOUR ACCOUNT TYPE
            </h2>

            <div className="account-radio-buttons">
              <Field type="radio" id="creator" name="accountType" value="creator" />
              <label htmlFor="creator" className="radio-label creator-box" >
                PROJECT
                <br />
                CREATOR
              </label>
              <Field type="radio" id="donor" name="accountType" value="donor" />
              <label htmlFor="donor" className="radio-label donor-box">
                PROJECT
                <br />
                DONOR
              </label>
            </div>
            <div className="signup-error-container">
              {touched.accountType && errors.accountType && (
                <p className="signup-input-error">{errors.accountType}</p>
              )}
            </div>
          </div>
          <button className="signup-button" type="submit">
            CREATE ACCOUNT
          </button>
        </Form>
      </div>
    </section>
  );
};

const FomikSignupForm = withFormik({
  mapPropsToValues({ name, username, password, accountType }) {
    return {
      name: name || '',
      username: username || '',
      password: password || '',
      accountType: accountType || ''
    };
  },

  //=======Validation Schema======
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(4, 'Username must be 4 characters or longer')
      .required('Username is required'),
    username: Yup.string()
      .email('Email is not valid')
      .required('Email is not valid'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters or longer')
      .required('Password is required'),
    accountType: Yup.string().required('You must select an account type')
  }),
  //=====End Validation Schema====

  handleSubmit(values) {
    console.log(values);
  }
})(SignUp);

export default FomikSignupForm;
