import { ReactMic } from 'react-mic';
import React from 'react';
import firebase from "firebase";
import moment from 'moment';
import 'moment/locale/es'
import FormTest from '../components/FormTest';
moment.locale('es');
require('typeface-roboto');

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  storageBucket: 'gs://listenandtalk-a3074.appspot.com'
};

firebase.initializeApp(config);
const storage = firebase.storage();
const storageRef = storage.ref('audio');

class Mic extends React.Component {
    state = {
      record: false,
      soundURL: '',
      isSoundCreated: false,
    }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false,
    });
  }

  onData(recordedBlob) {
    
  }

onStop = (recordedBlob) => {
  const dateToday = new Date();
  const randomNum = Math.floor(Math.random()*128394327832781/61283625);
    let audio = new File([recordedBlob.blob], `audio${moment(dateToday).format('LTS')}${randomNum}`, {type:"webm;codecs=opus"})
    storageRef.child(`audio${moment(dateToday).format('LTS')}${randomNum}`).put(audio).then( (snapshot) => {
      console.log('Uploaded a blob or file!');
      firebase.storage().ref('audio').child(`audio${moment(dateToday).format('LTS')}${randomNum}`).getDownloadURL().then((url) => {
        this.setState({
          soundURL: url,
          isSoundCreated: true,
        })
      })
    })
  }
  
  render() {
    return (
      <div className="container">
        <ReactMic
          record={this.state.record}
          className="sound-wave width"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        {this.state.isSoundCreated ? 
        <FormTest soundURL={this.state.soundURL}/> : null}
      </div>
    );
  }
}

export default Mic;