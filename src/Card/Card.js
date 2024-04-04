import React from "react";
import "./Card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDocumentId } from "../Context/DocumentIDContext";
const Card = ({ data, onDocummnetCreate }) => {
  const { setDocumentID } = useDocumentId();
  const navigate = useNavigate();
  const docID = v4();
  const [savedData, setsaveData] = useState([]);
  const newDocument = {
    id: documentID,
  };
  const handleClick = () => {
    setDocumentID(docID);
    
    navigate(`/documents/${docID}`);
  };
  return (
    <div className="new-doc-card" onClick={handleClick}>
      {data}
    </div>
  );
};

export default Card;
