import React, { Component } from 'react'
import { Navigation } from '../components/navigation';
import TableContainer from './Table'
import Input from '../components/input';
import Wrapper from './Wrapper'

class Dash extends Component {

	state = {
		searchValue: ''
	}

	handleChange = (e) => this.setState({searchValue: e.target.value})

	render(){
		return(
			<Wrapper>
				<div className='dash'>
					<div className='search-section'>
						<Input
							handleChange={this.handleChange}
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