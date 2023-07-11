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

  let error_count = useRef(0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.message;
    setError(false);
    setSending(true);
    e.target.submit.disabled = true;
    e.target.message.disabled = true;
    const user_message = input.value.trim();
    input.value = "";
    const messages = [...conversations, {role:"user", content: user_message}]
    try {
      await dispatch({
        type: "ADD_CHAT",
        payload: { role: "user", content: user_message },
      });

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      const model_message = completion.data.choices[0].message["content"];
      console.log(model_message);
      await dispatch({
        type: "ADD_CHAT",
        payload: { role: "assistant", content: model_message.trim() },
      });
      console.log(conversations);
      input.value = "";
      e.target.submit.disabled = false;
      e.target.message.disabled = false;
      setSending(false);
    } catch (error) {
      console.log(error);
      if (error_count < 3) {
        error_count += 1;
        handleSubmit(e);
      } else {
        setError(true)
        await dispatch({
          type: "ADD_CHAT",
          payload: {
            role: "assistant",
            content:
              "There was a server overload. This is because we are currently on a free trial version of API. In future we are planning to have some custom models.",
          },
        });
        e.target.submit.disabled = true;
        e.target.message.disabled = true;
        e.target.message.value = "ERROR";
      }
    }
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
        <form onSubmit={handleSubmit} autocomplete="off" className="flex mt-10 py-5">
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
