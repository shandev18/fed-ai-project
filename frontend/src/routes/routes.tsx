import React from "react";
import { Route, Routes } from "react-router-dom";
import Webcam from "../container/webcam/webcam.tsx";
import Text from "../containers/text/input.tsx";
import Uploadvideo from "../container/attachment/components/results.tsx";
import Upload from "../containers/upload/upload.tsx";
import Analyze from "../containers/analyze/analyze.tsx";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/webcam" element={<Webcam />} />
      <Route path="/text" element={<Text />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/uploadResults" element={<Uploadvideo />} />
    </Routes>
  );
}
export default AppRoutes;
