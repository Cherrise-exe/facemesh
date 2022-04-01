import React, {useRef} from 'react';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh"
import Webcam from "react-webcam";

function App() {
  // Setting up references
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);

  return (
    <div className="App">
      <div className="App-header">
     <Webcam ref={webcamRef} style={
       {
         position:"absolute",
         marginLeft:"auto",
         marginRight:"auto",
         left:0,
         right:0,
         textAlign:"center",
         zIndex:9,
         width:640,
         height:480,
       }
     }  />
     <canvas ref={canvasRef} style={
       {
         position:"absolute",
         marginLeft:"auto",
         marginRight:"auto",
         left:0,
         right:0,
         textAlign:"center",
         zIndex:9,
         width:640,
         height:480,
       }
     }  />
     </div>
    </div>
  );
}

export default App;
