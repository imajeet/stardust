import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editModalData } from '../state/actions/modal'
import { setValue } from '../state/actions/form'
import Input from './input'
import Dropdown from './dropdown'
import ImageForm from './imgForm'

class Form extends Component {

    state = {
        starName: '',
        distance: 5,
        galX: 0,
        galY: 0,
        galZ: 0,
        file: null,
        imgPreviewUrl: null
    }

    handleInputChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleEdit = (e) => this.props.editModalData({[e.target.name]: e.target.value})
    handleInsert = (e) => this.props.setValue({[e.target.name]: e.target.value})

    switchHandler = (e) => this.props.data ? this.handleEdit(e) : this.handleInsert(e)

    handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imgPreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }


    render(){

    const { modalHasData, data, editModalData, newStar } = this.props

        return (
            <form className='form' method='' action='' onSubmit={(x) => console.log(x)}>
                <Input
                    handleChange={this.switchHandler}
                    hasLabel='true'
                    htmlFor='starNameInput'
                    name='starName'
                    label='Star Name'
                    placeholder='Enter star name here...'
                    required={true}
                    value={data ? data.starName : newStar.starName}
                    edit={modalHasData}
                    size='lg'
                    type='text'/>


                <div className='coord-container'>
                
                    <Input
                        handleChange={this.switchHandler}
                        hasLabel='true'
                        htmlFor='galXInput'
                        name='galX'
                        label='X Coord'
                        placeholder='Galactic X Coordinate'
                        required={false}
                        value={data ? data.galX : newStar.galX}
                        edit={modalHasData}
                        size='md'
                        type='number'/>    

                    <Input
                        handleChange={this.switchHandler}
                        hasLabel='true'
                        htmlFor='galYInput'
                        name='galY'
                        label='Y Coord'
                        placeholder='Galactic Y Coordinate'
                        required={false}
                        value={data ? data.galY : newStar.galY}
                        edit={modalHasData}
                        size='md'
                        type='number'/>

                    <Input
                        handleChange={this.switchHandler}
                        hasLabel='true'
                        htmlFor='galZInput'
                        name='galZ'
                        label='Z Coord'
                        placeholder='Galactic Z Coordinate'
                        required={false}
                        value={data ? data.galZ : newStar.galZ}
                        edit={modalHasData}
                        size='md'
                        type='number'/>

                </div> 

                { !data ?  <Dropdown handleChange={this.switchHandler} distance={newStar.distance}/> : null}
                
                <ImageForm
                    handleImageChange={this.handleImageChange}
                    file={this.state.file}
                    imgPreviewUrl={this.state.imgPreviewUrl}/>
            </form>
        )
}
}

const mapStateToProps = ({rootReducer}) => ({
    data: rootReducer.modalData ? rootReducer.modalData.data : null,
    newStar: rootReducer.formData
})

export default connect(mapStateToProps, { editModalData, setValue })(Form)