import React from "react";
import styled from "styled-components";
import Content from "./components/content/content.tsx";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import Sider from "./components/sider/sider.tsx";
import AppRoutes from "./routes/routes.tsx";
import Uploadvideo from "./container/attachment/components/results.tsx";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Sider />
      {/* <Uploadvideo /> */}
      <AppRoutes />
      <Footer />
    </AppContainer>
  );
};

export default App;
