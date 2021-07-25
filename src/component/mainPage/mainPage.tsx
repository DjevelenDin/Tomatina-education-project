import React from "react";
import "./mainPage.css";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <div className="forTitle">
          <h1>
            <span className="saladGreen">Найсалатніша</span> доставка у <br />
            будь-який куточок Львова та передмістя
          </h1>

          <button className="about">Детальніше</button>
        </div>

        <div className="forPhotoSalad">
          <img
            width="500px"
            src="https://www.tomatina.ua/wp-content/uploads/2020/10/xbanner_one.jpg.pagespeed.ic.bt-MTZX5l1.webp"
            alt=""
          />
        </div>
      </div>
    );
  }
}
