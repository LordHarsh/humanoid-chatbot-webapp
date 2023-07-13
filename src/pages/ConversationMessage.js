import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useTransition, animated } from "react-spring";

const ConversationMessage = ({ message }) => {
  // const handleDelete = () => {
  //   dispatch({ type: "DELETE_MESSAGE", payload: message.id });
  // };

  const transitions = useTransition(message, {
    from: {
      opacity: 0,
      transform:
        message.role === "user" ? "translateX(100%)" : "translateX(-100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return transitions((style, item) => (
    <animated.div
      style={style}
      className={`flex items-center p-2 ${
        item.role === "user" || item.role === "system"
          ? "flex-row-reverse justify-end text-right"
          : "justify-start text-left"
      }`}
    >
      <div className="flex items-end">
        <FaUserCircle
          className={`text-2xl min-w-max ${
            item.role === "user" || item.role === "system"
              ? "text-blue-500"
              : "text-gray-800"
          }`}
        />
        <div
          className={`ml-2 mr-2 rounded-3xl px-4 py-2 shadow-lg ${
            item.role === "user" || item.role === "system"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <div className="rounded-full whitespace-pre-wrap">{item.content}</div>
        </div>
      </div>
      <div className="flex items-center">
        {/* {item.role === "user" && (
          <button
            onClick={handleDelete}
            className="ml-2 text-red-500 hover:text-red-600"
          >
            <FaTrashAlt />
          </button>
        )} */}
      </div>
    </animated.div>
  ));
};

export default ConversationMessage;
