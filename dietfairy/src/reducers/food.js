import types from "../types";

const initialState = {
  food: {},
  nextFood: {},
  prevFood: {},
  showFoodInfo: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DRINK:
      return { ...state, food: action.payload };
    case types.UPDATE_NEXT_DRINK:
      return { ...state, nextFood: action.payload };
    case types.UPDATE_PREV_DRINK:
      return { ...state, prevFood: action.payload };
    case types.SHOW_DRINK_INFO:
      return { ...state, showFoodInfo: true };
    case types.HIDE_DRINK_INFO:
      return { ...state, showFoodInfo: false };
    default:
      return state;
  }
};
