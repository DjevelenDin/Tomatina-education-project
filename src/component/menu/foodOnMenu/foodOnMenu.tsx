import React, { useState } from "react";
import ButtonNew from "../buttonNew/buttonNew";
import "./foodOnMenu.css";
import IconLove from "../iconLove/iconLove";
import ButtonFastOrder from "../buttonFastOrder/buttonFastOrder";
import ButtonAddIngredients from "../buttonAddIngredients/buttonAddIngredients";
import { useCallback } from "react";


interface FoodProps {
  id: number;
  name: string;
  categories: string;
  new: boolean;
  price: number;
  image: string;
  title: string;
}

const FoodOnMenu = () => {
  const [food, setFood] = React.useState([]);

  const getDate = useCallback(async () => {
    let url = "http://localhost:3012/products";
    let response = await fetch(url);
    let food = await response.json();
    console.log(food);
    // setFood(food);
  }, []);
  
  React.useEffect(() => {
    getDate();
  }, []);
  return (
    <div className="container-food">
      {food.filter((item: FoodProps) => {
        if (item.categories == "breakfast") {
          return (
            <div className="container-food">
              <div>
                <div className="box-button">
                  <ButtonNew />
                  <IconLove />
                </div>
                <img src={item.image} id="img-food" alt=''></img>
                {/* <img src={M} id="img-food"></img> */}
              </div>
              <div className="box-green-buttons">
                {/* <ButtonFastOrder/> */}
                <ButtonAddIngredients />
              </div>
              <div className="text-box-about-food">
                <p className="text-name-food">{item.name}</p>
                <p className="price-food">{item.price}</p>{" "}
              </div>{" "}
              <div>
                <p className="text-about-food">{item.title}</p>{" "}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FoodOnMenu;
