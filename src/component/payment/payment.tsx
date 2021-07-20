import React from "react";
import "./payment.css";

import ligPay from "./../../../src/images/pay_page_one.svg";
import card from "./../../../src/images/pay_page_two.svg";
import cash from "./../../../src/images/pay_page_tree-1.svg";

export default class Payment extends React.Component {
  render() {
    return (
      <>
        <div className="title-payment">
          <h1>Оплата</h1>
        </div>
        <div className="paymentBlock">
          <div className="ligPay">
            <img className='paymentImg' src={ligPay} alt="ligPay" />{" "}
            <div className="ligPay-description">
              <h2>Оплата LiqPay</h2>
              <div className="text">
                {" "}
                <p>
                  {" "}
                  Розраховуйся онлайн за своє замовлення через сервіс LiqPay на
                  сайті{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img className='paymentImg' src={card} alt="card" />{" "}
            <div className="card-description">
              <h2>Оплата карткою</h2>
              <div className="text">
                {" "}
                <p>
                  {" "}
                  Наш кур'єр має з собою термінал та приймає карту для оплати
                </p>
              </div>
            </div>
          </div>
          <div className="cash">
            <img className='paymentImg' src={cash} alt="cash" />{" "}
            <div className="cash-description">
              <h2>Оплата готівкою</h2>
              <div className="text">
                {" "}
                <p>
                  {" "}
                  Сплачуй готівкою при отриманні замовлення, попередь якщо
                  потрібна решта{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
