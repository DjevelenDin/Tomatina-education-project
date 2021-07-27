import React from "react";
import "../buttonFastOrder/buttonFastOrder.css";
import { Link } from "react-router-dom";

function buttonFastOrder(){
  return (
    <Link to="#">
      <button className="app-header-content-response" id="buttonFastOrder">
        ШВИДКЕ ЗАМОВЛЕННЯ
      </button>
    </Link>
  );
};

export default buttonFastOrder;
