import React, { Component } from 'react';
import WithAuth from '../components/WithAuth';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import authService from '../services/auth-service';
import { withRouter} from 'react-router-dom';
import Navbar from '../components/Navbar';
require('typeface-roboto');


class ProfileUpdate extends Component {

  state = {
    username: '',
    password: '',
    email: '',
  };

  render() {
    
    return (
      <>
        <Navbar goBack={this.props}/>
        <Form>
          <Field  type='text' name='username' placeholder="username" value={this.props.username}/>
          {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
          <Field  type='email' name='email' placeholder="email" value={this.props.email} />
          {this.props.errors.email && this.props.touched.email && <p>{this.props.errors.email}</p>}
          <Field  type='password' name='password' placeholder="password" />
          {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
          <button  type='submit' > Submit</button>
        </Form>
      </>
    )
  }
}

const ProfileUpdateWithRouter = withRouter(ProfileUpdate)

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
      .min(2,'minimo 2 asshole!'),
    username: Yup.string()
      .required('username is required')
  }),
  handleSubmit(values, {props} ){
    const username = values.username;
    const password = values.password;
    const email = values.email;

    const id = props.user.id;
    
    authService.update(id,{ username, password, email})
    .then(() =>{
        props.history.push('/profile')
        props.updateUserData();
    })

  }


})(ProfileUpdateWithRouter));
