import React from "react";
const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>user component</h2>
      <h3>
        welcome {data.name} your age is : {data.age}
      </h3>
    </div>
  );
};

export default User;
