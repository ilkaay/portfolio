import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../../Themes";
import Wrapper from "./components/Wrapper";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Repository = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper />
      </Container>
    </ThemeProvider>
  );
};

export default Repository;
