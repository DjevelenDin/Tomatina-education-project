import React from "react";
import "./headerDelivery.css";
import { Link } from "react-router-dom";

const HeaderDelivery = () => {
  return (
    <div className="app-header-delivery-color">
      <div className="app-header-delivery">
        <p>Ваш тип доставки:</p>
        <span>Самовивіз</span>

        <Link to="/delivery">
          <li>Натисніть тут щоб дізнатися деталі</li>
        </Link>
      </div>



      
    </div>
  );
};

export default HeaderDelivery;



