import React from "react";

const Products = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Variants</h2>
          <p />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <h1>Mushroom</h1>
              <figure>
                <img
                  src="https://res.cloudinary.com/dor0uhjtz/image/upload/v1709709759/20190829_121042_v1rcei.jpg"
                  alt="Mushroom"
                  className="rounded-xl"
                />
              </figure>
              <p>
                Risoles with a mixture of mushrooms and special cream Risoles
                Omah Gembul
              </p>
              <a href="https://wa.me/6282108802009?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Risoles%20Mushroom">
                <button className="btn btn-primary">Buy Now</button>
              </a>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <p>
                This is a wider card with <br className="hidden xl:inline" />
                supporting text below as a <br className="hidden xl:inline" />{" "}
                natural content.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <p>
                This is a wider card with <br className="hidden xl:inline" />
                supporting text below as a <br className="hidden xl:inline" />{" "}
                natural content.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <p>
                This is a wider card with <br className="hidden xl:inline" />
                supporting text below as a <br className="hidden xl:inline" />{" "}
                natural content.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <p>
                This is a wider card with <br className="hidden xl:inline" />
                supporting text below as a <br className="hidden xl:inline" />{" "}
                natural content.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-chat-left-dots text-4xl"></i>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <p>
                This is a wider card with <br className="hidden xl:inline" />
                supporting text below as a <br className="hidden xl:inline" />{" "}
                natural content.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
