import React, { Component } from 'react'

class Input extends Component{

    render(){

        const { placeholder, htmlFor, type, label, hasLabel, required, size, value, edit, name, handleChange } = this.props

        return(
            <div className='input-container'>

                { hasLabel ?  <label htmlFor={htmlFor} style={{paddingBottom: '10px', fontSize: '14px', fontWeight: 600}}>{label}{ required ? '*' : null }</label> : null}
                
                <input 
                    style={ size === 'lg' ? { width: '100%' } : { }}
                    type={type}
                    id={htmlFor}
                    name={name}
                    className='input'
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    />
            </div>
        )
    }
}

export default Input