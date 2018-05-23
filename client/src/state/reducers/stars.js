export const SET_STARS_DATA = "SET_STARS_DATA"
export const DELETE_STAR = "DELETE_STAR"
export const ADD_STAR = "ADD_STAR"
export const UPDATE_STAR = "UPDATE_STAR"

export function stars(state = null, action){
    switch(action.type){
        case SET_STARS_DATA:
            return {
                ...state,
                data: action.data
            }
        case DELETE_STAR:
            return state.filter(e => e.id !== action.id)
        case ADD_STAR:
            return {
                ...state,
                data: [...state.data, action.newStar]
            }
        case UPDATE_STAR:
            return state.map(item => {
                if(item.id === action.star.id){
                  return { ...item, ...action.star }
                }
                return item
              })
        default:
            return state
    }
}