import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AudioContent from "./audiocontent.tsx";
import AngryIcon from "../../../assets/Angery.png";
import SadIcon from "../../../assets/Sad.png";
import NeutralIcon from "../../../assets/Neutral.png";
import HappyIcon from "../../../assets/Happy.png";
import positiveIcon from "../../../assets/positive.png";
import NegativeIcon from "../../../assets/negative.png";
import {
  Container,
  Row1,
  Row2,
  StyledCardContainerPreview,
  AudioContainer,
  Heading,
  SubHeading,
  AudioHeading,
  FinalResults,
  FinalEmotionResults,
  FinalSentimentResults,
  SentimentDiv,
  EmotionDiv,
  SmallCardContainer,
  ResultsIcon,
  StyledModal,
  StyledImage,
  // ... (import your remaining styled components)
} from "./Styled-results.tsx";

// Helper function to count the occurrences of each emotion
const countEmotionOccurrences = (emotions) => {
  return emotions.reduce((counts, emotion) => {
    counts[emotion] = (counts[emotion] || 0) + 1;
    return counts;
  }, {});
};

// Helper function to calculate the percentages based on counts for emotions
const calculateEmotionPercentages = (emotionCounts, totalFrames) => {
  return Object.fromEntries(
    Object.entries(emotionCounts).map(([emotion, count]) => [
      emotion,
      (count / totalFrames) * 100,
    ])
  );
};

// Helper function to count the occurrences of each sentiment
const countSentimentOccurrences = (sentiments) => {
  return sentiments.reduce((counts, sentiment) => {
    counts[sentiment] = (counts[sentiment] || 0) + 1;
    return counts;
  }, {});
};

// Helper function to calculate the percentages based on counts for sentiments
const calculateSentimentPercentages = (sentimentCounts, totalFrames) => {
  return Object.fromEntries(
    Object.entries(sentimentCounts).map(([sentiment, count]) => [
      sentiment,
      (count / (totalFrames * 2)) * 100, // Assuming 20 numbers for each frame result
    ])
  );
};

const Uploadvideo = () => {
  let job = localStorage.getItem("job");
  const [result, setResult] = useState<any>(null);
  const [videoPath, setVideoPath] = useState("");
  const [slides, setSlides] = useState<any>([]);
  const [audioChunks, setAudioChunks] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Fetching emotions and sentiments from the API response
  const emotions = audioChunks.map((chunk) => chunk.pred_emotion.toLowerCase());
  const sentiments = audioChunks.map((chunk) =>
    chunk.pred_sentiment.toLowerCase()
  );

  // Counting occurrences and calculating percentages for emotions
  const emotionCounts = countEmotionOccurrences(emotions);
  const emotionPercentages = calculateEmotionPercentages(
    emotionCounts,
    audioChunks.length
  );

  // Counting occurrences and calculating percentages for sentiments
  const sentimentCounts = countSentimentOccurrences(sentiments);
  const sentimentPercentages = calculateSentimentPercentages(
    sentimentCounts,
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

  const getEmojiForSentiment = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return <ResultsIcon src={positiveIcon} alt="Positive" />;
      case "negative":
        return <ResultsIcon src={NegativeIcon} alt="Negative" />;
      // Add more cases for other sentiments if needed
      default:
        return "";
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
            textColor = "FF0000";
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
            textColor = "red";
        }
        // Display the emotion, percentage, and emoji together
        const emoji = getEmojiForEmotion(emotionKey); // Add a function to get the emoji based on the emotion
        return (
          <>
            <div
              onClick={showModal}
              style={{
                flexGrow: 1,
                padding: "8px",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            >
              <SubHeading>/final emotions</SubHeading>
              <FinalEmotionResults style={{ color: textColor }}>
                {percentage.toFixed(2)}%{emoji}
              </FinalEmotionResults>
              <EmotionDiv style={{ color: textColor }}>{emotion}</EmotionDiv>
            </div>
           
          </>
        );
      }
    }
    return "";
  };

  const mapSentimentToEmoji = (sentiment, percentages) => {
    if (sentiment && typeof sentiment === "string") {
      const sentimentKey = sentiment.toLowerCase();
      const percentage = percentages[sentimentKey];

      if (percentage !== undefined) {
        let textColor;
        switch (sentimentKey) {
          case "positive":
            textColor = "#4336d6";
            break;
          case "negative":
            textColor = "#d95730";
            break;
          default:
            textColor = "white";
        }
        // Display the sentiment, percentage, and emoji together
        const emoji = getEmojiForSentiment(sentimentKey); // Add a function to get the emoji based on the sentiment
        return (
          <div
            style={{ padding: "8px", backgroundColor: "black", flexGrow: 1 }}
          >
            <SubHeading>/final sentiment</SubHeading>
            <FinalSentimentResults style={{ color: textColor }}>
              {percentage.toFixed(2)}% {emoji}
            </FinalSentimentResults>
            <SentimentDiv style={{ color: textColor }}>
              {sentiment}
            </SentimentDiv>
            {/* {sentiment} - {percentage.toFixed(2)}% - {emoji} */}
          </div>
        );
      }
    }
    return "";
  };

  const fetchResults = async () => {
    await axios
      .get(`http://127.0.0.1:8081/analyze_video?job_id=${job}`)
      .then((res) => {
        setResult(res.data[0]);
        var startIndex = res.data[0]?.video_detail?.file_path.indexOf("static");
        var resul = res.data[0]?.video_detail?.file_path.substring(startIndex);

        setVideoPath(`http://127.0.0.1:8081/${resul}`);

        //
        const frames = res.data[0]?.video_detail?.frames?.map(
          (frame, index) => {
            const r2 = `http://127.0.0.1:8081/${frame.frame_path}`;
            return {
              id: index,
              path: r2,
              time: "",
              emotion: "",
            };
          }
        );
        setSlides(frames);
        setAudioChunks(res.data[0]?.audio_detail?.audio_chunks || []);
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
        </Row1>
        <Row2>
          <StyledCardContainerPreview>
            {/* add video link here */}
            <ReactPlayer
              url={videoPath}
              controls={true}
              width="100%"
              height="auto"
            />
            <Row2>
              <SmallCardContainer>
                {slides.length > 0 && (
                  <Slide
                    slidesToShow={5}
                    slidesToScroll={1}
                    arrows={false}
                    autoplay={true}
                    duration={2000}
                  >
                    {slides?.map((slide, index) => (
                      <div key={index}>
                        <StyledImage src={slide.path} />
                      </div>
                    ))}
                  </Slide>
                )}
              </SmallCardContainer>
              {/* <div style={{ minWidth: "35%", maxWidth: "35%" }}>
                
                {mapEmotionToEmoji(
                  result?.final_prediction,
                  emotionPercentages
                )}
              </div> */}
            </Row2>
          </StyledCardContainerPreview>

          
          {/* <StyledModal
            title="Emotion Details"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[]}
          >
            <FinalResults>
             
              {mapEmotionToEmoji(result?.final_prediction, emotionPercentages)}

             
              {mapSentimentToEmoji(
                result?.audio_detail.cumulative_sentiment,
                sentimentPercentages
              )}
            </FinalResults>
            <AudioHeading>/audio</AudioHeading>
            <AudioContainer>
             
              <AudioContent audioChunks={audioChunks} />
            </AudioContainer>
          </StyledModal> */}
        </Row2>
      </Container>
    </>
  );
};

export default Uploadvideo;
