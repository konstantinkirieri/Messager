import { PROFILE_INFO, LOAD_PROFILE_REQUEST, LOAD_PROFILE_ERROR, LOAD_PROFILE_SUCCESS } from './../actions/profileActions'

const initialStore = {
    profileInfo: {},
    isLoading: false,
}

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case PROFILE_INFO: {
            return {
                ...store,
                profileInfo: {
                    userName: store.userName,
                    surname: store.surname,
                    age: store.age,
                }
            }
        }
        case LOAD_PROFILE_REQUEST: {
            return {
                ...store,
                isLoading: true
            }
       }
       case LOAD_PROFILE_ERROR: {
        return {
            ...store,
            isLoading: false
        }
       }
       case LOAD_PROFILE_SUCCESS: {
       const profileInfo = action.payload[0];

        return {
            ...store,
            profileInfo: { ...profileInfo },
            isLoading: false
        }
       }
        default:
            return store;
    }
 }