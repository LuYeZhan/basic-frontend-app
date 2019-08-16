import { ReactMic } from 'react-mic';
import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import talkService from '../services/talk-service'

class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      sound: '',
      isSoundCreated: false,
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false,
      isSoundCreated: true,
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

onStop = (recordedBlob) => {
    this.setState({
        sound: recordedBlob.blobURL
    })
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        <audio 
        controls
         src={this.state.sound}>
         <code> audio </code> element.
        </audio>
      {this.state.isSoundCreated ? <Form>
          <Field  type='text' name='title' placeholder="title"/>
          {this.props.errors.title && this.props.touched.title && <p>{this.props.errors.title}</p>}
          <Field  type='text' name='tags' placeholder="tags" />
          {this.props.errors.tags && this.props.touched.tags && <p>{this.props.errors.email}</p>}
          {/* timestamps? */}
          <button  type='submit' > Submit</button>
        </Form> : null } 
      </div>
    );
  }
}
export default withFormik({
  mapPropsToValues({title, tags}){
    return({
      title: title || '',
      // audio: audio || '',
      tags: tags || '',
      // creator: creator || '',
    })
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('explain what u said in 1 word'),
    tags: Yup.string()
      .required('ex: #happiness')
  }),
  handleSubmit(values, bag){
    const title = values.title;
    const tags = values.tags;
    const id = bag.props.talk.id;

    talkService.create(id,{ title, tags})
    .then(() =>{

  // una vez terminado, cambiar el estado del form a false, y volver a home o profile.. o create-talk?
      
    })   
  }
})(Mic)