// Sider.js
import React from "react";
import { AudioOutlined, FontSizeOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Sidebar, Icon, IconBox, StyledLink } from "./Styled-sider.tsx";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Icon>
      <StyledLink to={to} onClick={handleClick}>
        <IconBox>{children}</IconBox>
      </StyledLink>
    </Icon>
  );
};

const Sider = () => {
  return (
    <Sidebar>
      <SidebarItem to="/webcam">
        <AudioOutlined />
      </SidebarItem>
      <SidebarItem to="/text">
        <FontSizeOutlined />
      </SidebarItem>
      <SidebarItem to="/attachment">
        <PaperClipOutlined />
      </SidebarItem>
    </Sidebar>
  );
};

export default Sider;
