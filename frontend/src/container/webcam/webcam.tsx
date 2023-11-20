import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Button, Table } from "antd";
import Webcam from "react-webcam";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50vh;
  margin: 180px;
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
            <Webcam videoConstraints={videoConstraints} />
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
        </Row2>
      </Container>
    </>
  );
};

export default WebcamMain;
