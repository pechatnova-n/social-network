import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It is my first post', likesCount: 20},
                {id: 3, message: 'It is new post', likesCount: 6},
            ],
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good night'}
            ],
            dialogs: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Svetlana'},
                {id: 5, name: 'Lena'},
            ],
        },
        newsPage: {
            news: [
                {
                    id: 0,
                    description: "Лисы — животные дикие. Они не одомашнены. Собаки и кошки жили с людьми на протяжении веков и адаптировались к жизни с ними и обращению с ними. Лисы – нет. Основные породы лисиц, которые люди пытаются одомашнить, — это цветная разновидность рыжей лисы, известной как «Серебряная лиса», песец и (действительно бесспорно симпатичная) Фенек — лиса."

                },
                {
                    id: 1,
                    description: "Самым близким родственником дельфина является, как это ни странно, бегемот. Примерно 40 миллионов лет назад эволюционное развитие дельфинов и бегемотов разошлось, но некотрое родство сохраняется. Даже относящиеся к семейству дельфиновых косатки ближе к бегемотам, чем к китам. Интересно и то, что дельфины ближе к человеку, чем к любому другому обитателю морей."
                },
                {
                    id: 2,
                    description: "Самым близким родственником дельфина является, как это ни странно, бегемот. Примерно 40 миллионов лет назад эволюционное развитие дельфинов и бегемотов разошлось, но некотрое родство сохраняется. Даже относящиеся к семейству дельфиновых косатки ближе к бегемотам, чем к китам. Интересно и то, что дельфины ближе к человеку, чем к любому другому обитателю морей."
                },
            ],
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.newsPage = newsReducer(this._state.newsPage, action);

       this._callSubscriber(this._state);
    }


}






export default store;
window.state = store;







