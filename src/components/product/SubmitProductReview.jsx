import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactStars from "react-rating-stars-component";
import MainBtn from "../common/buttons/MainBtn";
const SubmitProductReview = () => {
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => setComment(e.target.value);
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => setRating(newRating);
  return (
    <div className="mb-4 md:mb-6 ">
      <div className="flex items-center gap-2 ">
        <p className=" text-redColor font-bold">( {rating} )</p>
        <div style={{ direction: "ltr" }}>
          <ReactStars
            key={rating}
            value={rating}
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#007Dde071256"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full h-[100px] border rounded-md p-3 bg-transparent focus:outline-none block mb-7 "
          placeholder={t("leave a comment")}
        />
        <MainBtn text="send" />
      </div>
    </div>
  );
};

export default SubmitProductReview;
