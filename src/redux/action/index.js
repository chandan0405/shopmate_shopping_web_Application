
export const AddItem = (item) => {
    return {
      type: "ADD_ITEM",
      payload: item,
    };
  };
  
  export const DeleteItem = (item) => {
    return {
      type: "DELETE_ITEM",
      payload: item,
    };
  };
  
  export const IncreaseQuantity = (item) => {
    return {
      type: "INCREASE_QUANTITY",
      payload: item,
    };
  };
  
  export const DecreaseQuantity = (item) => {
    return {
      type: "DECREASE_QUANTITY",
      payload: item,
    };
  };
  
  