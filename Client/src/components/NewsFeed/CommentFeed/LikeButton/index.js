import React, { useState } from "react";
import "./style.css";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <div
      className={`like-btn ${isLiked ? "like-active" : ""}`}
      onClick={handleClick}
    >
      <div className="like-content">
        <span className={`like ${isLiked ? "like-active" : ""}`}></span>
        <span className="text">Like</span>
        <span className={`numb ${isLiked ? "like-active" : ""}`}></span>
      </div>
    </div>
  );
};

export default LikeButton;
