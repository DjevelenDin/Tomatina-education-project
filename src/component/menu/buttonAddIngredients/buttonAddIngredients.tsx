import React from "react";
import "../buttonAddIngredients/buttonAddIngredients.css";
import { Link } from "react-router-dom";

const buttonAddIngredients = () => {
  return (
    <Link to="#">
      <button className="app-header-content-response" id="buttonAddIngredients">
        ДОДАТИ СКЛАДНИКИ
      </button>
    </Link>
  );
};

export default buttonAddIngredients;
