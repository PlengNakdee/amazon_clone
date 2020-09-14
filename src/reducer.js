// data layer logic
export const initialState = {
  basket: [],
  user: null,
};
// increment all price in basket and return
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); // original amount is 0 and add all prices

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // clone basket
      let newBasket = [...state.basket];
      // find index of item that === id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // slice that item out
      if ((index) => 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket, // set basket to newBasket with item sliced out
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
