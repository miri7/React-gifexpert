import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


const GifGrid = ({ categoria }) => {
  const {images, isloading} = useFetchGifs(categoria);
  return (
    <>
      <h3>{categoria}</h3>
       <div className="card-grid">
          {isloading && <p>cargando ...</p>}
          {images.map((image) => (
          
        
             <GifItem key={image.id}
              {...image}
             />
           
          ))
          }
      

       </div>
      
    </>
  );
};

export default GifGrid;
