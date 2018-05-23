import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../state/actions/modal'
import { stars } from '../stars'
import { setStarsData } from '../state/actions/stars'
import Rodal from 'rodal';
import { Navigation } from '../components/navigation';
import { ModalContent } from '../components/modalContent';

import 'rodal/lib/rodal.css';


class Wrapper extends Component{

    componentWillMount(){
        this.props.setStarsData(stars)
    }

    render(){

        const { openModal, closeModal, opened, modalData } = this.props

        return(
            <div className='wrapper'>
                <Rodal visible={opened}
                    onClose={() => closeModal()}
                    closeMaskOnClick={true}
                    closeOnEsc={true}
                    animation='slideUp'
                    width={620}
                    height={420}
                    duration={200}>
                    <ModalContent modalData={modalData}/>
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
    opened: rootReducer.modalOpened,
    modalData: rootReducer.modalData ? rootReducer.modalData : null
})


export default connect(mapStateToProps, { openModal, closeModal, setStarsData })(Wrapper)