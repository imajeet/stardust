import React, { Component } from 'react'
import { Navigation } from '../components/navigation';
import TableContainer from './Table'
import Input from '../components/input';
import Wrapper from './Wrapper'

class Dash extends Component {

	render(){
		return(
			<Wrapper>
				<div className='dash'>
					<div className='search-section'>
						<Input
							type='text'
							htmlFor='searchInput'
							placeholder='Search stars...'
							hasLabel={false}/>
					</div>
					<TableContainer/>
				</div>
			</Wrapper>
		)
	}
}

export default Dash