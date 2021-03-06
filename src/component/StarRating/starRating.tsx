import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";
import { useTranslation } from "react-i18next";

const StarRating = () => {
  
  const { t, i18n } = useTranslation();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="stars-container">
      {[...Array(5)].map((star, i) => {
        const ratingValue: any = 1 + i;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <div className="marks">
        <p>{t("star.mark")} {rating}</p>
      </div>
    </div>
  );
};
export default StarRating;
