import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Styles/login.scss';

const Login = ({ errors, touched }) => {
  return (
    <section className="login-form">
      <div className="login-container">
        <h1>LOGIN</h1>
        <Form>
          <div className="form-element">
            <h2>EMAIL</h2>
            <Field type="email" name="email" spellCheck="false" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-element">
            <h2>PASSWORD</h2>
            <Field type="password" name="password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
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
