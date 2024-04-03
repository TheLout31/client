import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Handle click functionality here (e.g., navigate to create new document page)
    navigate("/new");
  };
  return (
    <div className="new-doc-card" onClick={handleClick}>
      {data}
    </div>
  );
};

export default Card;
