import React from "react";
import {Image} from 'react-bootstrap';

export default function Imagecomponent({record}) {
    if(record===null){
        throw new Error('Image Not Found')
    }
  return (
      <Image fluid rounded className="cast-image" src={"https://image.tmdb.org/t/p/w500"+record}/>
  )
}
