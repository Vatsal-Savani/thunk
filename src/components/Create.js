import React, { useState } from "react";

const Create = () => {
  const [users, setUsers] = useState({});

  const getUsersData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  console.log(users);

  return (
    <div>
      <form className="w-50 mx-auto my-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault1"
            value="Male"
            onChange={getUsersData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault2"
            value="Female"
            onChange={getUsersData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
