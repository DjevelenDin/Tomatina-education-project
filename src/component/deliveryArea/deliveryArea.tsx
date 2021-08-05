import React from "react";

import "./deliveryArea.css";

import GreenBike from "../../../src/images/bike_green.svg";
import YellowBike from "../../../src/images/bike_yellow.svg";
import RedBike from "../../../src/images/bike_red.svg";

import Map from "../Map/map";
import Payment from "../Payment/payment";
import { useTranslation } from "react-i18next";

const DeliveryArea = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="title">
        <h1>
          {t("deliveryArea.deliveryAnd")} <span>{t("deliveryArea.pay")}</span>
        </h1>
      </div>
      <div className="fullDeliveryBlock">
        <div className="delivery-container">
          <div className="bikes-block">
            <div className="green-bike">
              <div className="firstBike">
                <img src={GreenBike} alt="GreenBike" />{" "}
              </div>
              <div className="first-description">
                <div className="greenTitle">
                  {" "}
                  <span className="colorTextGreen">
                    {t("deliveryArea.greenZone")}
                  </span>{" "}
                </div>
                <div className="list">
                  <ul className="greenList">
                    <li>
                      {t("deliveryArea.greenZone1")}
                      <span className="colorTextGreen">
                        {" "}
                        {t("deliveryArea.greenZoneTime")}{" "}
                      </span>{" "}
                    </li>
                    <li>
                      {t("deliveryArea.greenZone2")}
                      <span className="colorTextGreen">
                        {" "}
                        {t("deliveryArea.greenZone250")}
                      </span>{" "}
                      {t("deliveryArea.greenZone2_2")}
                      <span className="colorTextGreen">
                        {" "}
                        {t("deliveryArea.greenZoneFree")}{" "}
                      </span>{" "}
                    </li>
                    <li>
                      {t("deliveryArea.greenZone2")}
                      <span className="colorTextGreen">
                        {" "}
                        {t("deliveryArea.greenZone250")}{" "}
                      </span>{" "}
                      {t("deliveryArea.redDel")}{" "}
                      <span className="colorTextGreen"> 60 грн</span>{" "}
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
                <div className="yellowTitle">
                  {t("deliveryArea.yellowZone")}
                </div>
                <div className="list">
                  <ul className="yellowList">
                    <li>
                      {t("deliveryArea.greenZone1")}{" "}
                      <span className="colorTextYellow">
                        {" "}
                        {t("deliveryArea.greenZone2time")}
                      </span>
                    </li>
                    <li>
                      {t("deliveryArea.greenZone2")}{" "}
                      <span className="colorTextYellow">
                        {t("deliveryArea.yellowZone250")}
                      </span>{" "}
                      {t("deliveryArea.greenZone2_2")}{" "}
                      <span className="colorTextYellow">
                        {" "}
                        {t("deliveryArea.yellowZoneFree")}
                      </span>
                    </li>
                    <li>
                      {t("deliveryArea.greenZone2")}{" "}
                      <span className="colorTextYellow">
                        {" "}
                        {t("deliveryArea.yellowZone250")}{" "}
                      </span>
                      {t("deliveryArea.yellowZone2")}
                      <span className="colorTextYellow">
                        {" "}
                        {t("deliveryArea.yellowZone60")}
                      </span>
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
                  <span className="colorTextRed">
                    {t("deliveryArea.redZone")}
                  </span>{" "}
                </div>
                <div className="list">
                  <ul className="redList">
                    <li>
                      {t("deliveryArea.greenZone1")}{" "}
                      <span className="colorTextRed">
                        {t("deliveryArea.redZone65")}
                      </span>{" "}
                    </li>
                    <li>
                      {t("deliveryArea.redMin")}{" "}
                      <span className="colorTextRed">
                        {t("deliveryArea.redZone350")}
                      </span>{" "}
                      {t("deliveryArea.redDel")}{" "}
                      <span className="colorTextRed">
                        {t("deliveryArea.redZone90")}
                      </span>{" "}
                    </li>
                    <li>
                      {t("deliveryArea.greenZone2")}
                      <span className="colorTextRed">
                        {t("deliveryArea.redZone500")}
                      </span>{" "}
                      {t("deliveryArea.greenZone2_2")}{" "}
                      <span className="colorTextRed">
                        {" "}
                        {t("deliveryArea.redZoneFree")}
                      </span>{" "}
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
};

export default DeliveryArea;
