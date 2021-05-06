import { createAction } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { messages } from './../utils/schemes';

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const REMOVE_MESSAGE_REQUEST = '@@chat/REMOVE_MESSAGE_REQUEST';
export const REMOVE_MESSAGE_SUCCESS = '@@chat/REMOVE_MESSAGE_SUCCESS';
export const REMOVE_MESSAGE_ERROR = '@@chat/REMOVE_MESSAGE_ERROR';
export const LOAD_MESSAGES_REQUEST = '@@chat/LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = '@@chat/LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = '@@chat/LOAD_MESSAGES_ERROR';
export const SEND_MESSAGES_REQUEST = '@@chat/SEND_MESSAGES_REQUEST';
export const SEND_MESSAGES_SUCCESS = '@@chat/SEND_MESSAGES_SUCCESS';
export const SEND_MESSAGES_ERROR = '@@chat/SEND_MESSAGES_ERROR';

export const sendMessage = ({ id, text, sender, chatId }) => {
    return createAction({
        endpoint: `/api/messages?chatId=${chatId}`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ id, text, sender, chatId }),
        types: [
            SEND_MESSAGES_REQUEST,
            {
                type: SEND_MESSAGES_SUCCESS,
                payload: { id, text, sender, chatId }
            },
            SEND_MESSAGES_ERROR
        ]
    })
};

export const removeMessage = (messageId) => {
    return createAction({
        endpoint: `/api/messages/${messageId}`,
        method: 'DELETE',
        types: [
            REMOVE_MESSAGE_REQUEST,
            {
                type: REMOVE_MESSAGE_SUCCESS,
                payload: { messageId }
            },
            REMOVE_MESSAGE_ERROR
    ]
    })
};

export const loadMessages = (chatId) => {
    return createAction({
        endpoint: `/api/messages?chatId=${chatId}`,
        method: 'GET',
        types: [LOAD_MESSAGES_REQUEST, {
            type: LOAD_MESSAGES_SUCCESS,
            payload: async (action, state, res) => {
                const json = await res.json();
                return normalize(json, [messages]);
            }
        }, LOAD_MESSAGES_ERROR]
    })
};