// StyledUploader.js
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

 max-width: 40vw;
  color: white;
  background-color: #dedede;
  & :hover {
    background-color:  #FFF6F6 !important;
  }

  && .ant-upload {
    background-color: #FFF6F6;
    border: 3px dot #38393b;
    padding: 3rem 5rem;
  }

  && .ant-upload-list-item-name {
    background-color: #FFF6F6;
    color: #262E5B;
  }
  && .ant-upload-text {
    color: #262E5B !important;
    font-weight: 500 !important;
  }

  && .ant-upload-hint {
    color: #9fa1a6 !important;
    font-weight: 500 !important;
  }

  && .anticon {
    color: #262E5B !important;
  }
`;

export const StyledUploadText = styled.p`
  color: white;
`;

