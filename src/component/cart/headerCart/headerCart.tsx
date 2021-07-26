import React, { Component } from "react";
import { useSelector } from "react-redux";
import "./headerCart.css";

function HeaderCart() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img
              width="100"
              src=" https://www.tomatina.ua/wp-content/uploads/2020/10/logo_one-1.svg"
              alt="logo"
            />
          </div>
          <div className="title-cart">
            <p>
              Найсалатніша доставка у будь-який куточок Львова та передмістя
            </p>
          </div>

          <div className="header__cart">
            <div className="button-cart">
              <span className="grn">{totalPrice}</span>
              <div className="button__delimiter"></div>
              <span className="nmb">{totalCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;
