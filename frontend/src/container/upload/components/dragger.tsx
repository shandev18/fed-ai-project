import React from "react";
import { StyledDraggerContainer, StyledDragger, StyledUploadText } from "./Styled-Dragger.tsx";
import { InboxOutlined } from "@ant-design/icons";

const UploadDragger = () => {
   
    return (
        <StyledDraggerContainer>
        <StyledDragger >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <StyledUploadText className="ant-upload-text">
            Click or drag file to this area to upload
          </StyledUploadText>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </StyledDragger>
      </StyledDraggerContainer>
    );
  };
  
  export default UploadDragger;