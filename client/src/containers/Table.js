import React, { Component } from 'react'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'
import { connect } from 'react-redux'
import "react-table/react-table.css";
import ActionsCell from '../components/tableActionsCell';

class TableContainer extends Component {

	state = {
		sorted: [],
		page: 0,
		pageSize: 10,
		expanded: {},
		resized: [],
		filtered: []
	}

	render(){

		const { stars } = this.props

		return(
			
		<ReactTable
		  data={stars}

		  defaultFilterMethod={(filter, row) =>
			String(row[filter.id]) === filter.value}
			
          columns={[
			{

			columns: [
				{
					Header: "ID",
					id: "id",
					width: 100,
					accessor: d => d.id,
				  	filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["id"] }),
                  	filterAll: true
				},
			]
			},
            {
            columns: [
                {
                  Header: "Star Name",
				  id: "starName",
				  accessor: d => d.starName,
				  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["starName"] }),
                  filterAll: true
                },
              ]
			},
			{
			columns: [
				{
					Header: "Distance (Light Years)",
					accessor: "dist",
					width: 200,
					filterMethod: (filter, row) => {
						if (filter.value === "all") {
						  return true;
						}
						if (filter.value === "true") {
						  return row[filter.id] >= 10;
						}
						return row[filter.id] < 10;
					  },
					  Filter: ({ filter, onChange }) =>
						<select
						  onChange={event => onChange(event.target.value)}
						  style={{ width: "100%", height: '40px' }}
						  value={filter ? filter.value : "all"}
						>
						  <option value="all">Show All</option>
						  <option value="true">More than 10 ly</option>
						  <option value="false">Less than 10 ly</option>
						</select>
				},
			]
			},
            {
			columns: [
				{
					Header: "X Coord",
					accessor: "galX",
					width: 150
				},
				{
					Header: "Y Coord",
					accessor: "galY",
					width: 150
				},
				{
					Header: "Z Coord",
					accessor: "galZ",
					width: 150
				}
			]
			},
			{
			columns: [
				{
					Header: 'Actions',
					id: "xd",
					width: 100,
					Cell: (row) => <ActionsCell data={row.original}/>
				},
			]
			},
          ]}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
          // Controlled props
          sorted={this.state.sorted}
          page={this.state.page}
          pageSize={this.state.pageSize}
          expanded={this.state.expanded}
          resized={this.state.resized}
          filtered={this.state.filtered}
          // Callbacks
          onSortedChange={sorted => this.setState({ sorted })}
          onPageChange={page => this.setState({ page })}
          onPageSizeChange={(pageSize, page) =>
            this.setState({ page, pageSize })}
          onExpandedChange={expanded => this.setState({ expanded })}
          onResizedChange={resized => this.setState({ resized })}
          onFilteredChange={filtered => this.setState({ filtered })}
        />
		)
	}
}

const mapStateToProps = ({rootReducer}) => ({
	stars: rootReducer.stars ? rootReducer.stars.data : null
})

export default connect(mapStateToProps, {  })(TableContainer)