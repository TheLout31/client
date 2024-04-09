import React, { useEffect, useState } from "react";
import "./HomePage.css"; // Importing the CSS file for styling
import Card from "../Card/Card";
import { FaPlus } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { useDocumentId } from "../Context/DocumentIDContext";
import ListCard from "../ListCard/ListCard";

const HomePage = () => {
  const { documentID } = useDocumentId();

  useEffect(() => {});

  function showIds() {
    const interests = localStorage.getItem("userInfo");

    const interestsParsed = JSON.parse(interests);
    console.log(interestsParsed);
  }
  return (
    <div className="homepage">
      <NavBar />
      <div className="content">
        <h1>Create Documents</h1>
        {/* Here you can render recent documents */}
        <Card data={<FaPlus className="add-icon" />} />

        <h2>Recent Documents</h2>
        <ul className="document-list">
          <ListCard />
          <ListCard />  
          {/* Add more documents as needed */}
        </ul>
      </div>
      <button onClick={showIds}>Show Data</button>
    </div>
  );
};

export default HomePage;
