import { SEND_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions.js';
import {
    ADD_CHAT_REQUEST,
    ADD_CHAT_SUCCESS,
    ADD_CHAT_ERROR,
    ACTIVATE_CHAT,
    DELETE_CHAT_REQUEST,
    DELETE_CHAT_SUCCESS,
    DELETE_CHAT_ERROR,
    LOAD_CHATS_REQUEST,
    LOAD_CHATS_SUCCESS,
    LOAD_CHATS_ERROR
} from "../actions/chatActions";

const initialStore = {
    chats: {},
    isLoading: false,
    isAdding: false,
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case DELETE_CHAT_REQUEST: {
            const { id } = action.payload;
            const { chats } = store;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...chats[id],
                    isDeleting: true,
                }
            }   
        }
       }
       case DELETE_CHAT_SUCCESS: {
           const { id } = action.payload;
           const { chats } = store;

           const newChats = { ...chats };
           delete newChats[id];

           return {
               ...store,
               chats: newChats,
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
       case ADD_CHAT_REQUEST: {
           return {
               ...store,
               isAdding: true,
           };
       }
       case ADD_CHAT_SUCCESS: {
           const { id, title } = action.payload;

           return {
               ...store,
               isAdding: false,
               chats: {
                   ...store.chats,
                   [id]: {
                       title: title,
                       messageList: [], // нужно ли?
                       chatActive: false
                   }
               }
           }
       }
       case ADD_CHAT_ERROR: {
        return {
            ...store,
            isAdding: true,
        };
       }
       case LOAD_CHATS_REQUEST: {
            return {
                ...store,
                isLoading: true
            }
       }
       case LOAD_CHATS_SUCCESS: {
        const { chats = {} } = action.payload.entities;

        Object.keys(chats).forEach((id) => {
            chats[id].messageList = [];
        });

        return {
            ...store,
            chats,
            isLoading: false
        }
       }
       case LOAD_CHATS_ERROR: {
        return {
            ...store,
            isLoading: false
        }
       }
       default:
           return store;
   }
}
