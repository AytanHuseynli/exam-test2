import React from "react";
import "./BannerSection.css"; // Custom CSS for styling

const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="banner-content">
        <div className="img">
        <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="text">
        <h4>Flat <span>75% Off</span></h4>
        <h1>IT’S HAPPENING THIS SEASON!</h1>
        <button className="purchase-button">Purchase Now</button>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;
