import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import types from "../types";

export const useSearchQuery = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.searchQuery);

  return {
    searchQuery,
    setSearchQuery: payload =>
      dispatch({ type: types.UPDATE_SEARCH_QUERY, payload }),
    resetSearchQuery: () => dispatch({ type: types.RESET_SEARCH_QUERY }),
    handleChange: e =>
      dispatch({ type: types.UPDATE_SEARCH_QUERY, payload: e.target.value })
  };
};

export const useEatingsList = () => {
  const dispatch = useDispatch();
  const { eatings, loading } = useSelector(state => state.eatings);

  return {
    eatings,
    loading,
    setEatings: payload =>
      dispatch({ type: types.UPDATE_COCKTAILS, payload }),
    clearEatings: () => dispatch({ type: types.CLEAR_COCKTAILS }),
    toggleLoadingOn: () => dispatch({ type: types.TOGGLE_LOADING_ON }),
    toggleLoadingOff: () => dispatch({ type: types.TOGGLE_LOADING_OFF })
  };
};

export const useSidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector(state => state.sidebar);

  return {
    showSidebar,
    handleSidebar: e => dispatch({ type: types.TOGGLE_SIDEBAR })
  };
};

export const useFoodInfo = () => {
  const dispatch = useDispatch();
  const { food, nextFood, prevFood, showFoodInfo } = useSelector(
    state => state.food
  );

  return {
    food,
    nextFood,
    prevFood,
    showFoodInfo,
    setFood: payload => dispatch({ type: types.UPDATE_DRINK, payload }),
    setNextFood: payload =>
      dispatch({ type: types.UPDATE_NEXT_DRINK, payload }),
    setPrevFood: payload =>
      dispatch({ type: types.UPDATE_PREV_DRINK, payload }),
    toggleFoodInfoOn: () => dispatch({ type: types.SHOW_DRINK_INFO }),
    toggleFoodInfoOff: () => dispatch({ type: types.HIDE_DRINK_INFO })
  };
};

export const useModal = () => {
  const dispatch = useDispatch();
  const { isModalShowing } = useSelector(state => state.modal);

  return {
    isModalShowing,
    showModal: () => dispatch({ type: types.SHOW_MODAL }),
    hideModal: () => dispatch({ type: types.HIDE_MODAL })
  };
};

export const useDictionary = letters => {
  return letters.reduce((acc, letter) => {
    acc[letter] = useRef(letter);
    return acc;
  }, {});
};
