import { SEND_MESSAGE } from '../actions/messageActions.js';
import { ADD_CHAT } from "../actions/chatActions";
import { ACTIVATE_CHAT } from '../actions/chatActiveActions';
import { REMOVE_CHAT } from '../actions/removeChatActions';
import { REMOVE_MESSAGE } from '../actions/removeMessageActions';

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1], chatActive: false},
        2: {title: 'Чат 2', messageList: [2], chatActive: false},
        3: {title: 'Чат 3', messageList: [], chatActive: false},
    }
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
           const chatId = Number(arrOfObj[arrOfObj.length - 1][0]) + 1;

           return {
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
       default:
           return store;
   }
}
