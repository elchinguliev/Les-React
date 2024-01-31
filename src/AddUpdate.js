import React, { useState } from 'react'

export default function AddUpdate() {

    const [products,setProducts]=useState(products);
    const [Name,setName]=useState("");
    const [Index,setIndex]=useState("");
    const [Price,setPrice]=useState("");
    const [Description,setDescription]=useState("");
    const [Image,setImage]=useState("");
  return (
    <div>
        <form onSubmit={handleSubmit}></form>
        <div>
            <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}></input>
            <input type='number' value={Price} onChange={(e)=>setPrice(e.target.value)}></input>
            <input type='text' value={Description} onChange={(e)=>setDescription(e.target.value)}></input>
            <input type='text' value={Description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button>Add product</button>
        </div>
    </div>
  )
}
