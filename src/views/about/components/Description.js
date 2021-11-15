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
      I'm a front-end developer located in India. I love to create simple yet
      beautiful websites with great user experience.
      <br /> <br />
      I'm interested in the whole frontend stack Like trying new things and
      building great projects. I'm an independent freelancer and blogger. I love
      to write blogs and read books.
      <br /> <br />I believe everything is an Art when you put your
      consciousness in it. You can connect with me via social links.
    </Container>
  );
};

export default Description;
