import { SEND_MESSAGES_SUCCESS } from '../actions/messageActions';
import { DELETE_CHAT_SUCCESS, activateChat, deleteMessagesChat } from '../actions/chatActions';
import { matchPath } from 'react-router-dom';
import { push } from 'connected-react-router';
import { CHAT_PATTERN } from './../constans';

export default store => next => (action) => {
    switch (action.type) {
        // case SEND_MESSAGES_SUCCESS: {
        //     if (action.payload.sender !== 'me') {
        //             const chatId = action.payload.chatId;

        //             store.dispatch(activateChat(true, chatId));

        //             setTimeout(() => {
        //                 const { pathname } = store.getState().router.location;
        //                 const { params } = matchPath(pathname, {
        //                     path: CHAT_PATTERN,
        //                     exact: true
        //                 });

        //                 if(chatId === params.id) store.dispatch(activateChat(false, chatId));
        //             }, 500)
        //         }
        // }
        case DELETE_CHAT_SUCCESS: {

            const { id } = action.payload;
            const { pathname } = store.getState().router.location;
            const { params } = matchPath(pathname, {
                path: CHAT_PATTERN,
                exact: true,
            });
            const currentChatId = params.id;

            if (id === currentChatId) {
                store.dispatch(push('/profile'));
            }

            store.dispatch(deleteMessagesChat(id));
            break;
        }     
    }
    return next(action)
 }