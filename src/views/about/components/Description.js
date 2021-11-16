import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;
const Description = () => {
  return (
    <Container>
      I am a 4th-grade computer engineering student at Eskişehir Osmangazi
      University.
      <br /> <br />
      I am passionate about software development and designing websites. I
      taught myself about front-end development because of that passion. I
      learned HTML, CSS, JS and after that, I learned VUE, React, Angular,
      Typescript and GraphQL to develop more professional apps. I am still
      teaching myself about front-end engineering and currently, I practice with
      the technologies I have learned.
      <br /> <br />I am looking for new things to learn, to be a better
      engineer.
    </Container>
  );
};

export default Description;
