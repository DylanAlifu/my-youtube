import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="col-span-11 m-5 w-fit">
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
          title="Simone Biles Leads Team USA to Gold with Unforgettable Floor Routine | Paris Olympics"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[1280px] h-[720px]"
        ></iframe>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
