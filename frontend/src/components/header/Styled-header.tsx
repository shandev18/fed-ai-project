// StyledHeader.js
import { Link } from "react-scroll";
import { Dropdown, Space } from "antd";
import { styled } from "styled-components";

export const Nav = styled.div`
  width: 1040px;
  min-width: 1040px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const StyledLink = styled(Link)`
  margin: 1rem;
  //font-weight:500;
  cursor: pointer;

  &:hover {
    color: #006fee;
  }
`;

export const StyledDropDown = styled(Dropdown)`
  cursor: pointer;

  && .ant-dropdown-menu {
    background-color: #fff6f6;
  }

  && .ant-dropdown-menu-item {
    color: black;
  }

  && .ant-dropdown-menu-item:hover {
    color: white;
    background-color: #1d2347;
  }

  &:hover {
    color: #006fee;
  }
`;
