import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/modal";

export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})