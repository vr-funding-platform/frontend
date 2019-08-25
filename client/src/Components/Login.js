import React from 'react';
import { withFormik, Form, Field } from 'formik';
import './Styles/login.scss';

const Login = () => {
  return (
    <section className="login-form">
      <div className="login-container">
        <h1>LOGIN</h1>
        <Form>
          <div className="form-element">
            <h2>EMAIL</h2>
            <Field type="email" name="email" />
          </div>
          <div className="form-element">
            <h2>PASSWORD</h2>
            <Field type="password" name="password" />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">LOG IN</button>
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
  }
})(Login);

export default FomikLoginForm;
