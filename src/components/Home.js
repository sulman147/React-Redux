import React from "react";
import Card from "./Card";

const Home = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div>
        <div className="card-layout">
          <Card
            src={
              "https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone11ProMax-b.jpg"
            }
            title={"i-phone"}
            price={"price:$1000.00"}
            btn_name={"Add to cart"}
            btn_click={props}
          />
          <Card
            src={
              "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS10Plus512GB-b.jpg"
            }
            title={"Samsung"}
            price={"price:$2000.00"}
            btn_name={"Add to cart"}
            btn_click={props}
          />
        </div>
        <div className="card-layout">
          <Card
            src={
              "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno4Pro-b.jpg"
            }
            title={"Oppo"}
            price={"price:$700.00"}
            btn_name={"Add to cart"}
            btn_click={props}
          />
          <Card
            src={
              "https://www.whatmobile.com.pk/admin/images/Vivo/VivoY20-b.jpg"
            }
            title={"Vivo"}
            price={"price:$900.00"}
            btn_name={"Add to cart"}
            btn_click={props}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
