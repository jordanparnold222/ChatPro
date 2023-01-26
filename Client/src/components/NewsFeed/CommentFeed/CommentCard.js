import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./CommentFeed.css";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";

export const CommentCard = ({ link, title, description, imgUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCommentClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Col size={1} sm={10} md={10}>
      <div className="comment-imgbx">
        <img
          className="comment-profile-picture"
          src={require("./blank-profile.PNG")}
          width="50"
          height="50"
          alt="blank profile"
        />
        <div>
          <div className="Comment-username">{title}</div>
          <div className="comment-description-textbox"></div>
          <div className="comment-p">{description}</div>
        </div>
        <LikeButton />
      </div>
    </Col>
  );
};
