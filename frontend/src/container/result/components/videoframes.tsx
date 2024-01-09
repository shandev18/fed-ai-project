import React from "react";

const UploadedVideoFrames = () => {
  return (
    <>
      <div className="preview">
        <div className="text-wrapper">/preview</div>
        <div className="cam">
          <img
            className="img"
            alt="Img"
            src="63d3ee59bbd569a2233f64ea-63b6f295fb6825375588b08a-thumbnail-medium-20-41-p-500-1.png"
          />
        </div>
        <div className="frame">
          <div className="group">
            <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
          </div>
          <div className="group">
            <img className="rectangle-2" alt="Rectangle" src="image.svg" />
          </div>
          <div className="group">
            <img
              className="rectangle-2"
              alt="Rectangle"
              src="rectangle-1-2.svg"
            />
          </div>
          <div className="group">
            <img
              className="rectangle-3"
              alt="Rectangle"
              src="rectangle-1-3.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedVideoFrames;
