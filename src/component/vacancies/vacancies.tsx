import React from "react";
import "./vacancies.css";

const Vacancies = () => {
  return (
    <div className="vacan-conteiner">
      <h1>Приєднуйся до команди <span className="saladGreen">tomatina</span></h1>

      <div className="vacan-big-conteiner-img">
        <div className="vacan-two-imgs">
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2021/05/viber_image_2021-05-20_11-24-01-614x370.jpg"></img>
            <h3>АДМІНІСТРАТОР</h3>
          </div>
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2021/05/viber_image_2021-05-21_10-42-23-614x370.jpg"></img>
            <h3>КАСИР РЕСТОРАНУ</h3>
          </div>
        </div>

        <div className="vacan-two-imgs">
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2021/01/photo5467710779508765129-614x370.jpg"></img>
            <h3>САЛАТЬЄ</h3>
          </div>
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2021/01/img_6476-1-scaled-614x370.jpg"></img>
            <h3>КУХАР ЛІНІЇ ВИДАЧІ</h3>
          </div>
        </div>

        <div className="vacan-two-imgs">
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2021/01/img_6539-scaled-614x370.jpg"></img>
            <h3>КУХАР ВОК</h3>
          </div>
          <div className="vacan-img-and-name">
            <img src="https://www.tomatina.ua/wp-content/uploads/2020/10/delivery-2-623x419-1-614x370.jpg"></img>
            <h3>МОТО ТА ВЕЛО КУР’ЄР</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies