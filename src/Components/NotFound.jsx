import React from "react";
import error from "../assets/error-404.png";
const NotFound = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-semibold text-blue-500">
        Opps! page not found
      </h1>
      <div className="flex justify-center items-center">
        <img src={error} alt="NotFound" />
      </div>
    </div>
  );
};

export default NotFound;
