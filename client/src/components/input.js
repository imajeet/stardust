import React, { Component } from 'react'

class Input extends Component{

    state = {
        value: ''
    }

    onInputChange = (value) => this.setState({value}) 

    render(){

        const { placeholder, htmlFor, type, label, hasLabel, required, size, value, edit} = this.props

        return(
            <div className='input-container'>

                { hasLabel ?  <label htmlFor={htmlFor} style={{paddingBottom: '10px', fontSize: '12px', fontWeight: 600}}>{label}{ required ? '*' : null }</label> : null}
                
                <input 
                    style={ size === 'lg' ? { width: '100%' } : { }}
                    type={type}
                    id={htmlFor}
                    className='input'
                    placeholder={placeholder}
                    value={edit ? value : this.state.value}
                    onChange={(e) => this.onInputChange(e.target.value)}
                    />
            </div>
        )
    }
}

export default Input