import React from "react";

import HomeButton from "../../components/HomeButton";
import Logo from "../../components/Logo";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import Blog from "./components/Blog";
import BottomBar from "./components/BottomBar";
import Contact from "./components/Contact";
import Repository from "./components/Repository";

const renderTop = () => {
  return (
    <>
      <Logo />
      <HomeButton />
      <Contact />
    </>
  );
};
const renderBottom = (props) => {
  return (
    <>
      <SocialMediaIcons click={props.click} />
      <BottomBar click={props.click} />
    </>
  );
};

const renderMiddle = (props) => {
  return (
    <>
      <Repository click={props.click} />
      <Blog />
    </>
  );
};

const LinksWrapper = (props) => {
  return [renderTop(), renderMiddle(props), renderBottom(props)];
};

export default LinksWrapper;
