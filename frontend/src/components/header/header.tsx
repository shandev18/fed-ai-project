// Header.js
import React from "react";
import { Nav, StyledLink } from "./Styled-header.tsx";
import Button from "../ui/button.tsx";
// import {
//   AudioOutlined,
//   FontSizeOutlined,
//   LogoutOutlined,
//   PaperClipOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// const items = [
//   {
//     icon: <UserOutlined />,
//     label: <a href="/">Profile</a>,
//     key: "0",
//   },
//   {
//     icon: <AudioOutlined />,
//     label: <a href="/webcam">Webcam</a>,
//     key: "1",
//   },
//   {
//     icon: <FontSizeOutlined />,
//     label: <a href="/text">Text Input</a>,
//     key: "2",
//   },
//   {
//     icon: <PaperClipOutlined />,
//     label: <a href="/attachment">Attachment</a>,
//     key: "3",
//   },
//   {
//     type: "divider",
//   },
//   {
//     icon: <LogoutOutlined />,
//     label: "LogOut",
//     key: "4",
//   },
// ];

const Header = () => {
  return (
    <Nav>
      <div>Logo</div>
      <div>
        <StyledLink>Home</StyledLink>
        <StyledLink>Features</StyledLink>
        <StyledLink>Pricing</StyledLink>
        <StyledLink>FAQs</StyledLink>
        <StyledLink>Contact</StyledLink>
      </div>
      <Button type={"link"} href={"/analyze"}>
        Analyze
      </Button>

      {/* <StyledDropDown
        getPopupContainer={(parent) => parent}
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
              }}
              src={acc_pic}
            />
            My Account
            <DownOutlined />
          </Space>
        </a>
      </StyledDropDown> */}
    </Nav>
  );
};

export default Header;
