import React from "react";
import { Route, Routes } from "react-router-dom";
import Webcam from "../container/webcam/webcam.tsx";
import Text from "../container/text/textresults.tsx";
import Attachment from "../container/attachment/attachment.tsx";
import Uploadvideo from "../container/attachment/components/results.tsx";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/webcam" element={<Webcam />} />
      <Route path="/text" element={<Text />} />
      <Route path="/attachment" element={<Attachment />} />
      <Route path="/attachmentResults" element={<Uploadvideo />} />
    </Routes>
  );
}
export default AppRoutes;
