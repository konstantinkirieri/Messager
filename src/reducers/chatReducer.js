import { SEND_MESSAGE } from '../actions/messageActions.js';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },
    messages: {
        1: {
            sender: 'bot',
            text: 'Привет'
        },
        2: {
            sender: 'bot',
            text: 'Как дела?'
        }
    }
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case SEND_MESSAGE: {
            const { text, sender, chatId } = action;
            const messageId = Object.keys(store.messages).length + 1;

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
                messages: {
                    ...store.messages,
                    [messageId]: {
                        sender: sender,
                        text: text
                    }
                }
            };
       }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;

           return {
               chats: {
                   ...store.chats,
                   [chatId]: {
                       title: action.title,
                       messageList: []
                   }
               },
               messages: {
                   ...store.messages
               }
           }
       }
       default:
           return store;
   }
}
