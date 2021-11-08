import React from "react";
import styled from "styled-components";

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
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.text};
  font-size: 1.6rem;
`;
const SocialMediaIcons = () => {
  return (
    <Icons>
      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://github.com/ilkaay'
      >
        <Icon className='bi bi-github' />
      </IconLink>

      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://twitter.com/ilkaayyuksel'
      >
        <Icon className='bi bi-twitter' />
      </IconLink>

      <IconLink
        rel='noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/ilkaayyuksel'
      >
        <Icon className='bi bi-linkedin' />
      </IconLink>
    </Icons>
  );
};

export default SocialMediaIcons;
