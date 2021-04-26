export const PROFILE_INFO = '@@message/PROFILE_INFO';

export const profileInfo = (userName, surname, age) => ({
    type: SEND_MESSAGE,
    userName,
    surname,
    age,
})