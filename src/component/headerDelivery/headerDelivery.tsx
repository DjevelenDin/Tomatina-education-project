import React from "react";
import "./headerDelivery.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderDelivery = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="app-header-delivery-color">
      <div className="app-header-delivery">
        <p> {t("HeaderDelivery.delType")}</p>
        <span>{t("HeaderDelivery.self")}</span>

        <Link to="/delivery">
          <li>{t("HeaderDelivery.click")}</li>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDelivery;
