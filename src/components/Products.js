import React from 'react'
import ProductList from './ProductList'
import YouTube from "react-youtube";
function Products({products}) {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    }
  };
  return (
    <div>
    <YouTube videoId="5xhq8-_4Tdc" opts={videoOptions}  />
    <ProductList products={products}/>
      
    </div>
  )
}


export default Products
