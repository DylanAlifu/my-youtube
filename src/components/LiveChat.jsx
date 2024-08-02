import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomEmoji,
  generateRandomMessage,
  generateRandomName,
} from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + " " + generateRandomEmoji(),
        })
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMessagePost = () => {
    dispatch(
      addMessage({
        name: "You",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  const handleMessagePostEnter = (e) => {
    if (e.key === "Enter") {
      handleMessagePost();
    }
  };

  return (
    <div className="w-full h-[720px] ml-4 p-2 border border-black bg-slate-100 rounded-lg flex flex-col justify-between">
      <div className="overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((cm, index) => (
          <ChatMessage key={index} name={cm.name} message={cm.message} />
        ))}
      </div>
      <div className="flex m-2">
        <input
          type="text"
          placeholder="message..."
          className="w-full p-2 rounded-l-lg border border-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          onKeyDown={handleMessagePostEnter}
        />
        <button
          className="p-2 bg-black text-white rounded-r-lg"
          onClick={handleMessagePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
