import { ADD_POKEMON, DELETE_CARD, GENERATE_CARDS } from "../../util/types";

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
        cards: [...state.cards, ...payload].sort(),
      };
    case ADD_POKEMON:
      return {
        ...state,
        cards: [...state.cards, payload].sort(),
      };
    case DELETE_CARD: {
      return {
        ...state,
        cards: [...state.cards.filter((card) => card !== payload)],
      };
    }
    default:
      return state;
  }
};

export default cardsContainerReducer;
