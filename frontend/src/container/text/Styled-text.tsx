// StyledUploadText.js
import styled from "styled-components";
import { Button, Empty, Input } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-items: flex-start;
`;

export const StyledCardContainerPreview = styled.div`
  width: 550px;
  min-height: 400px;
  padding: 0 20px;
  padding-top: 20px;
  background-color: #F5F5F5;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const StyledCardContainerResults = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  background-color: #F5F5F5;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const Heading = styled.div`
  text-align: center;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

export const StyledButton = styled(Button)`
  height: 30px;
  background-color: #333333;
  color: #ecedee important;
  border-radius: 8px;
  margin-top: 18px;
`;

export const StyledTextArea = styled(Input.TextArea)`
  min-height: 320px !important;
  max-height: 320px !important;
  background-color: #C1CFED !important;
  color: white;
  border: 1px solid #dedede !important;
  font-family: "source-code-pro", monospace;
  font-weight: 200 !important;

  &::placeholder {
    color: white !important;
  }

  &:hover {
    color: white !important;
    background-color: #9eb1db !important;
  }
`;

export const AudioContainer = styled.div`
  overflow: auto;
`;

export const StyledEmpty = styled(Empty)`
  && .ant-empty-description {
    color: white !important;
  }
`;
