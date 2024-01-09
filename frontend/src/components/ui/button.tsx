import React from "react";
import XButton from "antd/es/button";
import styled from "styled-components";

export const Btn = styled(XButton)`
  color: #f5f5f5 !important;
  background-color: #262e5b !important;
  border-radius: 5px;
`;
const Button = ({ type, href, children }) => {
  if (type === "link") {
    return (
      <Btn type={type} href={href}>
        {children}
      </Btn>
    );
  } else {
    return <Btn type={type}>{children}</Btn>;
  }
};

export default Button;
