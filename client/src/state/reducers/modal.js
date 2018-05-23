export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const SET_MODAL_DATA = "SET_MODAL_DATA"
export const REMOVE_MODAL_DATA = "REMOVE_MODAL_DATA"

export function modalOpened(state = false, action){
    switch(action.type){
        case OPEN_MODAL:
            return true
        case CLOSE_MODAL:
            return false
        default:
            return state
    }
}

export function modalData(state = null, action){
    switch(action.type){
        case SET_MODAL_DATA:
            return {
                ...state,
                data: action.data
            }
        case REMOVE_MODAL_DATA:
            return null
        default: 
            return state
    }
}