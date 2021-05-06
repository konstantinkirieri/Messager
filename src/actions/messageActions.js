export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const REMOVE_MESSAGE = '@@chat/REMOVE_MESSAGE';

export const sendMessage = (text, sender, chatId, messageId) => ({
    type: SEND_MESSAGE,
    text,
    sender,
    chatId,
    messageId
})

export const removeMessage = (messageId, chatId) => {
    return {
        type: REMOVE_MESSAGE,
        messageId,
        chatId
    }
};