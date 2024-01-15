import React from "react";
import Menu from "../Components/Menu";
import HeroSection from "../Components/HeroSection";
import Recommended from "../Components/Recommended";

const LandingPage = () => {
  return (
    <div>
      <Menu />

      {/* Hero Section */}
      <HeroSection />

      {/* Recommendations */}
      <Recommended />
    </div>
  );
};

export default LandingPage;
