import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // { id, name, price, quantity }
    status: 'idle',
    error: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartItemAdded(state, action) {
            const index = state.items.findIndex(({ cartItemId }) => cartItemId === action.payload.cartItemId);
            if (index !== -1) {
                state.items[index].quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        cartItemRemoved(state, action) {
            state.items = state.items.filter(item => item.cartItemId !== action.payload);
        },
        cartItemQuantityAdjusted(state, action) {
            const index = state.items.findIndex(({ cartItemId }) => cartItemId === action.payload.cartItemId);
            if (index !== -1) {
                state.items[index].quantity = parseInt(action.payload.quantity);
            }
        }
    }
});

export const { cartItemAdded, cartItemRemoved, cartItemQuantityAdjusted } = cartSlice.actions;

export default cartSlice.reducer;

export const selectAllCartItems = state => state.cart.items;

export const selectTotalPrice = (state) => {
    let totalPrice = 0;
    for (let i = 0; i < state.cart.items.length; i++) {
        totalPrice += (state.cart.items[i].price * state.cart.items[i].quantity);
    }
    return totalPrice;
};