import { combineReducers } from "redux";
import cardsContainerReducer from "./cardContainerReducer";

const rootReducer = combineReducers({
  cardsContainerReducer,
});

export default rootReducer;
