import React from "react";
import { StyledDraggerContainer, StyledDragger, StyledUploadText } from "./styled-upload.tsx";
import { InboxOutlined } from "@ant-design/icons";
import Button from "../../../components/ui/button.tsx";

const Uploader = () => {
   
    return (
        <StyledDraggerContainer>
        <StyledDragger>
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
  
  export default Uploader;