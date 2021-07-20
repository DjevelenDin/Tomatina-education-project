import React, { useCallback } from "react";
import ButtonNew from "../menu/buttonNew/buttonNew";
import "../menu/foodOnMenu/foodOnMenu.css";
import IconLove from "../menu/iconLove/iconLove";
import ButtonFastOrder from "../menu/buttonFastOrder/buttonFastOrder";
import ButtonAddIngredients from "../menu/buttonAddIngredients/buttonAddIngredients";

interface FoodProps {
  id: number;
  name: string;
  categories: string;
  new: boolean;
  price: number;
  image: string;
  title: string;
}

const SaladPasta = () => {
  const [food, setFood] = React.useState([]);

  const getDate = useCallback(async () => {
    let url = "http://localhost:3012/products";
    let response = await fetch(url);
    let food = await response.json();
    setFood(food);
  }, []);

  React.useEffect(() => {
    getDate();
  }, []);

  const NewArrayCopyFoodSaladPasta: Array<FoodProps> = [];
  {
    food.filter((item: FoodProps) => {
      if (item.categories === "salatPasta")
        NewArrayCopyFoodSaladPasta.push(item);
    });
  }

  return (
    <div className="big-container-food food-box-in-menu menu-big-conteiner">
      {NewArrayCopyFoodSaladPasta.map((plate: FoodProps) => {
        return (
          <div className="container-food">
            <div>
              <div className="box-button">
                <ButtonNew />
                <IconLove />{" "}
              </div>
              <img src={plate.image} id="img-food"></img>
            </div>
            <div className="box-green-buttons">
              <ButtonFastOrder />
              <ButtonAddIngredients />
            </div>
            <div className="text-box-about-food">
              <p className="text-name-food">{plate.name}</p>
              <p className="price-food">{plate.price}</p>{" "}
            </div>{" "}
            <div>
              <p className="text-about-food">{plate.title}</p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SaladPasta;
