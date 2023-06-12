import React from "react";

const Header = () => {
  return (
    <div className=" border-black border-b-2 text-center py-8 flex flex-col gap-2">
      <h1 className="text-5xl font-thin text-gray-600">
        Mohammad <span className="font-normal text-gray-700">Akil</span>
      </h1>
      <p className="font-semibold text-lg">
        https://mohammad-akil.netlify.app/
      </p>
      <p>mohammadakilshakirhusain@gmail.com | 7600811783</p>
    </div>
  );
};

export default Header;
