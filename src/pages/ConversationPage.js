import React, { useRef, useEffect, useState } from "react";
import { useConversationContext } from "../hooks/useConversationContext";
import ConversationMessage from "./ConversationMessage";
const { Configuration, OpenAIApi } = require("openai");

const ConversationPage = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  const [error, setError] = useState(null);
  const [sending, setSending] = useState(null);
  const { conversations, dispatch } = useConversationContext();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  useEffect(() => {
    const handleSubmit = async () => {
      if (conversations.length > 0) {
        const lastMessage = conversations[conversations.length - 1];
        if (lastMessage.role === "user") {
          setError(false);
          setSending(true);

          try {
            const completion = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: conversations,
            });
            const model_message = completion.data.choices[0].message.content;

            await dispatch({
              type: "ADD_CHAT",
              payload: { role: "assistant", content: model_message.trim() },
            });

            setSending(false);
          } catch (error) {
            console.log(error);
            setError(true);
            await dispatch({
              type: "ADD_CHAT",
              payload: {
                role: "assistant",
                content:
                  "There was a server overload. This is because we are currently on a free trial version of the API. In the future, we are planning to have some custom models.",
              },
            });
          }
        }
      }
    };

    handleSubmit();
  }, [conversations, dispatch, openai]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const input = e.target.message;
    const user_message = input.value;
    input.value = "";

    dispatch({
      type: "ADD_CHAT",
      payload: { role: "user", content: user_message },
    });
  };

  return (
    <div className="container mx-auto px-6 py-4 h-screen flex flex-col mt-10">
      <div className="bg-white rounded-lg shadow-lg p-4 mt-4 w-full md:w-97 mx-auto flex-grow">
        <div className="overflow-y-auto h-full">
          {conversations.map((message, index) => (
            <ConversationMessage key={index} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmitForm} className="flex mt-10 py-5">
          <input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring"
          />
          <button
            type="submit"
            name="submit"
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConversationPage;
