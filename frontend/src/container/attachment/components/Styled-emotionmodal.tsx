// StyledEmotionModal.js
import styled from "styled-components";
import { Modal, Button } from "antd";

export const StyledModal = styled(Modal)`
  && .ant-modal-content {
    background-color: #222222 !important;
  }
  && .ant-modal-title {
    background-color: #222222 !important;
    color: #ecedee !important;
  }
`;

export const StyledButton = styled(Button)`
  height: 30px;
  background-color: #333333;
  color: #ecedee !important;
  border-radius: 8px;
  margin-top: 18px;
`;

export const ModalResults = styled.div`
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  margin-left: 20px;
`;

