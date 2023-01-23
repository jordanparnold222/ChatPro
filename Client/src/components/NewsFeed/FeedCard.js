import { Col } from "react-bootstrap";
import "./App.css";

export const FeedCard = ({ link, title, description, imgUrl }) => {
  return (
    <Col size={1} sm={10} md={10}>
      <div className="proj-imgbx" onClick={() => window.open({ link })}>
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
        </div>
      </div>
    </Col>
  );
};
