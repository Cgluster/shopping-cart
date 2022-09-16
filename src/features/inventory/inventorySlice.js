import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({...action.payload, quantity: 1 });
            }
        },
    },
});

export const inventoryReducer = inventorySlice.reducer;
export const { addToCart } = inventorySlice.actions;