import React from "react";
import styled, { keyframes } from "styled-components";
import spaceman from "../../../assets/images/spaceman.png";

const float = keyframes`
  0%{transform: translateY(-10px)}
  50% { transform: translateY(-15px) translateX(15px) }
  100%{transform: translateY(-10px)}
  
`;

const Image = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Picture = () => {
  return (
    <Image>
      <img src={spaceman} alt='spaceman' />
    </Image>
  );
};

export default Picture;
