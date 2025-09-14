// src/App.jsx
import React, { useEffect } from "react"; // <-- 1. IMPORT useEffect HERE

// Import all your components
import TopContent from "./components/TopContent.jsx";
import Header from "./components/Header.jsx";
import Billboard from "./components/Billboard.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import FeaturedBooks from "./components/BestSellingBook.jsx";
import QuoteOfDay from "./components/QuoteOfDay.jsx";
import Subscribe from "./components/Subscribe.jsx";
import LatestArticles from "./components/LatestArticles.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // 2. ADD THIS ENTIRE HOOK
  // This initializes the Animate On Scroll plugin for the whole page.
  useEffect(() => {
    // Check if the AOS global object exists on the window
    if (window.AOS) {
      window.AOS.init({
        duration: 800, // example duration
        once: true, // only animate once
      });
    }
  }, []); // The empty array ensures this runs only once when the app mounts

  // 3. Your component layout stays exactly the same
  return (
    <>
      <div id="header-wrap">
        <TopContent />
        <Header />
      </div>

      <Billboard />
      <ClientLogos />
      <FeaturedBooks />
      <QuoteOfDay />
      <Subscribe />
      <LatestArticles />
      <Footer />
    </>
  );
}

export default App;
