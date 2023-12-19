import { Button, Modal } from "antd";
import React from "react";
import styled from "styled-components";
import AngryIcon from "../../../assets/Angery.png";
import SadIcon from "../../../assets/Sad.png";
import NeutralIcon from "../../../assets/Neutral.png";
import HappyIcon from "../../../assets/Happy.png";
import positiveIcon from "../../../assets/positive.png";
import NegativeIcon from "../../../assets/negative.png";

const StyledModal = styled(Modal)`
  && .ant-modal-content {
    background-color: #222222 !important;
  }
  && .ant-modal-title {
    background-color: #222222 !important;
    color: #ecedee !important;
  }
`;

const StyledButton = styled(Button)`
  height: 30px;
  background-color: #333333;
  color: #ecedee !important;
  border-radius: 8px;
  margin-top: 18px;
`;

const ModalResults = styled.div`
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  margin-left: 20px;
`;

const EmotionModal = ({
  handleOk,
  isModalOpen,
  SubHeading,
  FinalEmotionResults,
  EmotionDiv,
  countEmotionOccurrences,
  calculateEmotionPercentages,
  audioChunks,
  ResultsIcon,
  result,
}) => {
  const emotions = audioChunks.map((chunk) => chunk.pred_emotion.toLowerCase());
  const emotionCounts = countEmotionOccurrences(emotions);
  const emotionPercentages = calculateEmotionPercentages(
    emotionCounts,
    audioChunks.length
  );

  const getEmojiForEmotion = (emotion) => {
    switch (emotion) {
      case "angry":
        return <ResultsIcon src={AngryIcon} alt="Angry" />;
      case "neutral":
        return <ResultsIcon src={NeutralIcon} alt="Neutral" />;
      case "happy":
        return <ResultsIcon src={HappyIcon} alt="Happy" />;
      case "sad":
        return <ResultsIcon src={SadIcon} alt="Sad" />;
      default:
        return <ResultsIcon src={NeutralIcon} alt="Neutral" />;
    }
  };

  const mapEmotionToEmoji = (emotion, percentages) => {
    if (emotion && typeof emotion === "string") {
      const emotionKey = emotion.toLowerCase();
      const percentage = percentages[emotionKey];

      if (percentage !== undefined) {
        let textColor;
        switch (emotionKey) {
          case "angry":
            textColor = "#FF0000";
            break;
          case "neutral":
            textColor = "#808080";
            break;
          case "happy":
            textColor = "#FFFF00";
            break;
          case "sad":
            textColor = "#6699CC";
            break;
          default:
            textColor = "white";
        }
        // Display the emotion, percentage, and emoji together
        const emoji = getEmojiForEmotion(emotionKey); // Add a function to get the emoji based on the emotion
        return (
          <>
            <div
              style={{
                padding: "18px",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            >
              <SubHeading>/facial emotions</SubHeading>
              <FinalEmotionResults style={{ color: textColor }}>
                {percentage.toFixed(2)}%
                <span style={{ marginLeft: "20px" }}>{emoji}</span>
              </FinalEmotionResults>
              <EmotionDiv style={{ color: textColor }}>{emotion}</EmotionDiv>
              {/* {sentiment} - {percentage.toFixed(2)}% - {emoji} */}
            </div>
          </>
        );
      }
    }
    return "";
  };

  const mapEmotionToEmojiForSpeech = (emotion, percentages) => {
    if (emotion && typeof emotion === "string") {
      const emotionKey = emotion.toLowerCase();
      const percentage = percentages[emotionKey];

      if (percentage !== undefined) {
        let textColor;
        switch (emotionKey) {
          case "angry":
            textColor = "#FF0000";
            break;
          case "neutral":
            textColor = "#808080";
            break;
          case "happy":
            textColor = "#FFFF00";
            break;
          case "sad":
            textColor = "#6699CC";
            break;
          default:
            textColor = "white";
        }
        // Display the emotion, percentage, and emoji together
        const emoji = getEmojiForEmotion(emotionKey); // Add a function to get the emoji based on the emotion
        return (
          <>
            <div
              style={{
                padding: "18px",
                backgroundColor: "black",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              <SubHeading>/Speech emotions</SubHeading>
              <FinalEmotionResults style={{ color: textColor }}>
                {percentage.toFixed(2)}%
                <span style={{ marginLeft: "20px" }}>{emoji}</span>
              </FinalEmotionResults>
              <EmotionDiv style={{ color: textColor }}>{emotion}</EmotionDiv>
              {/* {sentiment} - {percentage.toFixed(2)}% - {emoji} */}
            </div>
          </>
        );
      }
    }
    return "";
  };

  return (
    <>
      <StyledModal
        title="Emotion Details"
        open={isModalOpen}
        closable={false}
        maskClosable={false}
        footer={[
          <StyledButton type="primary" key="ok" onClick={handleOk}>
            OK
          </StyledButton>,
        ]}
      >
        <ModalResults>
          {/* Display the final emotion prediction */}
          {mapEmotionToEmoji(
            result?.video_detail.cumulative_emotion,
            emotionPercentages
          )}

          {mapEmotionToEmojiForSpeech(
            result?.audio_detail.cumulative_emotion,
            emotionPercentages
          )}

          {/* Display the final sentiment prediction with percentage and emoji */}
        </ModalResults>
      </StyledModal>
    </>
  );
};

export default EmotionModal;
