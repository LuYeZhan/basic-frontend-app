import { ReactMic } from 'react-mic';
import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import talkService from '../services/talk-service'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

 
const config = {
  apiKey: "AIzaSyBuNW91oYKUj0x2V9FVbckJdU7EZrmAul8",
  authDomain: "listenandtalk-a3074.firebaseapp.com",
  storageBucket: "gs://listenandtalk-a3074.appspot.com"
};

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref('audio');
const dateToday = new Date();
const randomNum = Math.floor(Math.random()*128394327832781/61283625);
var audioRef = storageRef.child(`audio${moment(dateToday).format('LTS')}${randomNum}`)


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
    let audio = new File([recordedBlob.blob], "audio", {type:"webm;codecs=opus"})
    this.setState({
        sound: recordedBlob.blobURL
    })
    console.log('recordedBlob is: ', recordedBlob);
    console.log(audio);
    var audioUploaded = audioRef.put(audio).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    })
    // audioUploaded.getDownloadURL()
    // .then(url => {
    //   console.log(url)
    //   this.setState({ sound: url })
    //   console.log(this.state.sound)
    // })
     
  }
  // handleUploadSuccess = audioUploaded => {
  //     firebase
  //       .getDownloadURL()
  //       .then(url => {
  //         console.log(url)
  //         this.setState({ sound: url })
  //       });
  // };
    
  render() {
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
          {this.props.errors.tags && this.props.touched.tags && <p>{this.props.errors.tags}</p>}
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
      tags: tags || '',
    })
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('explain what u said in 1 word'),
    tags: Yup.string()
      .required('#happiness')
  }),
  handleSubmit(values, { props }){
    const title = values.title;
    const tags = values.tags;

    talkService.create({ title, tags})
    .then(() =>{

  // una vez terminado, cambiar el estado del form a false, y volver a home o profile.. o create-talk?
      
    })   
  }
})(Mic)