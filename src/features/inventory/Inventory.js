import React from "react";
import { listOfProducts } from "./listOfProducts";

export default function Inventory() {
    const sampleProducts = listOfProducts;

    return sampleProducts && sampleProducts.length > 0 &&
    sampleProducts.map(product =>
    <div className='product-line'>
        <div className='product-buy' key={product.id}>
        <span className="product-desc">{product.name}</span>
        <span className="price-tag">{product.price}</span>
        <img src={product.img} alt={product.name} height="120px" className="product-image" />
        <button type='button' className='btn-buy'>Add to Cart</button>
        </div>
    </div>
    );
}