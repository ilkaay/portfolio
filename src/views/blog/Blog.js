import React from "react";
import styled from "styled-components";

import BlogBackground from "../../assets/images/blog-background.jpg";
import BigTitle from "../../components/BigTitle";

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
      <BigTitle text='BLOG' top='5rem' right='5rem' />
    </BlogContainer>
  );
};

export default Blog;
