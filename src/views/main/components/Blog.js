import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const Blog = () => {
  return (
    <BLOG to='/blog'>
      <h4>Blog</h4>
    </BLOG>
  );
};

export default Blog;
