import React from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  left: 2rem;

  z-index: 3;
`;

const IconLink = styled.a`
  margin: 0.5rem 0;
`;

const Icon = styled.i`
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  font-size: 1.8rem;
`;
const SocialMediaIcons = (props) => {
  return (
    <Icons>
      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://github.com/ilkaay'
      >
        <Icon theme={props.theme} className='bi bi-github' />
      </IconLink>

      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://twitter.com/ilkaayyuksel'
      >
        <Icon theme={props.theme} className='bi bi-twitter' />
      </IconLink>

      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/ilkaayyuksel'
      >
        <Icon theme={props.theme} className='bi bi-linkedin' />
      </IconLink>
    </Icons>
  );
};

export default SocialMediaIcons;
