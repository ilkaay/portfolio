import React from "react";
import styled from "styled-components";
import HomeButton from "../../components/HomeButton";
import Logo from "../../components/Logo";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Repository from "./components/Repository";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  padding: 2rem;
`;

const Main = () => {
  return (
    <MainContainer>
      <HomeButton />
      <Logo />
      <SocialMediaIcons />
      <Contact />
      <Blog />
      <Repository />
    </MainContainer>
  );
};

export default Main;
