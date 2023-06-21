import "./custommodel.css";
import React from "react";
import { useSelector } from "react-redux";

const CustomModel = ({ id, showPopup, setShowPopup }) => {
  const { users } = useSelector((state) => state.counter);

  const singleUser = users.filter((user) => {
    return user.id === id;
  });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>close</button>
        <h2>{singleUser[0].name}</h2>
        <h2>{singleUser[0].email}</h2>
        <h2>{singleUser[0].age}</h2>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModel;
