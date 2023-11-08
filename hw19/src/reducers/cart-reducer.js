const CartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD":
      return [...cart, action.item];
    case "DELETE":
      return cart.filter(item => item.id !== action.itemId);
  }
};

export default CartReducer;
