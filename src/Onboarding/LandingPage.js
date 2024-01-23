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

      <div className="page-sections">
        <div className="section-1">
          {/* Hero Section */}
          <HeroSection />
        </div>

        <div className="section-2">
          {/* Recommendations */}
          <Recommended />
        </div>

        <div className="section-3">
          {/* Trending Books */}
          <TrendingBooks />
        </div>

        <div className="section-4">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
