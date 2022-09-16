import React from "react";
import { listOfProducts } from "./listOfProducts";

export default function Inventory() {
    return (
    <div className='product-line'>
        <div className='product-buy'>
        <p className="product-desc">A bag of Red Delicious Apples</p>
        <img src={ require('./photos/apples.jpg')} alt="Apple" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p className="product-desc">A stack of 5 bananas</p>
        <img src={ require('./photos/bananas.jpg')} alt="Bananas" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p className="product-desc">A box of 1/lb cherries</p>
        <img src={ require('./photos/cherries.jpg')} alt="Cherries" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p className="product-desc">A box of 1/lb strawberries</p>
        <img src={ require('./photos/strawberries.jpg')} alt="Strawberries" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
  
        <div className='product-buy'>
        <p className="product-desc">2/lb watermelon</p>
        <img src={ require('./photos/watermelon.jpg')} alt="Watermelon" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>

        <div className='product-buy'>
        <p className="product-desc">A bag of 5/lb oranges</p>
        <img src={ require('./photos/oranges.jpg')} alt="Oranges" className="product-image"
        height="120px" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
    </div>
    );
}