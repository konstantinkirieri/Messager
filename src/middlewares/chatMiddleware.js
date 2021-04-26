import { SEND_MESSAGE } from "../actions/messageActions";
import { activateChat } from "../actions/chatActiveActions"

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:

            const { chatId } = action;
            console.log(chatId);
            
            if (action.sender !== 'me') {
                const chatId = action.chatId;

                store.dispatch(activateChat(true, chatId));

                setTimeout(() => {
                    store.dispatch(activateChat(false, chatId));
                }, 500)
            }
    }
    return next(action)
 }