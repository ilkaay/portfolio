import React from "react";
import styled from "styled-components";

import Layout from "../../blog/components/Layout";
import DevelopeBox from "./DevelopeBox";
import Particle from "./Particle";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = () => {
  return (
    <MainContainer>
      <Particle theme='light' />
      <Layout />
      <DevelopeBox />
    </MainContainer>
  );
};

export default Wrapper;
