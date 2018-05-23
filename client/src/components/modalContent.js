import React from 'react'
import { Form } from './form'

export const ModalContent = (props) => {
    const hasData = props.modalData && props.modalData.data ? true : false
    return(
        <div className='modal-content-container'>
            <Form/>
        </div>
    )
}