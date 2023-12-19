import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Empty, Input } from "antd";
import axios from "axios";
import TextResults from "./components/textresults.tsx";
const { TextArea } = Input;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-items: flex-start;
`;

const StyledCardContainerPreview = styled.div`
  width: 550px;
  min-height: 400px;
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

const StyledButton = styled(Button)`
  height: 30px;
  background-color: #333333;
  color: #ecedee important;
  border-radius: 8px;
  margin-top: 18px;
`;

const StyledTextArea = styled(TextArea)`
  min-height: 320px !important;
  max-height: 320px !important;
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

const AudioContainer = styled.div`
  overflow: auto;
`;

const StyledEmpty = styled(Empty)`
  //background-color: #333333 !important;
  && .ant-empty-description {
    color: white !important;
  }
`;

// ... (your imports)

const UploadText = () => {
  const [text, setText] = useState("");
  const [analyze_text, setAnalyzeText] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.set("input_text", text);
      await axios
        .post(`http://127.0.0.1:8081/analyze_text`, formData)
        .then((response) => {
          setAnalyzeText(response.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error submitting text:", error);
    }
  };

  return (
    <>
      <Container>
        <Row1>
          <Heading>/preview</Heading>
          <Heading>/results</Heading>
        </Row1>
        <Row2>
          <StyledCardContainerPreview>
            <StyledTextArea
              rows={4}
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {!isLoading ? (
              <StyledButton type="primary" onClick={handleSubmit}>
                Submit
              </StyledButton>
            ) : (
              <StyledButton type="primary" onClick={handleSubmit} loading>
                Processing
              </StyledButton>
            )}
          </StyledCardContainerPreview>
          <StyledCardContainerResults>
            {/* Conditionally render results div */}
            {analyze_text.length > 0 ? (
              <AudioContainer>
                {/* Make the audio area scrollable */}
                <TextResults analyze_text={analyze_text} />
              </AudioContainer>
            ) : (
              <StyledEmpty description="No data available" />
            )}
          </StyledCardContainerResults>
        </Row2>
      </Container>
    </>
  );
};

export default UploadText;
