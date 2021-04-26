import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           if (action.sender === 'me') {
            setTimeout(() => {
                const arrOfObj = Object.entries(store.getState().messageReducer.messages);
                const messageId = Number(arrOfObj[arrOfObj.length - 1][0]) + 1;
                
                // const messageId = Object.keys(store.getState().messageReducer.messages).length + 1;
                store.dispatch(sendMessage('Не приставай ко мне, я робот!', 'bot', action.chatId, messageId))
            }, 1000)
           }
   }
   return next(action)
}
