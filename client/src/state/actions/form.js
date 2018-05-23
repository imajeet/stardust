import { SET_VALUE, RESET_VALUES } from '../reducers/form'

export const setValue = (val) => ({
    type: SET_VALUE,
    val
})

export const resetValues = () => ({
    type: RESET_VALUES
})