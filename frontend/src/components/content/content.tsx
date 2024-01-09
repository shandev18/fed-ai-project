import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContentArea = styled.div`
  color: #FFF6F6;
  margin: 0;
`;

const Content = () => {
  return (
    <>
      <ContentArea>
        <Outlet />
      </ContentArea>
    </>
  );
};

export default Content;
