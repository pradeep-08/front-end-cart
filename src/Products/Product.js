 import React from "react";
 import "./Products.css"



 function Product({result}) {
  return <>
  <section className="card-container">
 {result}
  </section>
  
  </>
  
}
export default Product;