import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BottombarContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = () => {
  return (
    <BottombarContainer>
      <ABOUT to='/about'>
        <h4>About...</h4>
      </ABOUT>

      <SKILLS to='/skills'>
        <h4>My Skills...</h4>
      </SKILLS>
    </BottombarContainer>
  );
};

export default BottomBar;
