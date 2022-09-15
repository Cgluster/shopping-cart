import React from "react";

export default function Inventory() {
    return (
    <div className='product-line'>
        <div className='product-buy'>
        <p>Product 1 Description here</p>
        {/* add image here */}
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p>Product 2 Description here</p>
        {/* add image here */}
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p>Product 3 Description here</p>
        {/* add image here */}
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p>Product 4 Description here</p>
        {/* add image here */}
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p>Product 5 Description here</p>
        {/* add image here */}
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
    </div>
    );
}