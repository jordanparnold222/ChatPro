import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Messagebar from "../../Messagebar/Messagebar";
import NavBar from "../../NavBar/NavBar";
import { NewsFeed } from "../../NewsFeed/NewsFeed";

function Homepage() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <NewsFeed />
      <Messagebar />
      <div className="Homepage">Homepage</div>
    </div>
  );
}

export default Homepage;
