import React from "react";

const LeftChild = () => {
  const topHeading = "text-3xl font-thin text-gray-600 uppercase";
  const midHeading = "font-semibold text-xl";
  const lowHeading = "font-medium";

  return (
    <div className={`flex flex-col gap-3 w-2/5`}>
      <div className="flex flex-col gap-2">
        <p className={`${topHeading}`}>EDUCATION</p>

        <div className="flex flex-col gap-1">
          <p className={`${midHeading}`}>K.J institute of engineering</p>
          <p className={`${lowHeading}`}>Computer Engineering</p>
          <p className="font-light">
            currently in 5 sem | <span>cgpa 8.42</span>
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className={`${midHeading}`}>
            Aadarsh secondary and higher secondary school
          </p>
          <p className={`${lowHeading}`}>12Th | GSEB</p>
          <p className="font-light">
            july 2019 | <span>anand</span>
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className={`${midHeading}`}>Narayan vidhyalaya</p>
          <p className={`${lowHeading}`}>10Th | GSEB</p>
          <p className="font-light">
            july 2019 | <span>vadodra</span>
          </p>
        </div>
      </div>

      <div>
        <p className={`${topHeading}`}>Links</p>
        <div className="flex flex-col gap-1 mt-2">
          <p className="font-light">
            Portfolio://{" "}
            <span className="font-semibold">
              https://mohammad-akil.netlify.app/
            </span>
          </p>
          <p className="font-light">
            Github://{" "}
            <span className="font-semibold">
              https://github.com/Mohammad-akil/
            </span>
          </p>
          <p className="font-light">
            LinkedIn://{" "}
            <span className="font-semibold">
              https://www.linkedin.com/in/mohammad-akil-3b0438203/
            </span>
          </p>
        </div>
      </div>

      <div>
        <p className={`${topHeading}`}>Skills</p>
        <div className="flex flex-col gap-1 mt-2">
          <p className={`${midHeading}`}>Programming</p>
          <p className="capitalize font-normal">over 5000 lines</p>
          <p>
            HTML • CSS • JavaScript • BootStrap • React.JS • Redux • Tailwind •
            Firebase
          </p>
          <p className="capitalize font-normal">
            Familier <br />
            Node js • Express js • Mongodb • mySql
          </p>
        </div>
      </div>

      <div>
        <p className={`${midHeading}`}>Other</p>
        <p>Git • Vs code • Thunder Client • Github • Rest api • Netlify</p>
      </div>
    </div>
  );
};

export default LeftChild;
