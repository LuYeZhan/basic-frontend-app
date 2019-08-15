import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'


class Signup extends Component {

  state = {
    username: '',
    password: '',
    email: ''
  };

  render() {
    
    return (
      <>
        <Form>
          {this.props.errors.email && <p>{this.props.errors.email}</p>}
          <Field  type='text' name='username' placeholder="username"/>
          <Field  type='email' name='email' placeholder="email" />
          <Field  type='password' name='password' placeholder="password" />
          <button  type='submit' > Submit</button>
        </Form>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
}

export default withAuth(withFormik({
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
      .min(8),
    username: Yup.string()
      .required('username is required')
  }),
  handleSubmit(values, bag){
    const username = values.username;
    const password = values.password;
    const email = values.email;

    bag.props.signup({ username, password, email})
      .then( (user) => {
        
        this.setState({
            username: '',
            password: '',
            email: '',
        });
      })
      .catch( error => console.log(error) )
  }


})(Signup));