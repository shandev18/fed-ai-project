// Footer.js
import React from "react";
import { FooterContainer, CopyrightText, SocialLinks, StyledLink } from "./Styled-footer.tsx";

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
