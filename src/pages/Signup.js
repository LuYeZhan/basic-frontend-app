import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from '../components/WithAuth';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
require('typeface-roboto');

class Signup extends Component {

  state = {
    username: '',
    password: '',
    email: ''
  };

  render() {
    
    return (
      <>
        <a href="/splash"><img className="icon-size margin-button" src="../images/back.png" alt="back icon"/></a>
        <Form>
          <Field type='text' name='username' placeholder="username"/>
          {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
          <Field className="input-margin"  type='email' name='email' placeholder="email" />
          {this.props.errors.email && this.props.touched.username && <p>{this.props.errors.email}</p>}
          <Field className="input-margin"  type='password' name='password' placeholder="password" />
          {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
          <button  type='submit' > Submit</button>
        </Form>
        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>
      </>
    )
  }
}

export default WithAuth(withFormik({
  mapPropsToValues({email, password, username}){
    return ({
      email: email || '',
      password: password || '',
      username: username || '',
      })
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('email format has to be correct')
      .required(),
    password: Yup.string()
      .required()
      .min(2,'at least 2 characters'),
    username: Yup.string()
      .required('username is required')
  }),
  handleSubmit(values, {props}){
    const username = values.username;
    const password = values.password;
    const email = values.email;
    props.signup({ username, password, email})
  }
})(Signup));