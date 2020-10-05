import React from "react";

function Header(props) {
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.Data.length}</span>
        <img
          src="https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-add-to-cart--icon-design-png-image_1012561.jpg"
          alt="pic"
        />
      </div>
    </div>
  );
}

export default Header;
