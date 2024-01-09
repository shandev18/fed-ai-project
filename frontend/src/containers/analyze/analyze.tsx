import { useNavigate } from "react-router-dom";
import React from "react";
import Text from "../../components/ui/text.tsx";
import { BtnWrapper, Container } from "./styled-analyze.tsx";
import {
  ArrowRightOutlined,
  FontSizeOutlined,
  PaperClipOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const Analyze = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text type={"h1"} cls="">
        Analyze Emotions
      </Text>
      <Text type={"p"} cls="w-350">
        get in depth emotion analysis of your customers.
      </Text>
      <BtnWrapper
        className="mywrapper"
        onClick={() => {
          navigate("/upload");
        }}
      >
        <PaperClipOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
        <Text type={"p"} cls="flx-grw align-left color-black">
          Analyze Video
        </Text>
        <ArrowRightOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
      </BtnWrapper>

      <BtnWrapper
        className="mywrapper"
        onClick={() => {
          navigate("/webcam");
        }}
      >
        <VideoCameraOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
        <Text type={"p"} cls="flx-grw align-left color-black">
          Live Stream
        </Text>
        <ArrowRightOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
      </BtnWrapper>

      <BtnWrapper
        className="mywrapper"
        onClick={() => {
          navigate("/text");
        }}
      >
        <FontSizeOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
        <Text type={"p"} cls="flx-grw align-left color-black">
          Analyze Text
        </Text>
        <ArrowRightOutlined style={{ fontSize: "20px", color: "#c4c4c4" }} />
      </BtnWrapper>
    </Container>
  );
};

export default Analyze;
