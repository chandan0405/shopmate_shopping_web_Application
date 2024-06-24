const initialState = {
    carts: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case "ADD_ITEM":
        const item = state.carts.find((cartItem) => cartItem.id === action.payload.id);
        if (item) {
          return {
            ...state,
            carts: state.carts.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          };
        }
        return {
          ...state,
          carts: [...state.carts, { ...action.payload, quantity: 1 }],
        };

      case "DELETE_ITEM":
        return {
          ...state,
          carts: state.carts.filter((cartItem) => cartItem.id !== action.payload.id),
        };

      case "INCREASE_QUANTITY":
        return {
          ...state,
          carts: state.carts.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      case "DECREASE_QUANTITY":
        return {
          ...state,
          carts: state.carts.map((cartItem) =>
            cartItem.id === action.payload.id && cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  