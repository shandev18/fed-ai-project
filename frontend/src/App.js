import React from "react";
import styled from "styled-components";
import Content from "./components/content/content.tsx";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import Sider from "./components/sider/sider.tsx";
import AppRoutes from "./routes/routes.tsx";
import Uploadvideo from "./container/attachment/components/results.tsx";
import UploadResults from "./container/result/results.tsx";

const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Header />
      {/* <Sider /> */}
      {/* <UploadResults /> */}
      <AppRoutes />
      <Footer />
    </AppContainer>
  );
};

export default App;
