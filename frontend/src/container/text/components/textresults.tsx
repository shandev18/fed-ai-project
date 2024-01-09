// TextResults.js
import React from "react";
import {
  ScrollableResultsContainer,
  AudioCard,
  AudioText,
  EmotionSentimentRow,
  ResultsIcon,
} from "./Styled-textresults.tsx";
import AngryIcon from "../../../assets/Angery.png";
import SadIcon from "../../../assets/Sad.png";
import NeutralIcon from "../../../assets/Neutral.png";
import HappyIcon from "../../../assets/Happy.png";
import positiveIcon from "../../../assets/positive.png";
import NegativeIcon from "../../../assets/negative.png";

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
