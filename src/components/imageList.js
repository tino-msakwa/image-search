import React from 'react';


const ImageList = props => {
    const images = props.image.map(pic => {
        return <img src={pic.urls.regular} />
        });
    return <div>{images}</div>
}

export default ImageList;