import React from "react";
import styled from "styled-components";
import BigTitle from "../../../components/BigTitle";
import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import Particle from "../../../components/Particle";
import SocialMediaIcons from "../../../components/SocialMediaIcons";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Wrapper = () => {
  return (
    <Box>
      <Logo theme='dark' />
      <SocialMediaIcons theme='dark' />
      <HomeButton />
      <Particle theme='dark' />
      <BigTitle text='ABOUT' top='10%' left='5%' />
    </Box>
  );
};

export default Wrapper;
