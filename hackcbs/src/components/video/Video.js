import React from 'react';
import {useState} from 'react';
import './Video.css';

const Video=()=>{
    const [logElement, setLogElement] =useState(0); 
  return (
    <div style={{background:"white",color:"black"}}>Video

<p>
    {/* <a href='file:///C:/Users/Rucha%20Kasture/Desktop/_sample_.Example_of_recording_a_media_element%20(1).html'>here</a> */}
        Click the "Start Recording" button to begin video recording for a few seconds. You can stop recording by clicking the "Stop Recording" button. The "Download" button will download the received data (although it's in a raw, unwrapped form that isn't very
        useful).
    </p>

    
    <br />

    <div class="left">
        <div id="startButton" class="button">Start Recording</div>
        <h2>Preview</h2>
        <video id="preview" width="160" height="120" autoplay muted></video>
    </div>

    <div class="right">
        <div id="stopButton" class="button">Stop Recording</div>
        <h2>Recording</h2>
        <video id="recording" width="160" height="120" controls></video>
        <a id="downloadButton" class="button"> Download </a>
    </div>

    <div class="bottom">
        <pre id="log">{}</pre>
    </div>

   
    <iframe width="100%" height="100%"  src='http://127.0.0.1:5500/video.html'></iframe>
    <a href='file:///C:/Users/Rucha%20Kasture/Desktop/_sample_.Example_of_recording_a_media_element%20(1).html'></a>
    </div>
  )
}

export default Video