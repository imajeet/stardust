import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_DATA, REMOVE_MODAL_DATA, CHANGE_MODAL_DATA } from "../reducers/modal";

export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const setModalData = (data) => ({
    type: SET_MODAL_DATA,
    data
})

export const removeModalData = () => ({
    type: REMOVE_MODAL_DATA
})

export const editModalData = (value) => ({
    type: CHANGE_MODAL_DATA,
    value
})