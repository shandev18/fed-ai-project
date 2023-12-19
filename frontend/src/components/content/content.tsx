import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContentArea = styled.div`
  color: red;
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
