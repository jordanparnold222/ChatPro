import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CommentCard } from "./CommentCard";
import colorSharp2 from "./assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./CommentFeed.css";
import { useEffect, useRef } from "react";

export const CommentFeed = ({ comments }) => {
  const commentContainerRef = useRef(null);

  useEffect(() => {
    commentContainerRef.current.scrollTo(
      0,
      commentContainerRef.current.scrollHeight
    );
  }, [comments]);

  return (
    <section
      className="comment-container2"
      id="project"
      ref={commentContainerRef}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Tab.Container id="comment-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {comments.map((comment, index) => {
                            return <CommentCard key={index} {...comment} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Row></Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
