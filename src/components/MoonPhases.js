import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
`;

const flip = keyframes`
0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
`;

const Center = styled.button`
  display: flex;
  position: absolute;
  bottom: ${(props) => (props.click ? "5%" : "50%")};
  right: ${(props) => (props.click ? "5%" : "43%")};
  background: none;
  border: none;
`;

const Moon = styled.div`
  width: 10vw;
  height: 10vh;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.body};
  transform: translateZ(0);

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.text};
    width: 50%;
    height: 100%;
    animation: ${flip} 2s 1s steps(2) infinite alternate;
  }
`;

const Disc = styled.div`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  animation: ${rotate} 4s linear infinite;

  &::before,
  &::after {
    content: " ";
    display: block;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 4s;
    position: absolute;
    backface-visibility: hidden;
  }
  &::before {
    background-color: ${(props) => props.theme.body};
  }
  &::after {
    background-color: ${(props) => props.theme.text};
    transform: rotateY(180deg);
  }
`;

const MoonPhases = () => {
  const [click, setClick] = useState(false);
  return (
    <Center click={click}>
      <Moon
        onClick={() => setClick(!click)}
        style={{
          width: click ? "8rem" : "15rem",
          height: click ? "8rem" : "15rem",
        }}
      >
        <Disc></Disc>
      </Moon>
    </Center>
  );
};

export default MoonPhases;
