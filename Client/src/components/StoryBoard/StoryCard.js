import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import "./StoryBoard.css";
import LikeButton from "../LikeButton";
import CommentButton from "../CommentButton";
import ShareButton from "../ShareButton";
import { CommentFeed } from "./CommentFeed/CommentFeed";

export const StoryCard = ({
  link,
  title,
  description,
  imgUrl,
  comments,
  setComments,
  handleSubmitComment,
  projects,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log("comments state changed, re-rendering component");
    console.log(comments);
  }, [comments]);

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

          {isExpanded && (
            <CommentFeed
              comments={comments}
              handleSubmitComment={handleSubmitComment}
            />
          )}
          {isExpanded && (
            <div>
              <textarea
                className="coment-area"
                rows={4}
                placeholder="Leave a comment..."
              />
              <button onClick={handleSubmitComment}>Submit</button>
            </div>
          )}

          <ShareButton isExpanded={isExpanded} />
        </div>
      </div>
    </Col>
  );
};
