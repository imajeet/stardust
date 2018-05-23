import { combineReducers } from "redux";
import { modalOpened, modalData } from './modal'
import { stars, starStatus } from './stars'
import { formData } from './form'

const rootReducer = combineReducers({
    modalOpened,
    modalData,
    stars,
    starStatus,
    formData,
})

export default rootReducer