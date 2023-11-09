const CartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD":
      if (!cart.find(item => item.id === action.item.id)) return [...cart, action.item];
      return cart;
    case "DELETE":
      return cart.filter(item => item.id !== action.itemId);
    case "INCR_QTY":
      return cart.map(item => (item.id === action.itemId ? { ...item, qty: item.qty + 1 } : item));
    case "DECR_QTY":
      return cart.map(item => (item.id === action.itemId ? { ...item, qty: item.qty - 1 } : item));
    default:
      return cart;
  }
};

export default CartReducer;
