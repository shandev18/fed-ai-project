// Styled-inputText.js
import styled from "styled-components";
import { Input } from "antd";

export const Inputdiv = styled.div`
  width: 30vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTextArea = styled(Input.TextArea)`
  min-height: 320px !important;
  max-height: 320px !important;
  background-color: #c1cfed !important;
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
