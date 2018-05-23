import React from 'react'
import Input from './input'
import Dropdown from './dropdown'

export const Form = () => {
    return (
        <form className='form' method='' action=''>
            <Input
                hasLabel='true'
                htmlFor='starNameInput'
                label='Star Name'
                placeholder='Enter star name here...'
                required='true'
                type='text'/>

            <Dropdown/>
        </form>
    )
}
