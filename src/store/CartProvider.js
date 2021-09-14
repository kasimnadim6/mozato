import CartContext from './cart-context';

const CartProvider = ({ children }) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const initialValue = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
