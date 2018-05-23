import { SET_STARS_DATA, DELETE_STAR, UPDATE_STAR, ADD_STAR } from '../reducers/stars'

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