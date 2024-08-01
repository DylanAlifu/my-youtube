import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-5 py-1 mt-4 mx-3 bg-gray-200 rounded-lg hover:bg-gray-300 font-semibold">{name}</button>
    </div>
  );
};

export default Button;
