export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

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