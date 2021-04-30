import { SEND_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions.js';
import {
    ADD_CHAT,
    ACTIVATE_CHAT,
    REMOVE_CHAT,
    LOAD_CHATS_REQUEST,
    LOAD_CHATS_SUCCESS,
    LOAD_CHATS_ERROR
} from "../actions/chatActions";

const initialStore = {
    chats: {},
    isLoading: false,
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case REMOVE_MESSAGE: {
            const { messageId, chatId } = action;
            const indexRemoveMessage = store.chats[chatId].messageList.indexOf(Number(messageId));
            const newChats = store.chats;
            newChats[chatId].messageList.splice(indexRemoveMessage, 1)

            return {
                chats: {
                    ...newChats
                }
            }
       }
       case REMOVE_CHAT: {
           const { chatId } = action;

           const newChats = store.chats;
           delete newChats[chatId];

           return {
                chats: {
                    ...newChats
                }
            
        }
       }
       case ACTIVATE_CHAT: {
           const { activeChat, chatId } = action;

           return {
            chats: {
                ...store.chats,
                [chatId]: {
                    ...store.chats[chatId],
                    chatActive: activeChat
                }
            },
        };
       }
       case SEND_MESSAGE: {
            const { chatId, messageId } = action;

            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        messageList: [
                            ...store.chats[chatId].messageList,
                            messageId
                        ]
                    }
                },
            };
       }
       case ADD_CHAT: {
           const arrOfObj = Object.entries(store.chats);
           let chatId;
           if(arrOfObj.length) {
               chatId = Number(arrOfObj[arrOfObj.length - 1][0]) + 1;
           } else { chatId = 1 }

           return {
               ...store,
               chats: {
                   ...store.chats,
                   [chatId]: {
                       title: action.title,
                       messageList: [],
                       chatActive: false
                   }
               }
           }
       }
       case LOAD_CHATS_REQUEST: {
            return {
                ...store,
                isLoading: true
            }
       }
       case LOAD_CHATS_ERROR: {
        return {
            ...store,
            isLoading: false
        }
       }
       case LOAD_CHATS_SUCCESS: {
        const { chats } = action.payload.entities;

        return {
            ...store,
            chats,
            isLoading: false
        }
       }
       default:
           return store;
   }
}
