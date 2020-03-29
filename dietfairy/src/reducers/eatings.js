import types from "../types";

const initialState = {
  eatings: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_COCKTAILS:
      return { ...state, eatings: action.payload };
    case types.CLEAR_COCKTAILS:
      return { ...state, eatings: [] };
    case types.TOGGLE_LOADING_ON:
      return { ...state, loading: true };
    case types.TOGGLE_LOADING_OFF:
      return { ...state, loading: false };
    default:
      return state;
  }
};
