import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContentArea = styled.div`
  color: red;
  margin: 0;
  height: 39.5rem;
  overflow: hidden;
  margin-top: 100px;
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
