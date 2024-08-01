import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Trending",
  "News",
  "Games",
  "Movies",
  "Cartoon",
  "Live",
];

const ButtonList = () => {
  return (
    <div className="flex m-1">
      {buttonList.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
