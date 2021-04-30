import { createAction } from 'redux-api-middleware';

export const PROFILE_INFO = '@@profile/PROFILE_INFO';
export const LOAD_PROFILE_REQUEST = '@@profile/LOAD_PROFILE_REQUEST';
export const LOAD_PROFILE_SUCCESS = '@@profile/LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_ERROR = '@@profile/LOAD_PROFILE_ERROR';

export const profileInfo = (userName, surname, age) => ({
    type: SEND_MESSAGE,
    userName,
    surname,
    age,
})

export const loadProfile = () => {
    return createAction({
        endpoint: '/api/profile.json',
        method: 'GET',
        types: [LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_ERROR]
    })
}