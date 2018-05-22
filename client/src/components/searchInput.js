import React, { Component } from 'react'

class SearchInput extends Component{

    state = {
        value: ''
    }

    onInputChange = (value) => this.setState({value}) 

    render(){
        return(
            <input className='search-input'
                placeholder='Search stars...'
                value={this.state.value}
                onChange={(e) => this.onInputChange(e.target.value)}
                />
        )
    }
}

export default SearchInput