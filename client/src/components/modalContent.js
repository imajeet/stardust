import React from 'react'
import { Form } from './form'

export const ModalContent = (props) => {
    const hasData = props.modalData && props.modalData.data ? true : false
    return(
        <div className='modal-content-container'>
            <div className='modal-head'></div>
            <Form modalHasData={hasData} modalData={hasData ? props.modalData.data : null} />
            <div className='modal-btn-container'></div>
        </div>
    )
}