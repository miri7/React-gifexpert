export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W1s4D4HBbEWPE5a1YrvcuKr1MfQggvMQ&q=${categoria}&limit=10`;
    const resp =  await fetch(url);
    const {data} =  await resp.json();

   const gif = data.map(img=>({
    id:img.id,
    title:img.title,
    url:img.images.downsized_medium.url
   }))
  
return gif;

  }