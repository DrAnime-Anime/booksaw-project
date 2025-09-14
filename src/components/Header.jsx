import React, { useEffect } from "react";

const Header = () => {
  // This hook runs *after* the component mounts to the DOM.
  // This is where we safely initialize jQuery plugins.
  useEffect(() => {
    // Check if jQuery and the plugin exist on the window object (loaded from public/index.html)
    if (window.jQuery && window.jQuery.fn.stellarNav) {
      window.jQuery(".stellarnav").stellarNav({
        theme: "plain", // Example option: adjust as needed
        breakpoint: 991,
      });
    }

    // This is also likely needed for the search toggle functionality
    if (window.jQuery) {
      const searchButton = window.jQuery(".search-toggle");
      searchButton.on("click", function (e) {
        const selector = window.jQuery(this).data("selector");
        window.jQuery(selector).toggleClass("show-search");
        e.preventDefault();
      });
    }
  }, []); // The empty array [] means this runs only once, like document.ready()

  return (
    <header id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="main-logo">
              <a href="index.html">
                <img
                  src="https://nzmzepluhwljssaekvnu.supabase.co/storage/v1/object/public/aditi%20sharma/chocolat/image-removebg-preview.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md-10">
            <nav id="navbar">
              <div className="main-menu stellarnav">
                <ul className="menu-list">
                  <li className="menu-item active">
                    <a href="#home">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#latest-blog" className="nav-link">
                      Articles
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#download-app" className="nav-link">
                      Download App
                    </a>
                  </li>
                </ul>
                <div className="hamburger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
