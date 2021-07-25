import React, { Component } from "react";
import "./basket_order.css";
import { useSelector } from "react-redux";

function BasketOrder() {
//   const { totalPrice, totalCount } = useSelector(({ cart }) => (cart);

  return (
    <div className="pageBasketOrder">
      <div className="titleForBasket">
        <h1>Кошик</h1>
        <p>Очистити кошик</p>
      </div>
      <div className="products">
        <div className="photo">
          <img
            width="200px"
            src="https://www.tomatina.ua/wp-content/uploads/2020/10/xbanner_one.jpg.pagespeed.ic.bt-MTZX5l1.webp"
            alt=""
          />
        </div>
        <div className="nameOfProduct">
          <h2>Салатик</h2>

          <div className="amount">
            <button className="minus">-</button>
            {/* <span>{totalPrice}</span>
            <span>{totalCount}</span> */}
            <button className="plus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketOrder;
