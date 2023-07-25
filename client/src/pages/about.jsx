import React from "react";
import Header from "../components/Header";

import aboutBanner from "../assets/banners/aboutBanner.jpg";

const About = () => {
  return (
    <div>
      <Header banner={aboutBanner} pageTitle="ABOUT PUZZLES" />
    </div>
  );
};

export default About;
