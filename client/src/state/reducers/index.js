import { combineReducers } from "redux";
import { modalOpened, modalData } from './modal'
import { stars } from './stars'

const rootReducer = combineReducers({
    modalOpened,
    modalData,
    stars
})

export default rootReducer