import { SEND_MESSAGES_SUCCESS, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGES_SUCCESS:
           if (action.payload.sender === 'me') {
            setTimeout(() => {
                const arrOfObj = Object.entries(store.getState().messageReducer.messages);
                const messageId = Number(arrOfObj[arrOfObj.length - 1][0]) + 1;
                
                store.dispatch(sendMessage({id: messageId, text: 'Не приставай ко мне, я робот!', sender: 'bot', chatId: action.payload.chatId}))
            }, 1000)
           }
   }
   return next(action)
}
