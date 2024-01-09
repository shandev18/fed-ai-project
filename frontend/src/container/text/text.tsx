import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row1,
  Row2,
  StyledCardContainerPreview,
  StyledCardContainerResults,
  Heading,
  StyledButton,
  StyledTextArea,
  AudioContainer,
  StyledEmpty,
} from "./Styled-text.tsx";
import TextResults from "./components/textresults.tsx";



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
