import { LOAD_CHATS_ERROR } from '../actions/chatActions.js';
import { 
    SEND_MESSAGES_REQUEST,
    SEND_MESSAGES_SUCCESS,
    SEND_MESSAGES_ERROR,
    REMOVE_MESSAGE_REQUEST,
    REMOVE_MESSAGE_SUCCESS,
    REMOVE_MESSAGE_ERROR,
    LOAD_MESSAGES_REQUEST,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_ERROR
 } from '../actions/messageActions.js';

const initialStore = {
    messages: {},
    isLoading: false,
    isSending: false,
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGES_REQUEST: {
            return {
                ...store,
                isSending: true
            }
        }
        case SEND_MESSAGES_SUCCESS: {
             const { id, text, sender, chatId } = action.payload;
 
             return {
                 ...store,
                 isSending: false,
                 messages: {
                     ...store.messages,
                     [id]: {
                         id: id,
                         text: text,
                         sender: sender,
                         chatId: chatId
                     }
                 }
             };
        }
        case SEND_MESSAGES_ERROR: {
            return {
                ...store,
                isSending: false
            }
        }
        case REMOVE_MESSAGE_REQUEST: {
            return {
                ...store
            }
        }
        case REMOVE_MESSAGE_SUCCESS: {
            const { messageId } = action.payload;

            const newMessages = { ...store.messages };
            delete newMessages[messageId];

            return {
                ...store,
                messages: {
                    ...newMessages
                }
            };
       }
       case REMOVE_MESSAGE_ERROR: {
            return {
                ...store,
        }
       }
       case LOAD_MESSAGES_REQUEST: {
            return {
                ...store,
                isLoading: true
            }
       }
       case LOAD_MESSAGES_SUCCESS: {
        const { messages = {} } = action.payload.entities;

        return {
            ...store,
            isLoading: false,
            messages
        }
       }
       case LOAD_MESSAGES_ERROR: {
        return {
            ...store,
            isLoading: false
        }
       }
        default:
            return store;
    }
 }