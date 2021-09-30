import React from "react";

const ImageList =(props)=> {
    
    
    //destructing props.images.map((images)) to -> (({description, id, urls})) which === images.description images.id etc
    const images = props.images.map(({description, id, urls})=>{
        console.log(props.images[0].id)
        
        return <img alt={description }key={id} src={urls.regular}/>
    })

    return <div>{images}</div>
   
}

export default ImageList