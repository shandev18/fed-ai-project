import {
  AudioOutlined,
  DownOutlined,
  FontSizeOutlined,
  LogoutOutlined,
  PaperClipOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import acc_pic from "../../assets/accountpic.jpg";

const items = [
  {
    icon: <UserOutlined />,
    label: <a href="/">Profile</a>,
    key: "0",
  },
  {
    icon: <AudioOutlined />,
    label: <a href="/webcam">Webcam</a>,
    key: "1",
  },
  {
    icon: <FontSizeOutlined />,
    label: <a href="/text">Text Input</a>,
    key: "2",
  },
  {
    icon: <PaperClipOutlined />,
    label: <a href="/attachment">Attachment</a>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    //onClick: () => nevigate("/Login"),
    icon: <LogoutOutlined />,
    label: "LogOut",
    key: "4",
  },
];

const Nav = styled.div`
  background: #000000;
  height: 5rem;
  width: 100vw;
  max-width: 107rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
  border-bottom: 1px solid #222222;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: #006fee;
    // padding-bottom: 0.5rem;
    // border-bottom: 3px solid blue;
  }
`;

const StyledDropDown = styled(Dropdown)`
  cursor: pointer;

  && .ant-dropdown-menu {
    background-color: #222222;
  }

  && .ant-dropdown-menu-item {
    color: #ecedee;
  }

  && .ant-dropdown-menu-item:hover {
    background-color: #333333;
  }

  &:hover {
    color: #006fee;
  }
`;

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
      <StyledDropDown
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
      </StyledDropDown>
    </Nav>
  );
};

export default Header;
