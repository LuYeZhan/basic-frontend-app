import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import talkService from '../services/talk-service'
import { withRouter} from 'react-router-dom';

class UpdateTalk extends React.Component {

    state = {
        title: '',
        tags: '',
        currentTalk: '',
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        
    }

    update = ( talk_id ) => {
    talkService.update(talk_id)
      .then((response) => {
        const {talk} = this.state;
        const newMyTalks = [...talk];
        this.setState ({
          talk: newMyTalks
        })

      })
  }
        render() {
        return (
            <Form>
            {console.log(this)}
                <Field  type='text' name='title' placeholder="title" value={this.props.title}/>
                {this.props.errors.title && this.props.touched.title && <p>{this.props.errors.title}</p>}
                <Field  type='text' name='tags' placeholder="tags" value={this.props.tags} />
                {this.props.errors.tags && this.props.touched.tags && <p>{this.props.errors.tags}</p>}
                <button  type='submit'> Submit</button>
                {/* <img src="./images/edit1.png" alt="update icon" onClick={() => this.update(talk._id) }/> */}
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
    handleSubmit(values, bag) {
      const title = values.title;
      const tags = values.tags;
      console.log(bag)
      console.log(bag.user)
      const id = bag.user.id

      talkService.update(id,{ title, tags})
      .then(() =>{
        bag.props.history.push('/profile')
      })   
    }
  })(UpdateTalk));

