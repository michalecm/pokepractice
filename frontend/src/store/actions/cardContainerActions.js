import { GENERATE_CARDS, ADD_POKEMON, DELETE_CARD } from "../../util/types";
import { BACKEND_URL } from "../../util/links";
import axios from "axios";

export const addPokemon = (text) => {
  return {
    type: ADD_POKEMON,
    payload: text,
  };
};

export const removePokemon = (name) => {
  return {
    type: DELETE_CARD,
    payload: name,
  };
};

export const generateCards = () => async (dispatch) => {
  let pokeData = await axios(BACKEND_URL);
  pokeData = pokeData.data;
  dispatch({ type: GENERATE_CARDS, payload: pokeData });
};
