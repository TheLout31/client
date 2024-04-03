import React from "react";
import "./HomePage.css"; // Importing the CSS file for styling
import Card from "../Card/Card";
import { FaPlus } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar/>
      <div className="content">
        <h2>Recent Documents</h2>
        {/* Here you can render recent documents */}
        <ul className="document-list">
          <Card data={<FaPlus className="add-icon" />} />
          <Card />
          <Card />
          {/* Add more documents as needed */}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
