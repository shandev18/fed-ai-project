import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Button, Table } from "antd";
import Webcam from "react-webcam";
import io from "socket.io-client";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  margin: 180px auto;
`;

const Row1 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Row2 = styled.div`
  width: 100%;
  display: flex;
`;

const StyledCardContainerPreview = styled.div`
  width: 550px;
  height: 400px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

const StyledCardContainerResults = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  background-color: #222222;
`;

const Heading = styled.div`
  text-align: center;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

const StyledTable = styled(Table)`
  border: 0;
  && .ant-table-pagination {
    display: none;
  }

  && .ant-table {
    background-color: #000 !important;
    color: white !important;
    border-radius: 0rem !important;
    width: 510px !important;
    height: 360px !important;
  }

  && .ant-table-cell {
    background-color: #000 !important;
    color: white !important;
    border: 0;
    font-family: "source-code-pro", monospace;
    font-weight: 200 !important;
  }
`;

const videoConstraints = {
  width: 505,
  height: 360,
  facingMode: "user",
};

const columns = [
  {
    title: "Results",
    dataIndex: "key",
    rowScope: "row",
  },
  {
    title: "Facial",
    dataIndex: "Facial",
  },
  {
    title: "Speech",
    dataIndex: "Speech",
  },

  {
    title: "Final",
    dataIndex: "Final",
  },
];

const data = [
  {
    key: "Emotion",
    Facial: "--",
    Speech: "--",
    Final: "--",
  },
  {
    key: "Sentiment",
    Facial: "--",
    Speech: "--",
    Final: "--",
  },
];

const WebcamMain = () => {
  const webcamRef: any = useRef(null);
  const socket: any = useRef(null);
  const [capturedImages, setCapturedImages] = useState<any>("");

  const setNewImage = (data) => {
    setCapturedImages(`data:image/jpg;base64,${data}`);
  };
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
  const captureAndSendImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      // Emit the image data through the WebSocket
      if (socket.current) {
        socket.current.emit("live_stream", { imageData: imageSrc });
        socket.current.on("processed_frame", ({ imageData }) => {
          if (imageData) {
            setNewImage(imageData);
          }
        });
      }

      // Store captured images for display or further processing
      //setCapturedImages((prevImages) => [...prevImages, imageSrc]);
    }
  };

  // Set up a interval to capture and send images every second
  useEffect(() => {
    const intervalId = setInterval(captureAndSendImage, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Container>
        <Row1>
          <Heading>/preview</Heading>
          <Heading>/results</Heading>
        </Row1>
        <Row2>
          <StyledCardContainerPreview>
            {/* add video link here */}
            <Webcam
              videoConstraints={videoConstraints}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              mirrored={true}
            />
          </StyledCardContainerPreview>
          <StyledCardContainerResults>
            {/* Results section */}
            <StyledTable
              getPopupContainer={(parent) => parent}
              columns={columns}
              dataSource={data}
              // bordered
            />
          </StyledCardContainerResults>
            <img src={capturedImages} alt="emotions"></img>
        </Row2>
      </Container>
    </>
  );
};

export default WebcamMain;
