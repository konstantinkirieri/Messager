export const ADD_CHAT = '@@chat/ADD_CHA';

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        title,
    }
};