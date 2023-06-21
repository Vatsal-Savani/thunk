import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, showUser } from "../slices/counterSlice";
import CustomModel from "./CustomModel";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { users, loading } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  console.log(searchQuery);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2>All Data</h2>
      <div className="d-flex justify-content-center my-3">
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault1"
            value=""
            checked={radioData === ""}
            onChange={(e) => setRadioData("")}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            All
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault2"
            value="Male"
            checked={radioData === "Male"}
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault3"
            value="Female"
            checked={radioData === "Female"}
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Female
          </label>
        </div>
      </div>

      {users &&
        users
          .filter((user) => {
            if (searchQuery.length === 0) {
              return user;
            }
            return user.name.toLowerCase().includes(searchQuery.toLowerCase());
          })
          .filter((user) => {
            if (radioData === "") {
              return user;
            }
            return user.gender === radioData;
          })
          .map((user) => {
            return (
              <div key={user.id} className="card w-50 mx-auto my-4">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h6>
                  <p className="card-text">{user.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(user.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/update/${user.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Read;
