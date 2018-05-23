import React, { Component } from 'react'

class Input extends Component{

    state = {
        value: ''
    }

    onInputChange = (value) => this.setState({value}) 

    render(){

        const { placeholder, htmlFor, type, label, hasLabel, required } = this.props

        return(
            <div className='input-container'>
                { hasLabel ?  <label htmlFor={htmlFor} style={{paddingBottom: '10px'}}>{label}{ required ? '*' : null }</label> : null}
                
                <input 
                    type={type}
                    id={htmlFor}
                    className='input'
                    placeholder={placeholder}
                    value={this.state.value}
                    onChange={(e) => this.onInputChange(e.target.value)}
                    />
            </div>
        )
    }
}

export default Input