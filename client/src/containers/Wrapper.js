import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal, removeModalData, shutDownModal } from '../state/actions/modal'
import { stars } from '../stars'
import { setStarsData, updateStar, addStar } from '../state/actions/stars'
import { resetValues } from '../state/actions/form'
import Rodal from 'rodal';
import { Navigation } from '../components/navigation';
import { ModalContent } from '../components/modalContent';

import 'rodal/lib/rodal.css';


class Wrapper extends Component{

    componentWillMount(){
        this.props.setStarsData(stars)
    }

    render(){

        const { openModal, closeModal, opened, modalData, removeModalData, updateStar, resetValues, formData, addStar} = this.props

        return(
            <div className='wrapper'>
                <Rodal visible={opened}
                    onClose={() => {
                        removeModalData()
                        closeModal()
                    }}
                    closeMaskOnClick={true}
                    closeOnEsc={true}
                    animation='slideUp'
                    width={900}
                    height={620}
                    duration={200}>
                    <ModalContent data={modalData} formData={formData} addStar={addStar} updateStar={updateStar} modalData={modalData}/>
                </Rodal>
                <div className='container'>
                    <Navigation openModal={openModal} resetForm={resetValues} />
                    { this.props.children }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({rootReducer}) => ({
    opened: rootReducer.modalOpened,
    modalData: rootReducer.modalData ? rootReducer.modalData : null,
    formData: rootReducer.formData
})


export default connect(mapStateToProps, { openModal, closeModal, removeModalData, setStarsData, shutDownModal, updateStar, resetValues, addStar })(Wrapper)