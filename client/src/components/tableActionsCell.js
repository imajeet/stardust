import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setModalData, openModal } from '../state/actions/modal'
import { deleteStar } from '../state/actions/stars'

class ActionsCell extends Component {
    render(){

        const { data, setModalData, openModal, deleteStar} = this.props

        return(
            <div className='actions-cell'>
                <button className='action-btn-edit' onClick={() => {
                    setModalData(data)
                    openModal()
                }}>
                    <i className="fas fa-pencil-alt"></i>
                </button>

                <button className='action-btn-del' onClick={() => deleteStar(data.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}

export default connect(null, { setModalData, openModal, deleteStar })(ActionsCell)