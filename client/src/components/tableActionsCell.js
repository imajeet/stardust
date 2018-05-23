import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setModalData, openModal } from '../state/actions/modal'
import { deleteStar } from '../state/actions/stars'

class ActionsCell extends Component {
    render(){

        const { data, setModalData, openModal, deleteStar} = this.props

        return(
            <div>
                <button onClick={() => {
                    setModalData(data)
                    openModal()
                }}>Edit</button>
                <button onClick={() => deleteStar(data.id)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default connect(null, { setModalData, openModal, deleteStar })(ActionsCell)