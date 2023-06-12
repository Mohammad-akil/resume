import React from "react";

const RightChild = ({ basis }) => {
  const topHeading = "text-3xl font-thin text-gray-600 uppercase";
  const midHeading = "font-semibold text-xl";
  const lowHeading = "font-medium";
  return (
    <div className={`basis-${basis} flex flex-col gap-3 basis-${basis} w-2/3`}>
      <div>
        <p className={`${topHeading}`}>Experience</p>
        <p className="mt-2">
          Total Experience - 6 months internship + 5 months freelancing
        </p>
        <div className="flex flex-col">
          <p>KodeCreators</p>
        </div>
      </div>
    </div>
  );
};

export default RightChild;
