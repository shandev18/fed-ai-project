// Styled Dragger screen
import styled from "styled-components";
import { Upload } from "antd";

export const { Dragger } = Upload;

export const StyledDraggerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledDragger = styled(Dragger)`
  width: 500px;
  color: white;
  background-color: #F5F5F5;
  & :hover {
    background-color:  #F5F5F5 !important;
  }

  && .ant-upload {
    background-color: #F5F5F5;
    border: 1px solid #dedede;
  }

  && .ant-upload-list-item-name {
    background-color: #F5F5F5;
    color: black;
  }
  && .ant-upload-text {
    color: black !important;
  }

  && .ant-upload-hint {
    color: #737578 !important;
  }

  && .anticon {
    color: black !important;
  }
`;

export const StyledUploadText = styled.p`
  color: white;
`;

