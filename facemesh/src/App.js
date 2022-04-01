import React, {useRef} from 'react';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh"
import Webcam from "react-webcam";

function App() {
  // Setting up references
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);

  // Load Facemesh
  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {width:640, height:480}, 
      scale:0.8
    });
    setInterval(() => {
    detect(net)
    }, 100)
  };

  // Detect function
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.video.width = videoWidth;
      canvasRef.current.video.height = videoHeight;

      // Make detections
      const face = await net.estimateFaces(video)
      console.log(face);

      // Get canvas context for drawing
    }
  };

  runFacemesh();

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
