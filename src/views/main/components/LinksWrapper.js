import React from "react";

import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import Blog from "./Blog";
import BottomBar from "./BottomBar";
import Contact from "./Contact";
import Repository from "./Repository";

const renderTop = (props) => {
  return (
    <>
      <Logo theme={props.click ? "dark" : "light"} />
      <HomeButton />
      <Contact />
    </>
  );
};
const renderBottom = (props) => {
  return (
    <>
      <SocialMediaIcons theme={props.click ? "dark" : "light"} />
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
  return [renderTop(props), renderMiddle(props), renderBottom(props)];
};

export default LinksWrapper;
