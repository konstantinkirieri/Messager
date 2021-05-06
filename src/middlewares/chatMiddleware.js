import { SEND_MESSAGE } from '../actions/messageActions';
import { activateChat } from '../actions/chatActions';
import { matchPath } from 'react-router-dom';
import { CHAT_PATTERN } from './../constans';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            
            if (action.sender !== 'me') {
                const chatId = action.chatId;

                store.dispatch(activateChat(true, chatId));

                setTimeout(() => {
                    const { pathname } = store.getState().router.location;
                    const { params } = matchPath(pathname, {
                        path: CHAT_PATTERN,
                        exact: true
                    });

                    if(chatId === params.id) store.dispatch(activateChat(false, chatId));
                }, 500)
            }
    }
    return next(action)
 }