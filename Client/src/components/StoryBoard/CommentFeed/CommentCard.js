import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./CommentFeed.css";
import LikeButton from "./LikeButton";

export const CommentCard = ({
  comment,
  username,
  link,
  title,
  description,
  imgUrl,
}) => {
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
          <div className="comment-username">
            {username}
            {title}
          </div>
          <div className="comment-p">
            {comment}
            {description}
          </div>
        </div>
        <LikeButton />
      </div>
    </Col>
  );
};
