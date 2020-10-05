import React from "react";

const Button = (props) => {
  console.log("button click", props);
  return (
    <div className="btn-wrapper item">
      <button onClick={props.on_Call}>{props.name}</button>
    </div>
  );
};

export default Button;
