import React, { useState } from "react";
import Abcd from "./Abcd";

const xyz = () => {
  const [val, setValue] = useState("");

  return (
    <div>
      <Abcd setValue={setValue} />
    </div>
  );
};

export default xyz;
