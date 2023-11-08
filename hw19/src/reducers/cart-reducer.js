const CartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD":
      if (!cart.find(item => item.id === action.item.id)) return [...cart, action.item];
      return cart;
    case "DELETE":
      return cart.filter(item => item.id !== action.itemId);
    default:
      return cart;
  }
};

export default CartReducer;
