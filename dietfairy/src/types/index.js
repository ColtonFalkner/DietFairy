import * as eatings from "./eatings";
import * as food from "./food";
import * as modal from "./modal";
import * as searchQuery from "./searchQuery";
import * as sidebar from "./sidebar";

export default {
  ...eatings,
  ...food,
  ...searchQuery,
  ...sidebar,
  ...modal
};
