import React from "react";

import "./deliveryArea.css";

import GreenBike from "../../../src/images/bike_green.svg";
import YellowBike from "../../../src/images/bike_yellow.svg";
import RedBike from "../../../src/images/bike_red.svg";

import Map from "../../component/map/map";
import Payment from "../../component/payment/payment";

export default class deliveryArea extends React.Component {
  render() {
    return (
      <>
        <div className="title">
          <h1>
            {" "}
            Доставка та <span>оплата</span>{" "}
          </h1>
        </div>
        <div className="fullDeliveryBlock">
          <div className="delivery-container">
            <div className="bikes-block">
              <div className="green-bike">
                <div className="firstBike">
                  {" "}
                  <img src={GreenBike} alt="GreenBike" />{" "}
                </div>
                <div className="first-description">
                  <div className="greenTitle">
                    {" "}
                    <span className="colorTextGreen">Зелена зона</span>{" "}
                  </div>
                  <div className="list">
                    <ul className="greenList">
                      <li>
                        Орієнтовний час доставки{" "}
                        <span className="colorTextGreen">39 хвилин</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span className="colorTextGreen">250 грн</span>{" "}
                        привеземо{" "}
                        <span className="colorTextGreen">БЕЗКОШТОВНО</span>{" "}
                      </li>
                      <li>
                        При замовленні до{" "}
                        <span className="colorTextGreen">250 грн</span> вартість
                        доставки <span className="colorTextGreen">60 грн</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="yellow-bike">
                <div className="secondBike">
                  {" "}
                  <img src={YellowBike} alt="YellowBike" />{" "}
                </div>
                <div className="second-description">
                  <div className="yellowTitle">Жовта зона</div>
                  <div className="list">
                    <ul className="yellowList">
                      <li>
                        Орієнтовний час доставки{" "}
                        <span className="colorTextYellow">55 хвилин</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span className="colorTextYellow">250 грн</span>{" "}
                        привеземо{" "}
                        <span className="colorTextYellow">БЕЗКОШТОВНО</span>{" "}
                      </li>
                      <li>
                        При замовленні до{" "}
                        <span className="colorTextYellow">250 грн</span>{" "}
                        вартість доставки{" "}
                        <span className="colorTextYellow">60 грн</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="red-bike">
                <div className="thirdBike">
                  {" "}
                  <img src={RedBike} alt="RedBike" />{" "}
                </div>
                <div className="third-description">
                  <div className="redTitle">
                    <span className="colorTextRed">Червона зона</span>{" "}
                  </div>
                  <div className="list">
                    <ul className="redList">
                      <li>
                        Орієнтовний час доставки до{" "}
                        <span className="colorTextRed">65 хвилин</span>{" "}
                      </li>
                      <li>
                        Мінімальне замовлення{" "}
                        <span className="colorTextRed">350 грн</span> вартість
                        доставки <span className="colorTextRed">90 грн</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span className="colorTextRed">500 грн</span> привеземо{" "}
                        <span className="colorTextRed">БЕЗКОШТОВНО</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <Map />
          </div>
        </div>
        <div className="payment-container">
          <Payment />
        </div>
      </>
    );
  }
}
