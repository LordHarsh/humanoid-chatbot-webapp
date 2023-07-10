import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConversationContextProvider } from "./context/conversationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConversationContextProvider>
      <App />
    </ConversationContextProvider>
  </React.StrictMode>
);
