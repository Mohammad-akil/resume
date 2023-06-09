import React from "react";
import RightChild from "./RightChild";
import LeftChild from "./LeftChild";

const Main = () => {
  return (
    <div className="flex gap-2 px-7 mt-3">
      <LeftChild basis={1 / 4} />
      <RightChild basis={3 / 4} />
    </div>
  );
};

export default Main;
