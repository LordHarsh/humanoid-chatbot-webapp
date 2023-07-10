import React from "react";

const ConversationMessage = ({ message }) => {

  // const handleDelete = () => {
  //   dispatch({ type: "DELETE_MESSAGE", payload: message.id });
  // };

  return (
    <div
      className={`flex items-center p-2 ${
        message.role === "user"
          ? "justify-end text-right"
          : "justify-start text-left"
      }`}
    >
      <div
        className={`rounded-lg px-4 py-2 ${
          message.role === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.content}
      </div>
      {/* {message.role === "user" && (
        <button
          onClick={handleDelete}
          className="ml-2 text-red-500 hover:text-red-600"
        >
          X
        </button>
      )} */}
    </div>
  );
};

export default ConversationMessage;
