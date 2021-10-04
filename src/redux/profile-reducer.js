import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos }}
        }
        default:
            return state;
        }
    }

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
            dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode ===0) {
                dispatch(setStatus(status));
            }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode ===0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode ===0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;