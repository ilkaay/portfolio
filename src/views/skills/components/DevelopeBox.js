import React from "react";
import styled from "styled-components";
import { Develope } from "../../../components/Svgs";

import background from "../../../assets/images/background.png";
const Box = styled.div`
  border: 1px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  &:hover {
    border: 1px solid #33a49d;
    box-shadow: 0 0 8px 6px rgba(51, 164, 157, 0.3);
  }
`;

const Blur = styled.div`
  padding: 3rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
`;

const Title = styled.h2`
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.body};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const DevelopeBox = () => {
  return (
    <Box>
      <Blur>
        <Title>
          <Develope width={40} height={40} fill='#f4f4f4' /> Frontend Developer
        </Title>
        <Description>Something ...</Description>
        <Description>
          <strong>Skills</strong>
          <p>
            Html, Css, Js, React, Redux, Vue, Vuex, Angular, Ngrx, Bootstrap
            etc.
          </p>
        </Description>
        <Description>
          <strong>Tools</strong>
          <p>VScode, Github etc.</p>
        </Description>
      </Blur>
    </Box>
  );
};

export default DevelopeBox;
