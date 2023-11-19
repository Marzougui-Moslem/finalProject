import React from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css';

function Details({products}) {
    const params=useParams();
 

    const produit=products.filter((el)=>el.id==params.id)[0];


  return (
    <div className='details'>
      <div className='box'>
        <img className='image' src={produit.url}/>
        <div className='im'>
            <img src={produit.images[0]}/>
            <img  src={produit.images[1]}/>
            <img  src={produit.images[2]}/>
            <img  src={produit.images[3]}/>
        </div>
      </div>
      <div className='box2'>
           <p>
            {produit.desc}
           </p>
      </div>
    </div>
  )
}

export default Details
