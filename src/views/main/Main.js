import React, { useState } from "react";
import styled from "styled-components";

import MoonPhases from "../../components/MoonPhases";
import LinksWrapper from "./LinksWrapper";
import PersonalInfo from "./components/PersonalInfo";

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

const Icon = styled.button`
  display: flex;
  position: absolute;
  bottom: ${(props) => (props.click ? "5%" : "50%")};
  right: ${(props) => (props.click ? "5%" : "43%")};
  background: none;
  border: none;
  transition: all 1s ease;
`;

const PersonalInfoWrapper = styled.div`
  position: absolute;
  background-color: #040404;
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <PersonalInfoWrapper
        style={{
          width: click ? "50%" : "0%",
          height: click ? "100%" : "0%",
        }}
      />
      <LinksWrapper click={click} />
      <Icon click={click} onClick={() => setClick(!click)}>
        <MoonPhases click={click} />
      </Icon>
      {click && <PersonalInfo click={click} />}
    </MainContainer>
  );
};

export default Main;
