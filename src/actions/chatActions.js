import { createAction } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from './../utils/schemes';

export const ADD_CHAT = '@@chat/ADD_CHA';
export const ACTIVATE_CHAT = '@@chat/ACTIVATE_CHAT';
export const REMOVE_CHAT = '@@chat/REMOVE_CHAT';
export const LOAD_CHATS_REQUEST = '@@chat/LOAD_CHATS_REQUEST';
export const LOAD_CHATS_SUCCESS = '@@chat/LOAD_CHATS_SUCCESS';
export const LOAD_CHATS_ERROR = '@@chat/LOAD_CHATS_ERROR';

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        title
    }
};


export const activateChat = (activeChat, chatId) => {
    return {
        type: ACTIVATE_CHAT,
        activeChat,
        chatId
    }
};

export const removeChat = (chatId) => {
    return {
        type: REMOVE_CHAT,
        chatId
    }
};

export const loadChats = () => {
    return createAction({
        endpoint: '/api/chats.json',
        method: 'GET',
        types: [LOAD_CHATS_REQUEST, {
            type: LOAD_CHATS_SUCCESS,
            payload: async (action, state, res) => {
                const json = await res.json();
                return normalize(json, [chats]);
            }
        }, LOAD_CHATS_ERROR]
    })
}