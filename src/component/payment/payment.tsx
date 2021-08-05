import React from "react";
import "./payment.css";

import ligPay from "./../../../src/images/pay_page_one.svg";
import card from "./../../../src/images/pay_page_two.svg";
import cash from "./../../../src/images/pay_page_tree-1.svg";

import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="title-payment">
        <h1>{t("payment.payment")}</h1>
      </div>
      <div className="paymentBlock">
        <div className="ligPay">
          <img className="paymentImg" src={ligPay} alt="ligPay" />{" "}
          <div className="ligPay-description">
            <h2>{t("payment.payLig")}</h2>
            <div className="text">
              {" "}
              <p>{t("payment.Lig")}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="paymentImg" src={card} alt="card" />{" "}
          <div className="card-description">
            <h2> {t("payment.payCart")}</h2>
            <div className="text">
              {" "}
              <p>{t("payment.Cart")}</p>
            </div>
          </div>
        </div>
        <div className="cash">
          <img className="paymentImg" src={cash} alt="cash" />{" "}
          <div className="cash-description">
            <h2> {t("payment.payCash")}</h2>
            <div className="text">
              {" "}
              <p>{t("payment.Cash")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
