export const ACTIVATE_CHAT = '@@chat/ACTIVATE_CHA';

export const activateChat = (activeChat, chatId) => {
    return {
        type: ACTIVATE_CHAT,
        activeChat,
        chatId
    }
};