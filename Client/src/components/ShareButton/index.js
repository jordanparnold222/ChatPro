import React, { useState } from "react";
import "./share.css";

const ShareButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <div className={`share-btn`} onClick={handleClick}>
      <div className="content-share">
        <span className="share"></span>
        <span className="share-text">Share</span>
        <span className={`numb-share ${isLiked ? "share-active" : ""}`}></span>
      </div>
    </div>
  );
};

export default ShareButton;
