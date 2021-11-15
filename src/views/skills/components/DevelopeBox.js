import React from "react";
import styled from "styled-components";
import { Develope } from "../../../components/Svgs";

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Box}:hover & {
    color: ${(props) => props.theme.body};
  }
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
      <Title>
        <Develope width={40} height={40} /> Frontend Developer
      </Title>
      <Description>Something ...</Description>
      <Description>
        <strong>Skills</strong>
        <p>
          Html, Css, Js, React, Redux, Vue, Vuex, Angular, Ngrx, Bootstrap etc.
        </p>
      </Description>
      <Description>
        <strong>Tools</strong>
        <p>VScode, Github etc.</p>
      </Description>
    </Box>
  );
};

export default DevelopeBox;
