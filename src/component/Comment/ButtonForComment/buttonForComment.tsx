import React, { Component } from "react";
import "./buttonForComment.css";
import { useTranslation } from "react-i18next";
const BtnForComment = () => {
  const { t, i18n } = useTranslation();
  return (
    <button className="detailsBtn" type="submit">
     {t("BtnForComment.ready")}
    </button>
  );
};

export default BtnForComment;
