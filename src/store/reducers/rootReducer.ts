import { languageReducer } from "./portfolioReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  portfolio: languageReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;