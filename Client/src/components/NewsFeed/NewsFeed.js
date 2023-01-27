import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FeedCard } from "./FeedCard";
import projImg1 from "./assets/img/project-img1.PNG";
import projImg2 from "./assets/img/project-img2.PNG";
import projImg3 from "./assets/img/project-img3.PNG";
import projImg4 from "./assets/img/project-img4.png";
import projImg5 from "./assets/img/project-img5.PNG";
import projImg6 from "./assets/img/project-img6.PNG";

import colorSharp2 from "./assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./App.css";

export const NewsFeed = () => {
  const [comments, setComments] = useState([
    {
      link: "https://github.com/DillionB/KioskManager",
      title: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg1,
    },
    {
      link: "https://github.com/DillionB/Admin-Dashboard",
      title: "Jane Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg2,
    },
    {
      link: "https://github.com/DillionB/Portfolio-Site",
      title: "Dillion Babin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg3,
    },
    {
      link: "https://github.com/DillionB/CryptoTrader",
      title: "Jordan Arnold",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg4,
    },
    {
      link: "https://github.com/DillionB/FlappyBirb-Armed-and-Dangerous",
      title: "First Last",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg5,
    },
    {
      link: "https://github.com/DillionB/Galaga",
      title: "First Last",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg6,
    },
  ]);
  const [projects, setProjects] = useState([
    {
      link: "https://github.com/DillionB/KioskManager",
      title: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg1,
    },
    {
      link: "https://github.com/DillionB/Admin-Dashboard",
      title: "Jane Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg2,
    },
    {
      link: "https://github.com/DillionB/Portfolio-Site",
      title: "Dillion Babin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg3,
    },
    {
      link: "https://github.com/DillionB/CryptoTrader",
      title: "Jordan Arnold",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg4,
    },
    {
      link: "https://github.com/DillionB/FlappyBirb-Armed-and-Dangerous",
      title: "First Last",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg5,
    },
    {
      link: "https://github.com/DillionB/Galaga",
      title: "First Last",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg6,
    },
  ]);

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
  return (
    <section className="project" id="project">
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
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <FeedCard
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
  );
};
