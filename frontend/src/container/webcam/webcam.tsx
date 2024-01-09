import React, { useState } from "react";

import Capture from "./components/Capture.tsx";



const WebcamMain = () => {
  const [jobId, setJobId] = useState(null);

  return (
    <>
      <Capture jobId={jobId} setJobId={setJobId} />
    </>
  );
};

export default WebcamMain;
