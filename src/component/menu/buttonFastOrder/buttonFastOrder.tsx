import React from "react";
import "../buttonFastOrder/buttonFastOrder.css";
import { Link } from "react-router-dom";

function buttonFastOrder({onAddProduct}){{
  const onAddProduct = () => {
    const obj = {
      
    };
    // onClickAddProduct(obj);
  };
}

  return (
    <Link to="#">
      <button onClick={onAddProduct} className="app-header-content-response" id="buttonFastOrder">
        ШВИДКЕ ЗАМОВЛЕННЯ
      </button>
    </Link>
  );
};

export default buttonFastOrder;
