import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Table, Input } from "antd";
import axios from "axios";
const { TextArea } = Input;

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
  padding-top: 20px;
  background-color: #222222;
`;

const StyledCardContainerResults = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

// const StyledButton = styled(Button)`
//   background-color: #222222;
//   color: white;
//   border-radius: 0;
//   margin-top: 20px;
//   padding: 5px 50px;
// `;

const StyledTable = styled(Table)`
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

const StyledTextArea = styled(TextArea)`
  max-height: 360px;
  background-color: black !important;
  color: white;
  border: 1px solid #333333 !important;
  font-family: "source-code-pro", monospace;
  font-weight: 200 !important;

  &::placeholder {
    color: white !important;
  }

  &:hover {
    color: white !important;
    background-color: black !important;
  }
`;

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

const Uploadvideo = () => {
  let job = localStorage.getItem("job");
  const [result, setResult] = useState<any>(null);
  const [video, setVideo] = useState("");

  const fetchResults = async () => {
    await axios
      .get(`http://127.0.0.1:8080/analyze_video?job_id=${job}`)
      .then((res) => {
        setResult(res.data[0]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchResults();
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
            <StyledTextArea rows={4} placeholder="Enter your text here..." />
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
        {/* <StyledButton type="primary">
          <ExportOutlined /> CSV
        </StyledButton> */}
      </Container>
    </>
  );
};

export default Uploadvideo;
