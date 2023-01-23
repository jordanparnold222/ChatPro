import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MessagebarData } from "./MessagebarData";
import SubMenu from "./MessagebarMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #15171c;
  height: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MessagebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  transition: 350ms;
  z-index: 9;
`;

const MessagebarWrap = styled.div`
  width: 100%;
`;

const Messagebar = () => {
  const [Messagebar, setMessagebar] = useState(true);

  const showMessagebar = () => setMessagebar(!Messagebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showMessagebar} />
          </NavIcon>
        </Nav>
        <MessagebarNav Messagebar={Messagebar}>
          <MessagebarWrap>
            <NavIcon to="#"></NavIcon>
            {MessagebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </MessagebarWrap>
        </MessagebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Messagebar;
