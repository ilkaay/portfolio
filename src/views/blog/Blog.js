import React from "react";
import styled from "styled-components";

import BlogBackground from "../../assets/images/blog-background.jpg";

import Wrapper from "./components/Wrapper";

const BlogContainer = styled.div`
  background-image: url(${BlogBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  width: 100vw;
`;

const Blog = () => {
  return (
    <BlogContainer>
      <Wrapper />
    </BlogContainer>
  );
};

export default Blog;
