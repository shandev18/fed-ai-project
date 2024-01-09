import React, { useEffect, useState, useRef } from "react";
import { Container, Row1, Row2, StyledCardContainerPreview, StyledCardContainerResults, StyledEmpty, StyledButton, Heading, FinalResults, styles } from "./Styled-Capture.tsx";
import Webcam from "react-webcam";
import io from "socket.io-client";
import axios from "axios";

const videoConstraints = {
  width: 505,
  height: 360,
  facingMode: "user",
};

const WebcamMain = ({ setJobId, jobId }) => {
  const webcamRef: any = useRef(null);
  const socket: any = useRef(null);
  const [capturedImages, setCapturedImages] = useState<any>("");
  const [showFrames, setShowFrames] = useState(false);
  const [finalEmotion, setFinalEmotion] = useState(null);

  const setNewImage = (data, emotion) => {
    setCapturedImages(`data:image/jpg;base64,${data}`);
    setFinalEmotion(emotion);
  };

  // Function to capture and send images every second
  const captureAndSendImage = () => {
    if (webcamRef.current) {
      console.log("in scoket emission");
      const imageSrc = webcamRef.current.getScreenshot();

      // Emit the image data through the WebSocket
      if (socket.current) {
        socket.current.emit("live_stream", { imageData: imageSrc });
        socket.current.on("processed_frame", ({ imageData, job_id , final_prediction }) => {
          if (imageData) {
            setNewImage(imageData, final_prediction);
          }
          if (!jobId && job_id) {
            setJobId(job_id);
          }
        });
      }
    }
  };

  // Set up a interval to capture and send images every second
  useEffect(() => {
    if (showFrames) {
      setInterval(captureAndSendImage, 1000);
    }

    // Cleanup function to clear the interval when the component is unmounted
  }, [showFrames]);

  const handleDisconnect = async () => {
    axios
      .get(`http://127.0.0.1:8081/get-live-streams?job_id=${jobId}`)
      .then((response) => {
        const finalPrediction = response.data[0]?.final_prediction;
        setFinalEmotion(finalPrediction);
        console.log(response)
      })
     
     // .then((response) => console.log(response))
      .catch((err) =>
        console.log("%cwebcam.tsx line:128 err", "color: #007acc;", err)
      );
  };

  const toggleWebcam = () => {
    if (showFrames) {
      setShowFrames(false);
      socket.current.disconnect();
    } else {
      setShowFrames(true);
      socket.current = io("http://127.0.0.1:8081");
    }
    // Reset final emotion when starting the webcam
    setFinalEmotion(null);
  };

 
  console.log(jobId);

  console.log(showFrames);
  useEffect(() => {
    if (!showFrames && jobId) {
      handleDisconnect();
    }
  }, [showFrames, jobId]);

  return (
    <>
      <Container>
        <Row1>
          <Heading>/preview</Heading>
          <Heading>/results</Heading>
        </Row1>
        <Row2>
          <StyledCardContainerPreview style={showFrames ? styles : {}}>
            {/* Add video link here */}
            <Webcam
              videoConstraints={videoConstraints}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              mirrored={true}
            />
          </StyledCardContainerPreview>
          <StyledCardContainerPreview style={!showFrames ? styles : {}}>
            <img src={capturedImages} alt="" />
          </StyledCardContainerPreview>
          <StyledCardContainerResults>
            {/* Results section */}
            {finalEmotion ? (
              // Display final emotion when available
              <FinalResults>{`Final Predicted Emotion: ${finalEmotion}`}</FinalResults>
            ) : (
              // Display Empty component
              <StyledEmpty description="No data available" />
            )}
            {/* <StyledEmpty description="No data available" /> */}
          </StyledCardContainerResults>
        </Row2>
        <StyledButton onClick={toggleWebcam}>
          {showFrames ? "Stop" : "Start"}
        </StyledButton>
      </Container>
    </>
  );
};

export default WebcamMain;
