import React, { useState } from 'react'
import Productcard from './Productcard'

function ProductList({products}) {
    const [categ, setcateg] = useState("pc");
    const [addProduct, setaddProduct] = useState([]);
  
  return (
<>
    <div className='filter'>
   <button onClick={()=>setcateg("pc")}>Pc</button>
   <button onClick={()=>setcateg("tablette")}>Tablette</button>
   <button onClick={()=>setcateg("tel")}>Tel</button>
    </div>
   { categ==="pc"?<div className='products'>
      {products.filter((el)=>el.categ==="pc").map((el)=><Productcard addProduct={addProduct} setaddProduct={setaddProduct} key={el.id} el={el}/>)}
    </div>:
    categ==="tablette"?<div className='products'>
      {products.filter((el)=>el.categ==="tablette").map((el)=><Productcard addProduct={addProduct} setaddProduct={setaddProduct} key={el.id} el={el}/>)}
    </div>:<div className='products'>
      {products.filter((el)=>el.categ==="tel").map((el)=><Productcard addProduct={addProduct} setaddProduct={setaddProduct} key={el.id} el={el}/>)}
    </div>
    
    }
    </>
  )
}

export default ProductList

