import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1,
            message: 'Бобр – это лесоруб созданный самой природой. Его острые резцы выполняют роль пилы и их прекрасно дополняют сильные челюсти с мощной мускулатурой. Именно это и позволяют бобрам валить деревья, из которых впоследствии и будут созданы плотины и так называемые «хатки».',
            likesCount: 15},
        {id: 2,
            message: 'Белки могут быть хищными. Несмотря на то, что в сознании обывателей белка является просто хрестоматийным грызуном, питающим страсть исключительно к орешкам и семечкам, на деле они всеядны. Они совершают нападения на мелких грызунов (включая зайчат), птиц и воруют из гнезд яйца.',
            likesCount: 20},
        {id: 3,
            message: 'Лягушки являются амфибиями, которые обитают почти во всех уголках нашей планеты. Их можно встретить практически в любой естественной среде: на болотах, возле других пресных водоемов, на земле, на деревьях, и даже в твердом слое глины на глубине нескольких метров. Разумеется, столь различный образ жизни не мог не найти своего выражения в видовом разнообразии этих амфибий.',
            likesCount: 6},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 8, message: action.newPostText, likesCount: 0} ],

            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
        }
    }

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}


export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode ===0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;