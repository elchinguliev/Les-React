import React from 'react'

export default function Product({productInfo}) {
  return (
    <div style={{
        width: "50%",
        margin: "10px",
        height:"50%",
      color:"white",
        textAlign: "center",
        border: "2px solid gray",
        display: "inline-block",
        background: "deepskyblue",
        borderRadius: "10px",
    }}>
       <div style={{
            display:"flex"
            
            }}>
            <h2
                style={{
                marginLeft: "10px",
                marginBottom: "30px",
                }}
            >
                Name : {productInfo.Name}
                <br></br>
                Description : {productInfo.Description}
                <br></br>
                Price : {productInfo.Price}
                <br></br>
                <img src={productInfo.Image} style={{width:"300px"}}></img>

          </h2>
          
                

        </div>
    </div>
  )
}
