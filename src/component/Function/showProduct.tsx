import React, { useCallback } from "react";
import ButtonNew from "../Menu/ButtonNew/buttonNew";
import "../Menu/FoodOnMenu/foodOnMenu.css";
import IconLove from "../Menu/IconLove/iconLove";
import ButtonFastOrder from "../Menu/ButtonFastOrder/buttonFastOrder";
import ButtonAddIngredients from "../Menu/ButtonAddIngredients/buttonAddIngredients";

export interface FoodProps {
  id: number;
  name: string;
  categories: string;
  new: boolean;
  price: number;
  image: string;
  title: string;
}

// const ShowProduct = (array:FoodProps[], condition:string) => {
  const ShowProduct = (props:FoodProps[], condition:string) => {
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
const NewArrayCopy: Array<FoodProps> = [];
  {
    food.filter((item: FoodProps) => {
      if (item.categories === condition) NewArrayCopy.push(item);
    });
  }

  return (
    <div className="big-container-food food-box-in-menu menu-big-conteiner">
      {NewArrayCopy.map((plate: FoodProps) => {
        return (
          <div className="container-food">
            <div>
              <div className="box-button">
                  if ({plate.new === true})( return <ButtonNew />)
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
  )}
export default ShowProduct;