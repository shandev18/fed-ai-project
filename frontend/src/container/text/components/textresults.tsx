import React from "react";
import styled from "styled-components";
import AngryIcon from "../../../assets/Angery.png";
import SadIcon from "../../../assets/Sad.png";
import NeutralIcon from "../../../assets/Neutral.png";
import HappyIcon from "../../../assets/Happy.png";
import positiveIcon from "../../../assets/positive.png";
import NegativeIcon from "../../../assets/negative.png";

const ScrollableResultsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
`;

const AudioCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #000;
  width: 510px;
  padding: 20px;
  gap: 20px;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const AudioText = styled.p`
  color: #ecedee !important;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const EmotionSentimentRow = styled.div`
  margin-top: auto; /* Push the row to the bottom */
  display: flex;
  justify-content: space-between;
`;

const ResultsIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const mapEmotionToEmoji = (emotion) => {
  if (emotion && typeof emotion === "string") {
    switch (emotion.toLowerCase()) {
      case "angry":
        return <ResultsIcon src={AngryIcon} alt="Angry" title="Angry" />;
      case "neutral":
        return <ResultsIcon src={NeutralIcon} alt="Neutral" title="Neutral" />;
      case "happy":
        return <ResultsIcon src={HappyIcon} alt="Happy" title="Happy" />;
      case "positive":
        return (
          <ResultsIcon src={positiveIcon} alt="Positive" title="Positive" />
        );
      case "negative":
        return (
          <ResultsIcon src={NegativeIcon} alt="Negative" title="Negative" />
        );
      case "sad":
        return <ResultsIcon src={SadIcon} alt="Sad" title="Sad" />;
      default:
        return "";
    }
  } else {
    return "";
  }
};

const TextResults = ({ analyze_text }) => {
  return (
    <ScrollableResultsContainer>
      {analyze_text?.map((chunk, index) => (
        <AudioCard key={index}>
          <AudioText>{` ${chunk.sentence}`}</AudioText>
          <EmotionSentimentRow>
            <AudioText>
              Predicted Emotion: {mapEmotionToEmoji(chunk.pred_emotion)}
            </AudioText>
            <AudioText>
              Predicted Sentiment: {mapEmotionToEmoji(chunk.pred_sentiment)}
            </AudioText>
          </EmotionSentimentRow>
        </AudioCard>
      ))}
    </ScrollableResultsContainer>
  );
};

export default TextResults;
