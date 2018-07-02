import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {"Wanna know where your face is? Detect it!"}
            </p>
            <div className="center form">
                <input 
                    className="f6 f5-l bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                    placeholder="Paste a URL of an image with a face" 
                    type="text" 
                    onChange={onInputChange} 
                    name="" 
                    id="" />
                <input 
                    className="f6 f5-l fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                    type="submit" 
                    value="Detect" 
                    onClick={onSubmit} />
            </div>
        </div>
    );
}

export default ImageLinkForm;