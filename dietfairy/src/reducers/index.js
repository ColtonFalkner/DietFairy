import { combineReducers } from "redux";
import sidebar from "./sidebar";
import eatings from "./eatings";
import searchQuery from "./searchQuery";
import food from "./food";
import modal from "./modal";

export default combineReducers({
  sidebar,
  eatings,
  searchQuery,
  food,
  modal
});
