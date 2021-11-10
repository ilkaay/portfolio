import React from "react";
import styled from "styled-components";

import ProfilePicture from "../../../assets/images/profile-img.png";

const Box = styled.div`
  position: fixed;
  left: 17.5%;
  top: 25%;
  transform: translete(-50%, -50%);

  width: 65vw;
  height: 50vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .picture {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.body};
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;
const PersonalInfo = () => {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi, </h1>
          <h2>I'm ...</h2>
          <h6>Write something...</h6>
        </Text>
      </SubBox>
      <SubBox>
        <img className='picture' alt='profile' src={ProfilePicture} />
      </SubBox>
    </Box>
  );
};

export default PersonalInfo;
