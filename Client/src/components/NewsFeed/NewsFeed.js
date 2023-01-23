import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FeedCard } from "./FeedCard";
import projImg1 from "./assets/img/project-img1.PNG";
import projImg2 from "./assets/img/project-img2.PNG";
import projImg3 from "./assets/img/project-img3.PNG";
import projImg4 from "./assets/img/project-img4.png";
import projImg5 from "./assets/img/project-img5.PNG";
import projImg6 from "./assets/img/project-img6.PNG";
import projImg7 from "./assets/img/project-img7.PNG";
import projImg8 from "./assets/img/project-img8.PNG";
import projImg9 from "./assets/img/project-img9.PNG";
import projImg10 from "./assets/img/project-img10.PNG";
import projImg11 from "./assets/img/project-img11.PNG";
import projImg12 from "./assets/img/project-img12.PNG";
import projImg13 from "./assets/img/project-img13.PNG";
import projImg14 from "./assets/img/project-img14.PNG";
import colorSharp2 from "./assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./App.css";

export const NewsFeed = () => {
  const projects = [
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
  ];
  const projects2 = [
    {
      link: "https://github.com/DillionB/KioskManager/tree/master/Kisosk_Manager_Backend",
      title: "User Registration AIP",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg7,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Crypto Scraper API",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg8,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Static Mesh Import Automation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      imgUrl: projImg9,
    },
  ];

  const projects3 = [
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Social Distancing Simulator",
      description: "UE4, Blender, Photoshop, premeir Pro",
      imgUrl: projImg10,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Roll.io",
      description: "UE4, IOS",
      imgUrl: projImg11,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Combat Operative Responsible for government insurgence",
      description: "UE4",
      imgUrl: projImg12,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "Behavior Trees, Blueprints, Animations, and More ",
      description: "C++, UE4, Blender",
      imgUrl: projImg13,
    },
    {
      link: "https://github.com/DillionB?tab=repositories",
      title: "ERC-20 and BEP-20 Smart Contracts",
      description: "Solidity",
      imgUrl: projImg14,
    },
  ];

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
                            return <FeedCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Row></Row>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <FeedCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <FeedCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
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
