import React from 'react';
import './Image-List.css';  
import ImageCard from './imageCard';

const ImageList=props =>
{
  const images_list=  props.images.map((image)=>
    {
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="image-List">{images_list}</div>
}

export default ImageList;