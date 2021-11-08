import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeButton from "../../components/HomeButton";
import Logo from "../../components/Logo";
import SocialMediaIcons from "../../components/SocialMediaIcons";

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
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const REPOSITORY = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <Logo />
        <SocialMediaIcons />

        <Contact
          rel='noreferrer'
          target='_blank'
          href='mailto:ilkaay.yuksel@gmail.com'
        >
          <h4>Say hi...</h4>
        </Contact>

        <BLOG to='/blog'>
          <h3>Blog</h3>
        </BLOG>

        <REPOSITORY to='/repository'>
          <h3>Repository</h3>
        </REPOSITORY>
      </Container>
    </MainContainer>
  );
};

export default Main;
