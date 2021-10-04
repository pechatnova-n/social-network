const SEND_MESSAGE = 'ADD_MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: 'Привет. Посмотри мой новый пост в профиле'},
        {id: 2, message: 'Видел интересные факты о бобрах?'},
    ],
    dialogs: [
        {id: 1, name: 'Мария'},
        {id: 2, name: 'Иван'},
        {id: 3, name: 'Светлана'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
        switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        }
        default: return state;
        }
    }

export const sendMessageAC = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })



export default dialogsReducer;