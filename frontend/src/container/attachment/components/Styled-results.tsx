// StyledUploadVideo.js
import styled from "styled-components";
import { Image, Modal } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  margin: 100px auto;
`;

export const Row1 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Row2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
`;

export const StyledCardContainerPreview = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #222222;
  border-radius: 3px;
  padding: 10px;
  gap: 8px;
`;

export const AudioContainer = styled.div`
  overflow: auto;
`;

export const Heading = styled.div`
  text-align: center;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

export const SubHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

export const AudioHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin-top: 6px;
  color: white;
`;

export const FinalResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  gap: 20px;
`;

export const FinalEmotionResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  text-align: left;
  font-size: 30px;
`;

export const FinalSentimentResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  text-align: left;
  font-size: 30px;
`;

export const SentimentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: black;
  text-align: left;
`;

export const EmotionDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
`;

export const SmallCardContainer = styled.div`
  min-width: 98%;
  max-width: 68%;
`;

export const ResultsIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const StyledModal = styled(Modal)`
  && .ant-modal-content {
    background-color: #222222 !important;
    width: max-content;
    height: 70vh;
    overflow-y: scroll;
    border-radius: 0px;
  }
  && .ant-modal-title {
    background-color: #222222 !important;
    color: #ecedee !important;
  }

  && .ant-modal-close-icon {
    color: #ecedee !important;
  }
`;

export const StyledImage = styled(Image)`
object-fit: cover !important;
width: 100px !important;
height: 100px !important;
 
`;
