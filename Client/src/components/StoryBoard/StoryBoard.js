import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { StoryCard } from "./StoryCard";
import colorSharp2 from "./assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./StoryBoard.css";

export const StoryBoard = () => {
  const [comments, setComments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const comment = event.target.previousSibling.value;
    if (comment) {
      const newComment = {
        id: Date.now(),
        comment: comment,
        username: "User Name",
      };
      setComments([...comments, newComment]);
      event.target.previousSibling.value = "";
    }
  };

  const handleSubmitProject = (event) => {
    event.preventDefault();
    if (description) {
      const newProject = {
        id: Date.now(),
        title: "User Name",
        description: description,
      };
      setProjects([...projects, newProject]);
      setDescription("");
    }
  };

  return (
    <div>
      <div className="banner">
        <img src={require("./banner.PNG")} alt="banner" />
        <div className="profile-picture-userpage">
          <img src={require("./blank-profile.PNG")} alt="banner" />
        </div>
        <div className="username"> User name</div>
      </div>

      <section className="Stories" id="project">
        <form onSubmit={handleSubmitProject}>
          <textarea
            className="story-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input className="submitStory" type="submit" value="Submit" />
        </form>

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
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return (
                                <StoryCard
                                  comments={comments}
                                  projects={projects}
                                  setComments={setComments}
                                  handleSubmitComment={handleSubmitComment}
                                  key={index}
                                  {...project}
                                />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                        <Row></Row>
                        <Tab.Pane eventKey="second"></Tab.Pane>
                        <Tab.Pane eventKey="third"></Tab.Pane>
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
    </div>
  );
};
