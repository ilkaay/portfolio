import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Layout from "./Layout";
import Picture from "./Picture";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Wrapper = () => {
  return (
    <Box>
      <Layout />
      <Picture />
      <Description />
    </Box>
  );
};

export default Wrapper;
