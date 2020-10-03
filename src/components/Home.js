import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-add-to-cart--icon-design-png-image_1012561.jpg" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://ae01.alicdn.com/kf/H60e160fb044c4c348154fcd03e4769646/Brand-New-honor-play-3-Mobiel-Phone-6-39-4-6GB-RAM-64-128GB-ROM-Kirin.jpg_q50.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span>price:1000$</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
