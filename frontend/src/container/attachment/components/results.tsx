import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Image } from "antd";
import axios from "axios";
import ReactPlayer from "react-player";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
  justify-content: center;
  align-items: center;
  background-color: #222222;
  border-radius: 3px;
  padding: 10px;
`;

const StyledCardContainerResults = styled.div`
  width: 550px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  background-color: #222222;
  border-radius: 3px;
`;

const AudioContainer = styled.div`
  height: 162px;
  overflow: auto;
`;

const AudioContent = styled.div`
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
    width: 510px !important;
    height: 162px !important;
    display: flex !important;
    justify-content: top !important;
    align-items: top !important;
    text-align: top !important;
    margin-top: -110px !important;
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

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const data = [
    {
      key: "Emotion",
      Facial: result?.video_detail.cumulative_emotion,
      Speech: result?.audio_detail.cumulative_emotion,
      Final: result?.final_prediction,
    },
    {
      key: "Sentiment",
      Facial: "--",
      // Facial: result?.video_detail.cumulative_sentiment,
      Speech: result?.audio_detail.cumulative_sentiment,
      Final: "--",
    },
  ];

  const fetchResults = async () => {
    await axios
      .get(`http://127.0.0.1:8080/analyze_video?job_id=${job}`)
      .then((res) => {
        setResult(res.data[0]);
        var startIndex = res.data[0]?.video_detail?.file_path.indexOf("static");
        var resul = res.data[0]?.video_detail?.file_path.substring(startIndex);

        setVideoPath(`http://127.0.0.1:8080/${resul}`);

        //
        const frames = res.data[0]?.video_detail?.frames?.map(
          (frame, index) => {
            const r2 = `http://127.0.0.1:8080/${frame.frame_path}`;
            return {
              id: index,
              path: r2,
              time: "",
              emotion: "",
            };
          }
        );
        setSlides(frames);
      })
      .catch((err) => {});
  };
  console.log(slides);
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
          <StyledCardContainerPreview style={{ alignItems: "top" }}>
            {/* add video link here */}
            <ReactPlayer
              url={videoPath}
              controls={true}
              width="100%"
              height="30%"
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
                    <Image width={75} height={75} src={slide.path} />
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
              <AudioContent>
                {/* Add your audio content here */}
                <p style={{ fontSize: 15 }}> audio in text will appear here</p>
                <p style={{ marginTop: 70, fontSize: 15 }}>Emotion : Happy</p>
                <p style={{ marginTop: 10, fontSize: 15 }}>Sentiment : --</p>
                {/* <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls /> */}
              </AudioContent>
            </AudioContainer>
          </StyledCardContainerResults>
        </Row2>
      </Container>
    </>
  );
};

export default Uploadvideo;
