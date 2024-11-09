import React from "react";
import "./UserCard.css";

const UserCard = ({ name, email, age, info, imageUrl, onClose }) => {
  return (
    <div className="user-card">
      <button className="btn-close" onClick={onClose}>
        &times;
      </button>
      <img src={imageUrl} alt={`${name}'s profile`} className="user-image" />
      <div className="user-details">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
        <p className="user-age">{age} years old</p>
        <p className="user-info">{info}</p>
      </div>
    </div>
  );
};

export default UserCard;
