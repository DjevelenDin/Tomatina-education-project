import React from "react";
import "./menuPage.css";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="menu-big-conteiner">
      <h1 className="h1">
        Наше <span className="h1_green">меню</span>
      </h1>
      <ul className="menu-header-content">
        <Link to={`menu/breakfast`}>
          <li className="li-green-button app-header-content-response">
            СНІДАНКИ ДО 12:00
          </li>
        </Link>
        <Link to={`menu/saladPizza`}>
          <li className="li-green-button app-header-content-response">
            САЛАТИ ПАСТИ
          </li>
        </Link>
        <Link to={`menu/salad`}>
          <li className="li-green-button app-header-content-response">
            САЛАТИ
          </li>
        </Link>
        <Link to={`menu/fitSandwich`}>
          <li className="li-green-button app-header-content-response">
            ФІТ СЕНДВІЧІ
          </li>
        </Link>
        <Link to={`menu/soups`}>
          <li className="li-green-button app-header-content-response">СУПИ</li>
        </Link>
        <Link to={`menu/dessert`}>
          <li className="li-green-button app-header-content-response">
            ДЕСЕРТИ
          </li>
        </Link>
        <Link to={`menu/drinks`}>
          <li className="li-green-button app-header-content-response">НАПОЇ</li>
        </Link>
      </ul>
      <div className="food-box-in-menu"></div>
    </div>
  );
};

export default MenuPage;
