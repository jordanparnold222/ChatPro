import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Messagebar from "../../Messagebar/Messagebar";
import NavBar from "../../NavBar/NavBar";
import { StoryBoard } from "../../StoryBoard/StoryBoard";

function UserPage() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <StoryBoard />
      <Messagebar />
      <div className="UserPage">UserPage</div>
    </div>
  );
}

export default UserPage;
