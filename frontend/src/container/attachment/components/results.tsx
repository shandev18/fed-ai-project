import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Image } from "antd";
import axios from "axios";
import ReactPlayer from "react-player";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AudioContent from "./audiocontent.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70vh;
  margin: 140px 180px 180px;
`;

const Row1 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Row2 = styled.div`
  width: 100%;
  display: flex;
`;

const StyledCardContainerPreview = styled.div`
  width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #222222;
  border-radius: 3px;
`;

const StyledCardContainerResults = styled.div`
  width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  background-color: #222222;
  border-radius: 3px;
`;

const AudioContainer = styled.div`
  overflow: auto;
`;

const AudioContentArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #000;
  width: 510px;
  height: 162px;
  padding: 10px;
`;

const Heading = styled.div`
  text-align: center;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 6px;
  color: #222222;
  font-weight: 700;
`;

const AudioHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ;
  text-align: left;
  margin-bottom: 6px;
  margin-left: 45px;
`;

const StyledTable = styled(Table)`
  border: 0;
  && .ant-table-pagination {
    display: none;
  }

  && .ant-table {
    background-color: #000 !important;
    color: white !important;
    border-radius: 0rem !important;
    width: 100% !important;
    height: auto !important;
    display: flex !important;
    justify-content: top !important;
    align-items: top !important;
    text-align: top !important;
    margin-top: 20px !important;
    margin-bottom: 20px;
  }

  && .ant-table-cell {
    background-color: #000 !important;
    color: white !important;
    border: 0;
    font-family: "source-code-pro", monospace;
    font-weight: 200 !important;
  }

  && .ant-table-container {
    width: 510px;
  }
`;

const SmallCardContainer = styled.div`
  margin-top: 20px;
  border-radius: 3px;
  margin-left: 15px;
`;

const columns = [
  {
    title: "Results",
    dataIndex: "key",
    rowScope: "row",
  },
  {
    title: "Facial",
    dataIndex: "Facial",
  },
  {
    title: "Speech",
    dataIndex: "Speech",
  },

  {
    title: "Final",
    dataIndex: "Final",
  },
];

const Uploadvideo = () => {
  let job = localStorage.getItem("job");
  const [result, setResult] = useState<any>(null);
  const [video, setVideo] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [slides, setSlides] = useState<any>([]);
  const [audioChunks, setAudioChunks] = useState<any>([]);

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const mapEmotionToEmoji = (emotion) => {
    if (emotion && typeof emotion === "string") {
      switch (emotion.toLowerCase()) {
        case "angry":
          return <span style={{ color: "red" }}>😠</span>;
        case "neutral":
          return <span style={{ color: "black" }}>😐</span>;
        case "happy":
          return <span style={{ color: "green" }}>😊</span>;
        case "positive":
          return <span style={{ color: "green" }}>👍</span>;
        case "negative":
          return <span style={{ color: "red" }}>👎</span>;
        // Add more cases for other emotions as needed
        default:
          return "";
      }
    } else {
      return "";
    }
  };

  const data = [
    {
      key: "Emotion",
      Facial: mapEmotionToEmoji(result?.video_detail.cumulative_emotion),
      Speech: mapEmotionToEmoji(result?.audio_detail.cumulative_emotion),
      Final: mapEmotionToEmoji(result?.final_prediction),
    },
    {
      key: "Sentiment",
      Facial: mapEmotionToEmoji(result?.video_detail.cumulative_sentiment),
      Speech: mapEmotionToEmoji(result?.audio_detail.cumulative_sentiment),
      Final: mapEmotionToEmoji(result?.final_prediction_sentiment),
    },
  ];

  const fetchResults = async () => {
    await axios
      .get(`http://127.0.0.1:8081/analyze_video?job_id=${job}`)
      .then((res) => {
        setResult(res.data[0]);
        var startIndex = res.data[0]?.video_detail?.file_path.indexOf("static");
        var resul = res.data[0]?.video_detail?.file_path.substring(startIndex);

        setVideoPath(`http://127.0.0.1:8081/${resul}`);

        //
        const frames = res.data[0]?.video_detail?.frames?.map(
          (frame, index) => {
            const r2 = `http://127.0.0.1:8081/${frame.frame_path}`;
            return {
              id: index,
              path: r2,
              time: "",
              emotion: "",
            };
          }
        );
        setSlides(frames);
        setAudioChunks(res.data[0]?.audio_detail?.audio_chunks || []);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchResults();
  }, []);
  // console.log(result);
  // console.log(result && result[0]?.video_detail?.file_path);

  return (
    <>
      <Container>
        <Row1>
          <Heading>/preview</Heading>
          <Heading>/results</Heading>
        </Row1>
        <Row2>
          <StyledCardContainerPreview>
            {/* add video link here */}
            <ReactPlayer
              url={videoPath}
              controls={true}
              width={510}
              height={360}
            />
            <SmallCardContainer>
              <Slide
                slidesToShow={5}
                slidesToScroll={1}
                arrows={false}
                autoplay={false}
              >
                {slides?.map((slide, index) => (
                  <div key={index}>
                    {/* <div
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slide.path})`,
                        width: "120px",
                        height: "100px",
                        borderRadius: "3px",
                      }}
                    ></div> */}
                    <Image src={slide.path} />
                  </div>
                ))}
              </Slide>
            </SmallCardContainer>
          </StyledCardContainerPreview>

          <StyledCardContainerResults>
            {/* Results section */}

            <StyledTable
              getPopupContainer={(parent) => parent}
              columns={columns}
              dataSource={data}
              // bordered
            />
            <AudioHeading>/audio</AudioHeading>
            <AudioContainer>
              {/* Make the audio area scrollable */}
              <AudioContent audioChunks={audioChunks} />
            </AudioContainer>
          </StyledCardContainerResults>
        </Row2>
      </Container>
    </>
  );
};

export default Uploadvideo;
