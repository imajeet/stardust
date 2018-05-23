import React from 'react'
import Input from './input'
import Dropdown from './dropdown'
import ImageForm from './imgForm'

export const Form = ({modalHasData, modalData}) => {
    return (
        <form className='form' method='' action=''>
            <Input
                hasLabel='true'
                htmlFor='starNameInput'
                label='Star Name'
                placeholder='Enter star name here...'
                required='true'
                value={modalHasData ? modalData.starName : null}
                edit={modalHasData}
                size='lg'
                type='text'/>

            { !modalHasData ?  <Dropdown/> : null}
            
            <ImageForm/>
        </form>
    )
}
