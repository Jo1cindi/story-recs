import React from "react";
import Menu from "../Components/Menu";
import HeroSection from "../Components/HeroSection";
import Recommended from "../Components/Recommended";
import TrendingBooks from "../Components/TrendingBooks";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Menu />

      {/* Hero Section */}
      <HeroSection />

      {/* Recommendations */}
      <Recommended />

      {/* Trending Books */}
      <TrendingBooks/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default LandingPage;
