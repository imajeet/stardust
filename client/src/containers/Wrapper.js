import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../state/actions/modal'
import Rodal from 'rodal';
import { Navigation } from '../components/navigation';

import 'rodal/lib/rodal.css';

class Wrapper extends Component{
    render(){

        const { openModal, closeModal, opened } = this.props

        console.log(opened)

        return(
            <div className='wrapper'>
                <Rodal visible={opened}
                    onClose={() => closeModal()}
                    closeMaskOnClick={true}
                    closeOnEsc={true}
                    animation='slideUp'
                    duration={200}>
                    <div>Content</div>
                </Rodal>
                <div className='container'>
                    <Navigation openModal={openModal} />
                    { this.props.children }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({rootReducer}) => ({
    opened: rootReducer.modalOpened
})


export default connect(mapStateToProps, { openModal, closeModal })(Wrapper)