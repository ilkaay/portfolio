import React from "react";
import styled from "styled-components";

import BlogBackground from "../../assets/images/blog-background.jpg";
import Layout from "./components/Layout";

const BlogContainer = styled.div`
  background-image: url(${BlogBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;
const Blog = () => {
  return (
    <BlogContainer>
      <Container>
        <Layout />
      </Container>
    </BlogContainer>
  );
};

export default Blog;
