import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CardBox = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${CardBox}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h5`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${CardBox}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Date = styled.span`
  display: flex;
  justify-content: end;
  padding: 0.5rem 0;
`;
const Card = (props) => {
  const { name, date, imgSrc, link } = props.blog;

  return (
    <CardBox target='_blank' to={{ pathname: link }}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Date>{date}</Date>
    </CardBox>
  );
};

export default Card;
