import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MyState {
  itemList: {
    id: number;
    quantity: number;
    price: number;
    totalPrice: number;
    name: string;
    cover: string;
  }[];
  totalQuantity: number;
}

const initialState: MyState = {
  itemList: [],
  totalQuantity: 0,
};

const cartSliceReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
        price: number;
        name: string;
        cover: string;
      }>
    ) {
      const { id, quantity, price, cover, name } = action.payload;

      //check item is already exits
      const exitsItem = state.itemList.find((item) => item.id === id);

      if (exitsItem) {
        exitsItem.quantity += quantity;
        exitsItem.totalPrice = price;
      } else {
        state.itemList.push({
          id: id,
          price: price,
          quantity: 1,
          totalPrice: price,
          name: name,
          cover: cover,
        });
        state.totalQuantity += quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const removedItem = state.itemList.find((item) => item.id === id);

      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
        state.itemList = state.itemList.filter((item) => item.id !== id);
      }
    },
    updateItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number; price: number }>
    ) => {
      const { id, quantity, price } = action.payload;

      const updatedItem = state.itemList.find((item) => item.id === id);

      if (updatedItem) {
        state.totalQuantity -= updatedItem.quantity;
        updatedItem.quantity = quantity;
        updatedItem.price = price;
        state.totalQuantity += quantity;
      }
    },
  },
});

export const cartActions = cartSliceReducer.actions;
export default cartSliceReducer.reducer;
