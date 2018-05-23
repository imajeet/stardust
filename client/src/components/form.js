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
                required={true}
                value={modalHasData ? modalData.starName : null}
                edit={modalHasData}
                size='lg'
                type='text'/>

            { !modalHasData ?  <Dropdown/> : null}

            { modalHasData ? 
            <div className='coord-container'>
            
                <Input
                    hasLabel='true'
                    htmlFor='galXInput'
                    label='X Coord'
                    placeholder='Galactic X Coordinate'
                    required={false}
                    value={modalHasData ? modalData.galX : null}
                    edit={modalHasData}
                    size='md'
                    type='number'/>    

                <Input
                    hasLabel='true'
                    htmlFor='galYInput'
                    label='Y Coord'
                    placeholder='Galactic Y Coordinate'
                    required={false}
                    value={modalHasData ? modalData.galY : null}
                    edit={modalHasData}
                    size='md'
                    type='number'/>

                <Input
                    hasLabel='true'
                    htmlFor='galZInput'
                    label='Z Coord'
                    placeholder='Galactic Z Coordinate'
                    required={false}
                    value={modalHasData ? modalData.galZ : null}
                    edit={modalHasData}
                    size='md'
                    type='number'/>

            </div> : null
            }
            
            <ImageForm/>
        </form>
    )
}
