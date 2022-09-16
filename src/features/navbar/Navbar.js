import React from "react";

export default function Navbar() {
    return (
        <div className="title-header">
            <div className="container">
                <h1>Shopping Cart</h1>

                <ul className="right">
                    <li><a href="/">Shop</a></li>
                    <li><a href="cart">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}