import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
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
          <Field  type='text' name='username' placeholder="username"/>
          {this.props.errors.username && <p>{this.props.errors.username}</p>}
          <Field  type='password' name='password' placeholder ="password" />
          {this.props.errors.password && <p>{this.props.errors.password}</p>}
          <button type='submit'> Submit </button>
        </Form>

        <p>You don't have an accout yet?
            <Link to={'/signup'}> Signup</Link>
        </p>
      </>
    )
  }
}

export default withAuth(withFormik({
  mapPropsToValues({password, username}){
    return ({
    password: password || '',
    username: username || '',
    })
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required(
      'lu es mionger')
      .min(2),
    username: Yup.string()
      .required()
  }),
  handleSubmit: (values, bag) => {
    const username = values.username;
    const password = values.password;
    bag.props.login({ username, password});
  }
})(Login));