import React from "react";

const Card = (props) => {
  return (
    <div className="cart-wrapper">
      <div className="img-wrapper item">
        <img src={`${props.src}`} alt="pic" />
      </div>
      <div className="text-wrapper item">
        <span>{props.title}</span>
        <br />
        <span>{props.price}</span>
      </div>
      <div className="btn-wrapper item">
        <button
          onClick={() =>
            props.btn_click.addToCartHandler({
              title: props.title,
              price: props.price,
            })
          }
        >
          Add To Cart
        </button>
        <button
          onClick={() =>
            props.btn_click.addToCartHandler({
              title: props.title,
              price: props.price,
            })
          }
        >
          Remove Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
