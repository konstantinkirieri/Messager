export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text, sender, chatId, messageId) => ({
    type: SEND_MESSAGE,
    text,
    sender,
    chatId,
    messageId
})