import React from "react";
import "../menu/menuPage.css";
// import FoodOnMenu from "../foodOnMenu/foodOnMenu";
import Breakfact from "../../pages/breakfast"
import Breakfast from "../../pages/breakfast";

const MenuPage = () => {
  return (
    <div className="menu-big-conteiner">
      <h1 className="h1">
        Наше <span className="h1_green">меню</span>
      </h1>
      <ul className="menu-header-content">
        <a href="breakfast">
          <li className="li-green-button app-header-content-response">
            СНІДАНКИ ДО 12:00
          </li>
        </a>
        <a href="saladPizza">
          <li className="li-green-button app-header-content-response">
            САЛАТИ ПАСТИ
          </li>
        </a>
        <a href="salad">
          <li className="li-green-button app-header-content-response">
            САЛАТИ
          </li>
        </a>
        <a href="fitSandwich">
          <li className="li-green-button app-header-content-response">
            ФІТ СЕНДВІЧІ
          </li>
        </a>
        <a href="soups">
          <li className="li-green-button app-header-content-response">СУПИ</li>
        </a>
        <a href="dessert">
          <li className="li-green-button app-header-content-response">
            ДЕСЕРТИ
          </li>
        </a>
        <a href="drinks">
          <li className="li-green-button app-header-content-response">НАПОЇ</li>
        </a>
      </ul>
      <div className="checked-all-or-new">
        <label className="checkbox-filter">
          <input type="checkbox" className="checkbox-filter-all-or-new active"></input>Всі
        </label>
        <label className="checkbox-filter">
          <input type="checkbox" className="checkbox-filter-all-or-new"></input>NEW
        </label>
      </div>
      <div className="food-box-in-menu">
        {/* <FoodOnMenu></FoodOnMenu> */}
        {<Breakfast></Breakfast>}
      </div>
    </div>
  );
};

export default MenuPage;
