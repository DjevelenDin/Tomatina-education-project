import React from "react";
import "./mainPage.css";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

  const MainPage = ()=>{
    const { t, i18n } = useTranslation();

    return (
      <div className="mainPage">
        <div className="forTitle">
          <h1>
            <span className="saladGreen">{t("mainPage.greenTitle")}</span> {t("mainPage.blackTitle1")} <br />
            {t("mainPage.blackTitle2")}
          </h1>

          <button className="about">

          <Link className='about' to="/about">
          {t("mainPage.more")}
          </Link>
            </button>
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

export default  MainPage