import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./App.css";
import LikeButton from "../LikeButton";
import CommentButton from "../CommentButton";
import ShareButton from "../ShareButton";
import { CommentFeed } from "./CommentFeed/CommentFeed";

export const FeedCard = ({ link, title, description, imgUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCommentClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Col size={1} sm={10} md={10}>
      <div className={isExpanded ? "proj-imgbx-dropdown" : "proj-imgbx"}>
        <img
          className="profile-picture"
          src={require("./blank-profile.PNG")}
          width="50"
          height="50"
          alt="blank profile"
        />
        <div>
          <h4>{title}</h4>
          <div className="description-textbox">
            <p>{description}</p>
          </div>
          <LikeButton isExpanded={isExpanded} />
          <CommentButton
            isExpanded={isExpanded}
            onCommentClick={handleCommentClick}
          />

          {isExpanded && <CommentFeed />}
          {isExpanded && (
            <input
              className="comment-input"
              type="text"
              placeholder="Leave a comment..."
            />
          )}

          <ShareButton isExpanded={isExpanded} />
        </div>
      </div>
    </Col>
  );
};
