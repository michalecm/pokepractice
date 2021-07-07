import { GENERATE_CARDS } from "../util/types";

const INITIAL_STATE = {
  cards: [],
};

const cardsContainerReducer = (state = INITIAL_STATE, action) => {
  if (action === undefined) {
    console.log("we are checking for udnefined action");
    return state;
  }
  const { type, payload } = action;
  switch (type) {
    case GENERATE_CARDS:
      return {
        ...state,
        cards: payload,
      };
    default:
      return state;
  }
};

export default cardsContainerReducer;
