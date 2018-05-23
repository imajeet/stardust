export const SET_VALUE = "SET_VALUE"
export const RESET_VALUES = "RESET_VALUES"

const initialFormState = {
    starName: '',
    distance: 5,
    galX: 0,
    galY: 0,
    galZ: 0
}

export function formData(state = initialFormState, action){
    switch(action.type){
        case SET_VALUE:
            return Object.assign({}, state, action.val)
        case RESET_VALUES:
            return initialFormState
        default: 
            return state
    }
}