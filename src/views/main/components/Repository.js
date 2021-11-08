import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const REPOSITORY = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const Repository = (props) => {
  return (
    <REPOSITORY click={props.click} to='/repository'>
      <h4>Repository</h4>
    </REPOSITORY>
  );
};

export default Repository;
