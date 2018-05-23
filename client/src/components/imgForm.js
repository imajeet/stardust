import React, { Component } from 'react'

class ImageForm extends Component {

    render(){

        const { handleImageChange, imgPreviewUrl, file } = this.props

        return(
            <div className='img-form-container'>
                { !imgPreviewUrl ?  <input className='inputfile' name='pic' type="file" onChange={handleImageChange} /> : null}
                
                { imgPreviewUrl ? <img src={imgPreviewUrl}/> : null}
            </div>
        )
    }
}

export default ImageForm