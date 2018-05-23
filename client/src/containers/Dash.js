import React, { Component } from 'react'
import { Navigation } from '../components/navigation';
import TableContainer from './Table'
import SearchInput from '../components/searchInput';
import Wrapper from './Wrapper'

class Dash extends Component {

	render(){
		return(
			<Wrapper>
				<div className='dash'>
					<div className='search-section'>
						<SearchInput/>
					</div>
					<TableContainer/>
				</div>
			</Wrapper>
		)
	}
}

export default Dash