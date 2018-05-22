import React, { Component } from 'react'
import { Navigation } from '../components/navigation';
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
				</div>
			</Wrapper>
		)
	}
}

export default Dash