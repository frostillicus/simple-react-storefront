const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let newCart = state.map(item => ({ id: item.id, quantity: item.quantity }));
      if (newCart.filter(item => item.id === action.id).length > 0) {
        newCart.forEach(item => {
          if (item.id === action.id) {
            item.quantity++;
          }
        })
      } else {
        newCart = [...state, { id: action.id, quantity: 1 }]
      }
      return newCart
    case 'INCREMENT_ITEM':
      const incCart = state.map(item => {
        const quantity = item.id === action.id ? item.quantity + 1 : item.quantity;
        return {
          ...item,
          quantity
        }
      });
      return incCart
    case 'DECREMENT_ITEM':
      const decCart = state.map(item => {
        const quantity = item.id === action.id ? item.quantity - 1 : item.quantity;
        return {
          ...item,
          quantity: quantity < 0 ? 0 : quantity
        }
      });
      return decCart
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.id)
    default:
      return state;
  }
}



export { cartReducer };