import React from "react";
import styled from "styled-components";

const CONTACT = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Contact = () => {
  return (
    <CONTACT
      rel='noreferrer'
      target='_blank'
      href='mailto:ilkaay.yuksel@gmail.com'
    >
      <h4>Say hi...</h4>
    </CONTACT>
  );
};

export default Contact;
