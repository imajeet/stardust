import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setModalData, openModal } from '../state/actions/modal'

class ActionsCell extends Component {
    render(){

        const { data, setModalData, openModal } = this.props

        return(
            <button onClick={() => {
                setModalData(data)
                openModal()
            }}>Edit</button>
        )
    }
}

export default connect(null, { setModalData, openModal })(ActionsCell)