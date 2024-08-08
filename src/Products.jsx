import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
  return (
    <div>
      <div className="wrapper">
        <img
          src="./Images/image-product-desktop.jpg"
          id="image1"
          alt="desktop"
        />

        <img
          src="./Images/image-product-mobile.jpg"
          id="image2"
          alt="mobile"
        />

       
        <div id="information">
          <strong id="heading1">PERFUME</strong>
          <h1>Gabrielle Essence Eau De parfum</h1>

          <p id="heading">
            A flora solar and voluntuptuous interpretation composed by Olivier
            Polge. Perfumer Creator forthe house of CHANEL.{" "}
          </p>

          <p id="price1">
            {" "}
            <important>$149.99</important>
            <sup id="price2">169.99</sup>
          </p>
          <button>
            {" "}
            <IoCartOutline /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
