import { PROFILE_INFO } from './../actions/profileActions'

const initialStore = {
    profileInfo: {
        userName: 'Konstantin',
        surname: 'Kirieri',
        age: '27'
    }
}

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case PROFILE_INFO: {
            return {
                userName: store.userName,
                surname: store.surname,
                age: store.age,
            }
        }
        default:
            return store;
    }
 }