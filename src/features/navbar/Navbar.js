import React from "react";

export default function Navbar() {
    return (
        <div className="title-header">
            <div className="container">
                <h1 className="left-side">Shopping Cart</h1>

                <ul className="right-side">
                    <li><a href="Cart">Cart</a></li>
                    <li><a href="/">Shop</a></li>
                </ul>
            </div>
        </div>
    );
}