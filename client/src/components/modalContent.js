import React from 'react'
import { Form } from './form'

export const ModalContent = (props) => {
    const hasData = props.modalData && props.modalData.data ? true : false
    return(
        <div className='modal-content-container'>
            <div className='modal-head'>
                { hasData ? 'Update existing star' : 'Add a new star to the sky!' }
            </div>
            <Form modalHasData={hasData} modalData={hasData ? props.modalData.data : null} />
            <div className='modal-btn-container'>
                <button className='modal-btn-cancel'>Cancel</button>
                <button className='modal-btn'>{ hasData ? 'Save' : 'Add' }</button>
            </div>
        </div>
    )
}