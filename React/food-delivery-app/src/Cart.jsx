import React from "react";

function Cart({cart}) {
    return (
        <div style={{
            padding:"20px"
        }}>
            <h1>Your Cart</h1>

            <h2>Total Item : {cart} </h2>
        </div>
    )
}

export default Cart