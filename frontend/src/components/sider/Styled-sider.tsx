// StyledSider.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`;

export const Icon = styled.i`
  color: white;
  font-size: 24px;
  margin: 10px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background-color: #262E5B;
  ;
  margin-bottom: -15px;
  cursor: pointer;
  color: white;

  &:hover {
    //color: #006fee;
    background-color: #1d2347;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

