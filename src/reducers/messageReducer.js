import { SEND_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions.js';
import { LOAD_CHATS_SUCCESS } from '../actions/chatActions'

const initialStore = {
    messages: {}
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
             const { text, sender, messageId } = action;
 
             return {
                 messages: {
                     ...store.messages,
                     [messageId]: {
                         sender: sender,
                         text: text
                     }
                 }
             };
        }
        case REMOVE_MESSAGE: {
            const { messageId } = action;

            const newMessages = store.messages;
            delete newMessages[messageId];

            return {
                messages: {
                    ...newMessages
                }
            };
       }
       case LOAD_CHATS_SUCCESS: {
           const { messages } = action.payload.entities;

           return {
               ...store,
               messages
           }
       }
        default:
            return store;
    }
 }