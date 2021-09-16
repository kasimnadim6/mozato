import { useReducer } from 'react';
import CartContext from './cart-context';

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let updatedItems;
      const existingItemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case 'REMOVE_ITEM':
      let updatedItemsArr;
      const existingItemInd = state.items.findIndex(
        (i) => i.id === action.payload
      );
      const existingItem = state.items[existingItemInd];
      if (existingItem.amount === 1) {
        updatedItemsArr = state.items.filter((i) => i.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItemsArr = [...state.items];
        updatedItemsArr[existingItemInd] = updatedItem;
      }
      return {
        ...state,
        items: updatedItemsArr,
        totalAmount: state.totalAmount - existingItem.price,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
  };

  const cartContextValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
