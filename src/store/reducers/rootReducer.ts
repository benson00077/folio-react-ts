import { languageReducer } from "./portfolioReducer";
import { combineReducers } from "redux";
import { positionReducer } from "./positionReducer";

const rootReducer = combineReducers({
  portfolio: languageReducer,
  position: positionReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;