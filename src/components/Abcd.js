import React from "react";

const Abcd = ({ setValue }) => {
  return (
    <div>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Abcd;
