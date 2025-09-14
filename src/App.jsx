// src/App.js

import React from "react";

// 1. Import all the components you created
import TopContent from "./components/TopContent";
import Header from "./components/Header";
import Billboard from "./components/Billboard";
import ClientLogos from "./components/ClientLogos";
import BestSellingBook from "./components/BestSellingBook";
import QuoteOfDay from "./components/QuoteOfDay";
import Subscribe from "./components/Subscribe";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

function App() {
  // 2. Arrange the components in the correct order
  return (
    <>
      <div id="header-wrap">
        <TopContent />
        <Header />
      </div>

      <Billboard />
      <ClientLogos />
      <BestSellingBook />
      <QuoteOfDay />
      <Subscribe />
      <LatestArticles />
      <Footer />
    </>
  );
}

export default App;
