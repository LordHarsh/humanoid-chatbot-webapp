import { createContext, useReducer } from "react";
// import { useEffect } from "react";
export const ConversationContext = createContext();

export const conversationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHAT":
      return {
        conversations: [...state.conversations, action.payload],
      };
    case "ADD_USER_CHAT":
      return {
        conversations: [...state.conversations, action.payload],
      };
    case "CLEAR_CHAT":
      return {
        conversations: [{"role": "system", "content": "You are a helpful professor. You have deep knowledge about engineering and can answer related questions."}],
      };
    default:
      return state;
  }
};

export const ConversationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(conversationReducer, {
    conversations: [{"role": "system", "content": "You are a helpful engineering professor."}],
  });

  // useEffect(() => {
  //     const conversations = JSON.parse(localStorage.getItem('conversations'))
  //     if (conversations){
  //         dispatch({type: "ADD_MODEL_CHAT", payload: conversations})
  //     }
  // }, [])

  return (
    <ConversationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ConversationContext.Provider>
  );
};
