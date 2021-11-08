import React from "react";
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

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <Logo />
        <SocialMediaIcons />
      </Container>
    </MainContainer>
  );
};

export default Main;
