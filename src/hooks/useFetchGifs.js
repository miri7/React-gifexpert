import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (categoria) => {
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);

    
  const gitImages = async () => {
    const newImages = await getGifs(categoria);
    setImages(newImages);
    setIsloading(false);
  };

  useEffect(() => {
    gitImages();
  }, []);
  
  return {
    images,
    isloading
  }
}

export default useFetchGifs
