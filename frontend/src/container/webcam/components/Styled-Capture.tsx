// StyledWebcamMain.js
import styled from "styled-components";
import { Button, Empty } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  margin: 180px auto;
`;

export const Row1 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Row2 = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledCardContainerPreview = styled.div`
  width: 550px;
  height: 400px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

export const StyledCardContainerResults = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  background-color: #222222;
`;

export const StyledEmpty = styled(Empty)`
  && .ant-empty-description {
    color: white !important;
  }
`;

export const StyledButton = styled(Button)`
  height: 30px;
  background-color: #333333;
  color: #ecedee !important;
  border-radius: 8px;
  margin-top: 18px;
`;

export const Heading = styled.div`
  text-align: center;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

export const FinalResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  gap: 20px;
`;

export const styles = {
  opacity: "0",
  width: "0",
  padding: "0",
};

