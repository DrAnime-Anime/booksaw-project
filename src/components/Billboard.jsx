import React from "react";

// We have removed the 'useEffect' hook completely.

const Billboard = () => {
  // The useEffect() function that called .slick() has been deleted.

  return (
    <section id="billboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* The arrow buttons have been removed */}

            <div className="main-slider pattern-overlay">
              {/* This is the only slide we are keeping. */}
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">Life of the Wild</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac. Urna
                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                    eu.
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="btn btn-outline-accent btn-accent-arrow"
                    >
                      Read More<i className="icon icon-ns-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <img
                  src="https://nzmzepluhwljssaekvnu.supabase.co/storage/v1/object/public/aditi%20sharma/main-banner1.jpg"
                  alt="banner"
                  className="banner-image"
                />
              </div>

              {/* The second "slider-item" div has been deleted. */}
            </div>

            {/* The arrow buttons have been removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
