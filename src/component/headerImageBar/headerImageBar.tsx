import React from "react";
import "./headerImageBar.css";
import backgroundImage from "../../assets/headerImageBackground.jpg";

const HeaderImageBar = () => {
  return (
    <div className="app-header-image-bar">
      <div className="app-header-image-bar-content">
        <p>
          <span>Найсалатніша</span> доставка у будь-який куточок Львова та
          передмістя
        </p>
        <button>Детальніше</button>
      </div>
      <div>
        <img src={backgroundImage} />
      </div>
    </div>
  );
};
export default HeaderImageBar;
