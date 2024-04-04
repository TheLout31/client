import React from "react";
import "./ListCard.css";
const ListCard = ({ data }) => {
  return (
    <div className="new-doc-card" >
      {data}
    </div>
  );
};

export default ListCard;
