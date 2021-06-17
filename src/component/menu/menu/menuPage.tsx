import React from "react";
import "../menu/menuPage.css";
import FoodOnMenu from "../foodOnMenu/foodOnMenu";

const MenuPage = () => {
  return (
    <div className="menu-big-conteiner">
      <h1 className="h1">
        Наше <span className="h1_green">меню</span>
      </h1>
      <ul className="menu-header-content">
        <a href="#">
          <li className="li-green-button app-header-content-response">
            СНІДАНКИ ДО 12:00
          </li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">
            САЛАТИ ПАСТИ
          </li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">
            САЛАТИ
          </li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">
            ФІТ СЕНДВІЧІ
          </li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">СУПИ</li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">
            ДЕСЕРТИ
          </li>
        </a>
        <a href="#">
          <li className="li-green-button app-header-content-response">НАПОЇ</li>
        </a>
      </ul>
      <div className="checked-all-or-new">
        <label>
          <input type="checkbox" className="checkbox-filter-all-or-new active"></input>Всі
        </label>
        <label>
          <input type="checkbox" className="checkbox-filter-all-or-new"></input>NEW
        </label>
      </div>
      <div>
        <FoodOnMenu></FoodOnMenu>
      </div>
    </div>
  );
};

export default MenuPage;
