import React from "react";
import styled from "styled-components";

const AudioCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #000;
  width: 510px;
  height: 162px;
  padding: 10px;
  margin: 12px;
`;

const AudioText = styled.p`
  margin: 0;
`;

const EmotionSentimentRow = styled.div`
  margin-top: auto; /* Push the row to the bottom */
  display: flex;
  justify-content: space-between;
`;

const AudioContent = ({ audioChunks }) => {
  return (
    <div>
      {audioChunks.map((chunk, index) => (
        <AudioCard key={index}>
          <AudioText>{`Input Text: ${chunk.input_text}`}</AudioText>
          <EmotionSentimentRow>
            <AudioText>{`Predicted Emotion: ${chunk.pred_emotion}`}</AudioText>
            <AudioText>{`Predicted Sentiment: ${chunk.pred_sentiment}`}</AudioText>
          </EmotionSentimentRow>
        </AudioCard>
      ))}
    </div>
  );
};

export default AudioContent;
