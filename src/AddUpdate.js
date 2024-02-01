import React, { useState } from 'react'
// import {products} from  './App.js';

import products from './App'


export default function AddUpdate() {


    const [prods,setProducts]=useState(products);
    const [Name,setName]=useState("");
    const [Index,setIndex]=useState("");
    const [Price,setPrice]=useState("");
    const [Description,setDescription]=useState("");
    const [Image,setImage]=useState("");



    function handleSubmit(e) {
      e.preventDefault();
      const newAddedProduct = {
        Index:prods.length+1,
        Name: Name,
        Price: Price,
        Description: Description,
        Image: Image,
      };
      setProducts([...prods, newAddedProduct]);
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
      alert("Product Added Successfully");
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <br></br>
        <div className="form-group">
        <h1 style={{fontSize:"15px"}}>Name : </h1>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
        <h1 style={{fontSize:"15px"}}>Price : </h1>
          <input type="number" value={Price} onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
        <h1 style={{fontSize:"15px"}}>Image link : </h1>
          <input type="text" value={Image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="form-group">
          <h1 style={{fontSize:"15px"}}>Description : </h1>
          <textarea value={Description} onChange={(e) => setDescription(e.target.value)} name="description"/>
        </div>
        <button type="submit">
          <b>Add Product</b>
        </button>
        <br></br>
        <br></br>
      </form>

     
    </div>
  );
}
