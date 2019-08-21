import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from '../components/WithAuth';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
require('typeface-roboto');

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    
    return (
      <>
        <Form>
          <Field type='text' name='username' placeholder="username"/>
          {this.props.errors.username && <p>{this.props.errors.username}</p>}
          <Field className="input-margin" type='password' name='password' placeholder ="password" />
          {this.props.errors.password && <p>{this.props.errors.password}</p>}
          <button type='submit'> Submit </button>
        </Form>
        <p>You don't have an account yet?
          <Link to={'/signup'}> Signup</Link>
        </p>
      </>
    )
  }
}

export default WithAuth(withFormik({
  mapPropsToValues({password, username}){
    return ({
      password: password || '',
      username: username || '',
      })
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('at least two characters')
      .min(2),
    username: Yup.string()
      .required('username is a required field')
  }),
  handleSubmit: (values, bag) => {
    const username = values.username;
    const password = values.password;
    bag.props.login({ username, password});
  }
})(Login));