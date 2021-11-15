import React from "react";
import styled from "styled-components";
import { Develope } from "../../../components/Svgs";

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  background: #5d4157;
  background: linear-gradient(to right, #a8caba, #5d4157);

  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
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
      <Title>
        <Develope width={40} height={40} fill='#040404' /> Frontend Developer
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
