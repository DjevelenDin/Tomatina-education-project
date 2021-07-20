import React from "react";

import "./delivery.css";

import GreenBike from "../../../src/images/bike_green.svg";  
import YellowBike from "../../../src/images/bike_yellow.svg";
import RedBike from "../../../src/images/bike_red.svg";

import Map from "../../component/map/map";
import Payment from "../../component/payment/payment";

export default class deliveryArea extends React.Component {
  render() {
    const colorTextGreen = {
      color: "#599921",
      fontWeight: "bold" as "bold",
    };
    const colorTextYellow = {
      color: "#ffcc00",
      fontWeight: "bold" as "bold",
    };
    const colorTextRed = {
      color: "#ef2f3d",
      fontWeight: "bold" as "bold",
    };
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
                    <span style={colorTextGreen}>Зелена зона</span>{" "}
                  </div>
                   <div className="list">
                    <ul className="greenList">
                      <li>
                        Орієнтовний час доставки{" "}
                        <span style={colorTextGreen}>39 хвилин</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span style={colorTextGreen}>250 грн</span> привеземо{" "}
                        <span style={colorTextGreen}>БЕЗКОШТОВНО</span>{" "}
                      </li>
                      <li>
                        При замовленні до{" "}
                        <span style={colorTextGreen}>250 грн</span> вартість
                        доставки <span style={colorTextGreen}>60 грн</span>{" "}
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
                        <span style={colorTextYellow}>55 хвилин</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span style={colorTextYellow}>250 грн</span> привеземо{" "}
                        <span style={colorTextYellow}>БЕЗКОШТОВНО</span>{" "}
                      </li>
                      <li>
                        При замовленні до{" "}
                        <span style={colorTextYellow}>250 грн</span> вартість
                        доставки <span style={colorTextYellow}>60 грн</span>{" "}
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
                    <span style={colorTextRed}>Червона зона</span>{" "}
                  </div>
                  <div className="list">
                    <ul className="redList">
                      <li>
                        Орієнтовний час доставки до{" "}
                        <span style={colorTextRed}>65 хвилин</span>{" "}
                      </li>
                      <li>
                        Мінімальне замовлення{" "}
                        <span style={colorTextRed}>350 грн</span> вартість
                        доставки <span style={colorTextRed}>90 грн</span>{" "}
                      </li>
                      <li>
                        При замовленні від{" "}
                        <span style={colorTextRed}>500 грн</span> привеземо{" "}
                        <span style={colorTextRed}>БЕЗКОШТОВНО</span>{" "}
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
