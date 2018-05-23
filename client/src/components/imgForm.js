import React, { Component } from 'react'

class ImageForm extends Component {

    state = {
        file: null,
        imgPreviewUrl: null
    }
    
    handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    render(){
        return(
            <div className='img-form-container'>
                { !this.state.imagePreviewUrl ?  <input className='inputfile' name='pic' type="file" onChange={this.handleImageChange} /> : null}
                
                { this.state.imagePreviewUrl ? <img src={this.state.imagePreviewUrl}/> : null}
            </div>
        )
    }
}

export default ImageForm