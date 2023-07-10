import { ConversationContext } from "../context/conversationContext";
import { useContext } from "react";

export const useConversationContext = () => {
    const context = useContext(ConversationContext);
    if (!context){
        throw Error('useConversationContext must be used inside a ConversationContextProvider');
    }
    return context;
};
