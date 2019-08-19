import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import talkService from '../services/talk-service'
import { withRouter} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');
require('typeface-roboto');

class FormTest extends React.Component {
    render() {
        return (
            <Form>
                <Field hidden type='text' name='soundURL'/>
                <Field  type='text' name='title' placeholder="title"/>
                {this.props.errors.title && this.props.touched.title && <p>{this.props.errors.title}</p>}
                <Field  type='text' name='tags' placeholder="tags" />
                {this.props.errors.tags && this.props.touched.tags && <p>{this.props.errors.tags}</p>}
                <button  type='submit'> Submit</button>
            </Form> 
        )
    }
}

export default withRouter(withFormik({
    mapPropsToValues({title, tags, soundURL}){
        console.log(soundURL)
      return({
        title: title || '',
        tags: tags || '',
        soundURL: soundURL,
      })
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('explain what u said in 1 word'),
      tags: Yup.string()
        .required('#happiness')
    }),
    handleSubmit(values, bag) {
      console.log(values)
      const title = values.title;
      const tags = values.tags;
      const soundURL = values.soundURL;
      talkService.create({ title, tags, soundURL})
      .then(() =>{
        bag.props.history.push('/profile')
      })   
    }
  })(FormTest));