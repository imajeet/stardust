export const SET_STARS_DATA = "SET_STARS_DATA"
export const DELETE_STAR = "DELETE_STAR"
export const ADD_STAR = "ADD_STAR"
export const UPDATE_STAR = "UPDATE_STAR"
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export const UPDATE_ERR = "UPDATE_ERR"
export const INSERT_SUCCESS = "INSERT_SUCCESS"
export const INSERT_ERR = "INSERT_ERR"
export const RESET_STATUS = "RESET_STATUS"

const initialStatus = {
    updated: false,
    updateMessage: '',
    inserted: false,
    insertMessage: ''

}

export function stars(state = null, action){
    switch(action.type){
        case SET_STARS_DATA:
            return {
                ...state,
                data: action.data
            }
        case DELETE_STAR:
            return {
                ...state,
                data: state.data.filter(e => e.id !== action.id)
            }
        case ADD_STAR:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case UPDATE_STAR:
            return {
                ...state,
                data: state.data.map(item => {
                    if(item.id === action.star.data.id){
                      return { ...item, ...action.star.data }
                    }
                    return item
                  })
            }
        default:
            return state
    }
}

export function starStatus(state = initialStatus, action){
    switch(action.type){
        case UPDATE_SUCCESS:
            return {
                ...state,
                updated: true,
                updateMessage: action.message
            }
        case UPDATE_ERR:
            return {
                ...state,
                updated: false,
                updateMessage: action.message
            }
        case INSERT_SUCCESS:
            return {
                ...state,
                inserted: true,
                insertMessage: action.message
            }
        case INSERT_ERR:
            return {
                ...state,
                inserted: false,
                insertMessage: action.message
            }
        case RESET_STATUS:
            return initialStatus
        default:
            return state
    }
}