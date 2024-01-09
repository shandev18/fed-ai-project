import styled from "styled-components";

export const AudioCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #000;
  width: 510px;
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const AudioText = styled.p`
  color: #ecedee !important;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const EmotionSentimentRow = styled.div`
  margin-top: auto; /* Push the row to the bottom */
  display: flex;
  justify-content: space-between;
`;

export const ResultsIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;