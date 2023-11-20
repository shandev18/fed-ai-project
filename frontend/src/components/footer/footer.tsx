import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #000000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #222222;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

const CopyrightText = styled.p`
  color: white;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    color: #006fee;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>Copyrights &copy; 2023</CopyrightText>
      <SocialLinks>
        <StyledLink>fb</StyledLink>
        <StyledLink>yt</StyledLink>
        <StyledLink>ig</StyledLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
