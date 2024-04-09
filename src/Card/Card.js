import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDocumentId } from "../Context/DocumentIDContext";
const Card = ({ data, onDocummnet }) => {
  const { setDocumentID, documentID } = useDocumentId();
  const [dataArray, setDataArray] = useState([]);
  const navigate = useNavigate();
  const docID = v4();

  useEffect(() => {
    const obj = { _id: docID }; // Create an object with the document ID
    setDataArray((prevArray) => [...prevArray, obj]); // Update dataArray with the new object
    setDocumentID(dataArray); // Set the document ID using context
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Save dataArray to localStorage whenever it changes
    localStorage.setItem("userInfo", JSON.stringify(dataArray));
  },);

  const handleClick = () => {
    console.log(dataArray);
    navigate(`/documents/${docID}`);
  };
  return (
    <div className="new-doc-card" onClick={handleClick}>
      {data}
    </div>
  );
};

export default Card;
