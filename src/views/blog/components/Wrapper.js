import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

import Cards from "./Cards";

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Wrapper = () => {
  return (
    <Container>
      <Layout />
      <Cards />
    </Container>
  );
};

export default Wrapper;
