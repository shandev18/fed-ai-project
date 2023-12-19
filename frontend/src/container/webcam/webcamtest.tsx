import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import io from "socket.io-client";

const WebcamCapture = () => {
  const webcamRef: any = useRef(null);
  const socket: any = useRef(null);
  const [capturedImages, setCapturedImages] = useState<any>([]);

  useEffect(() => {
    // Connect to the WebSocket server
    socket.current = io("http://127.0.0.1:8081");

    // Cleanup function to disconnect the socket when the component is unmounted
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  // Function to capture and send images every second
  const captureAndSendImage = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      // Emit the image data through the WebSocket
      if (socket.current) {
        socket.current.emit("live_stream", { imageData: imageSrc });
        socket.current.on("processed_frame", (data) => {
          console.log(data.imageData);
        });
      }

      // Store captured images for display or further processing
      setCapturedImages((prevImages) => [...prevImages, imageSrc]);
    }
  };

  // Set up a interval to capture and send images every second
  useEffect(() => {
    const intervalId = setInterval(captureAndSendImage, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <div>
        <h2>Captured Images</h2>
        {capturedImages.map((image, index) => (
          <img key={index} src={image} alt={`Captured ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default WebcamCapture;
