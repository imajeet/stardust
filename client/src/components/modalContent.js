import React from 'react'
import Form from './form'

export const ModalContent = (props) => {
    const hasData = props.modalData && props.modalData.data ? true : false
    return(
        <div className='modal-content-container'>
            <div className='modal-head'>
                { hasData ? 'Update existing star' : 'Add a new star to the sky!' }
            </div>

            <Form/>

            <div className='modal-btn-container'>
                <button className='modal-btn-cancel'>Cancel</button>
                <button onClick={() => {
                    console.log(props.data)
                    props.data ?
                    props.updateStar(props.data) : 
                    props.addStar(props.formData)
                    }}
                    className='modal-btn'>{ hasData ? 'Save' : 'Add' }</button>
            </div>
        </div>
    )
}