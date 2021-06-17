import React from "react";
import ButtonNew from "../buttonNew/buttonNew";
import "./foodOnMenu.css";
import IconLove from "../iconLove/iconLove";
import ButtonFastOrder from "../buttonFastOrder/buttonFastOrder"
import ButtonAddIngredients from "../buttonAddIngredients/buttonAddIngredients"
import food from "../foodOnMenu/food.png";

const FoodOnMenu = () => {
  return (
    <div className="container-food">
    <div>
      <div className="box-button">
        <ButtonNew />
        <IconLove />
      </div>
      <img src={food} id="img-food"></img>
      <div className="box-green-buttons">
      <ButtonFastOrder/>
      <ButtonAddIngredients/>
      </div>
      <div className="text-box-about-food">
        <p className="text-name-food">Яйця з хрустким беконом та смачним ...</p>
        <p className="price-food">200</p>
        </div>
        <div>
        <p className="text-about-food">Скрембл із трьох яєць, тайський соус з перцем гриль, пармезан, авокадо, крем-сир із зеленню, запечений батат, </p>
      </div>
    </div>
    </div>
  );
};

export default FoodOnMenu;
