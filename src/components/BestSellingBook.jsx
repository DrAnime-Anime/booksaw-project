import React from "react";

// I've renamed the component to "FeaturedBooks" since it now shows more than one.
// You should rename your file from BestSellingBook.jsx to FeaturedBooks.jsx,
// and also update the import in App.jsx.
const FeaturedBooks = () => {
  return (
    <>
      {/* SECTION 1: JOURNEY TO THE SKY */}
      <section className="featured-book-section container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <figure className="products-thumb">
                    <img
                      src="https://nzmzepluhwljssaekvnu.supabase.co/storage/v1/object/public/aditi%20sharma/chocolat/Book1.jpg"
                      alt="Journey to the Sky Coloring Book"
                      className="single-image"
                    />
                  </figure>
                </div>

                <div className="col-md-6">
                  <div className="product-entry">
                    <h2 className="section-title divider">
                      Our Best Selling Book
                    </h2>
                    <div className="products-content">
                      <div className="author-name">By Adoria</div>
                      <h3 className="item-title">Journey to the Sky</h3>
                      <p>
                        Climb a stairway to the clouds and explore a magical
                        world of smiling suns, friendly astronauts, and soaring
                        kites. This coloring book is a perfect adventure for
                        young artists!
                      </p>
                      <div className="item-price">$12.99</div>
                      <div className="btn-wrap">
                        <a href="#" className="btn-accent-arrow">
                          Shop it now{" "}
                          <i className="icon icon-ns-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MONSTERS LOVE SNACKS */}
      <section className="featured-book-section container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="product-entry">
                    <h2 className="section-title divider">Newest Arrival</h2>
                    <div className="products-content">
                      <div className="author-name">By Adoria</div>
                      <h3 className="item-title">Monsters Love Snacks</h3>
                      <p>
                        Meet a happy group of adorable, fluffy monsters who just
                        LOVE their yummy treats! This fun coloring book is
                        perfect for kids who love pizza, donuts, and popcorn.
                      </p>
                      <div className="item-price">$12.99</div>
                      <div className="btn-wrap">
                        <a href="#" className="btn-accent-arrow">
                          Shop it now{" "}
                          <i className="icon icon-ns-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <figure className="products-thumb">
                    <img
                      src="https://nzmzepluhwljssaekvnu.supabase.co/storage/v1/object/public/aditi%20sharma/chocolat/Book2.png"
                      alt="Monsters Love Snacks Coloring Book"
                      className="single-image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Don't forget to rename your export!
export default FeaturedBooks;
