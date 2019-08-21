import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import talkService from '../services/talk-service'
import { withRouter} from 'react-router-dom';

class UpdateTalk extends React.Component {

    state = {
        title: '',
        tags: [],
        talkId: this.props.match.params.id
        
    }
componentDidMount() {
  talkService.getTalk(this.state.talkId)
  .then((response) => {
    this.setState({
      title: response.title,
      tags: response.tags,
    })
      })   
}

        render() {
         const {title, tags} = this.state
        return (
          
            <Form>
                <Field  type='text' name='title' placeholder="title" />
                {this.props.errors.title && this.props.touched.title && <p>{this.props.errors.title}</p>}
                <Field  type='text' name='tags' placeholder="tags"  />
                {this.props.errors.tags && this.props.touched.tags && <p>{this.props.errors.tags}</p>}
                <button  type='submit'> Submit</button>
            </Form> 
        )
    }
}

export default withRouter(withFormik({
    mapPropsToValues({title, tags,}){
      return({
        title: title || '',
        tags: tags || '',
      })
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('explain what u said in 1 word'),
      tags: Yup.string()
        .required('#happiness')
    }),
    handleSubmit(values, {props}) {
      const title = values.title;
      const tags = values.tags;
      const id = props.match.params.id
      talkService.update(id,{ title, tags})
      .then(() =>{
        props.history.push('/profile')
      })   
    }
  })(UpdateTalk));

