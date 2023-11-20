import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

const StyledDraggerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 370px;
`;

const StyledDragger = styled(Dragger)`
  width: 500px;
  color: white;
  background-color: #222222;
  & :hover {
    background-color: #333333 !important;
  }

  && .ant-upload {
    background-color: #222222;
    border: none;
  }

  && .ant-upload-text {
    color: white !important;
  }

  && .ant-upload-hint {
    color: #737578 !important;
  }

  && .anticon {
    color: #006fee !important;
  }
`;

const StyledUploadText = styled.p`
  color: white;
`;

const Attachment = () => {
  const navigate = useNavigate();
  const props = {
    name: "video",
    multiple: false,
    method: "post",
    crossOrigin: "use-credentials",
    action: "http://127.0.0.1:8080/analyze_video",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        localStorage.setItem("job", info.file.response.job_id);
        navigate("/attachmentResults");
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <StyledDraggerContainer>
      <StyledDragger {...props}>
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

export default Attachment;
