import React from "react";

const ProductItem = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="product-area">
          <div className="logo-div">
            <img
              src="https://github.com/gerrardNwoke/Prdouct-Card/blob/main/Shoe-product-card/imgs/nike-logo.png?raw=true"
              alt=""
            />
          </div>
          <div className="floating-div">
            <div className="product-1">
              {/* <img
                src="https://github.com/gerrardNwoke/Prdouct-Card/blob/main/Shoe-product-card/imgs/red-nike.png?raw=true"
                alt="red-nike"
              /> */}
            </div>
          </div>
        </div>
        <div className="text-area">
          <div className="heading-area">
            <h2>Jordan Proto-Lyte</h2>
            <h4>Running Collection</h4>
          </div>

          <p className="paragraph-area">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            rerum asperiores error omnis pariatur sequi placeat quia fuga ullam.
            Harum obcaecati suscipit illum similique excepturi voluptates quae
            deserunt tempore, distinctio architecto ipsum dolor laboriosam
            inventore impedit nostrum totam eaque sed est? Non rem repudiandae,
            vitae iure suscipit pariatur, cum esse sequi cumque saepe commodi
            reprehenderit quaerat. Quasi ipsam repellendus similique
          </p>
          <div className="price-and-buy-btn">
            <h2 className="price-1">$ 854.75</h2>
            <button className="buy-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
