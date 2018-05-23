import React, { Component } from 'react'

class Dropdown extends Component {
    
    state = {
        value: 5
    }

    render() {

      const { handleChange, distance } = this.props

      return (
        <div className='dropdown'>
            <span>Choose the distance (in light years):</span>
            <select name='distance' value={distance} onChange={handleChange}>
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