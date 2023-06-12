import React from "react";
import RightChild from "./RightChild";
import LeftChild from "./LeftChild";

const Main = () => {
  return (
    <div className="flex gap-2 px-10 mt-5 mb-10">
      <LeftChild />
      <RightChild />
    </div>
  );
};

export default Main;
