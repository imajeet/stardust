import React, { Component } from 'react'

class Dropdown extends Component {
    
    state = {
        value: 5
    }

    handleChange = (e) => this.setState({value: e.target.value})
  
    render() {
      return (
        <div className='dropdown'>
            Choose the distance (in light years):
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
        </div>
      );
    }
  }

export default Dropdown