export const REMOVE_MESSAGE = '@@chat/REMOVE_MESSAGE';

export const removeMessage = (messageId, chatId) => {
    return {
        type: REMOVE_MESSAGE,
        messageId,
        chatId
    }
};