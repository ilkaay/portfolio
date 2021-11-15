import React from "react";
import BigTitle from "../../../components/BigTitle";
import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import Particle from "../../../components/Particle";
import SocialMediaIcons from "../../../components/SocialMediaIcons";

const Layout = () => {
  return (
    <>
      <Logo theme='dark' />
      <SocialMediaIcons theme='dark' />
      <HomeButton />
      <Particle theme='dark' />
      <BigTitle text='ABOUT' bottom='10%' right='5%' />
    </>
  );
};

export default Layout;
