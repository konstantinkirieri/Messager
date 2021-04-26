import { SEND_MESSAGE } from '../actions/messageActions.js';
import { REMOVE_MESSAGE } from '../actions/removeMessageActions';

const initialStore = {
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
        default:
            return store;
    }
 }