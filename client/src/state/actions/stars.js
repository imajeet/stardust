import {
    SET_STARS_DATA,
    DELETE_STAR,
    UPDATE_STAR,
    ADD_STAR,
    UPDATE_ERR,
    UPDATE_SUCCESS,
    INSERT_ERR,
    INSERT_SUCCESS,
    RESET_STATUS
} from '../reducers/stars'

export const setStarsData = (data) => ({
    type: SET_STARS_DATA,
    data
})

export const deleteStar = (id) => ({
    type: DELETE_STAR,
    id
})

export const updateStar = (star) => ({
    type: UPDATE_STAR,
    star
})

export const addStar = (data) => ({
    type: ADD_STAR,
    data
})

export const updateSuccess = () => ({
    type: UPDATE_SUCCESS,
    message: "You\'ve successfully changed the star\'s property"
})

export const updateFail = () => ({
    type: UPDATE_ERR,
    message: "Something weird happened - not updated."
})

export const insertSuccess = () => ({
    type: INSERT_SUCCESS,
    message: "You\'ve successfully gave a life to the nuclear beast."
})

export const insertFail = () => ({
    type: INSERT_ERR,
    message: "Oooops, it seems that u missed something"
})

export const resetStatus = () => ({
    type: RESET_STATUS
})