import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard';

const ImageList =(props)=> {
    
    
    //destructing props.images.map((images)) to -> (({description, id, urls})) which === images.description images.id etc
    const images = props.images.map((image)=>{
        
        console.log(props)
        return <ImageCard key={image.id} image={image}/>
    })

    return <div className="image-list">{images}</div>
   
}

export default ImageList