import React from 'react'
import Form from './form'

export const ModalContent = (props) => {

    const hasData = props.modalData && props.modalData.data ? true : false
    const insertErr = props.formData && props.formData.starName.length < 1
    const updateErr = props.modalData && props.modalData.data.starName.length < 1

    const checker = () => {

        if(insertErr && !props.data) return props.insertFail() && alert('Do not worry, we learn by mistaking')
        if(updateErr && props.data) {
            props.updateFail()
            alert('Imagine how would u feel without a name?')
        }

        if(props.data && !updateErr){
            return props.updateStar(props.data)
        }

        if(!props.data && props.formData && !insertErr){
            return props.addStar(props.formData)
        }
    }

    return(
        <div className='modal-content-container'>
            <div className='modal-head'>
                { hasData ? 'Update existing star' : 'Add a new star to the sky!' }
            </div>

            <Form/>

            <div className='modal-btn-container'>
                <button onClick={() => props.closeModal()} className='modal-btn-cancel'>Cancel</button>
                <button onClick={() => checker()}
                    className='modal-btn'>{ hasData ? 'Save' : 'Add' }</button>
            </div>
        </div>
    )
}