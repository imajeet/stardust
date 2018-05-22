import React, { Component } from 'react'
import { Navigation } from '../components/navigation';

class Wrapper extends Component{
    render(){
        return(
            <div className='wrapper'>
                <div className='container'>
                    <Navigation/>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Wrapper