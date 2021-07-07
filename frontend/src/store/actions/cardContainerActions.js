import { GENERATE_CARDS } from "../util/types";
import { BACKEND_URL } from "../util/links";
import axios from "axios";

export const generateCards = () => async (dispatch) => {
  let pokeData = await axios(BACKEND_URL);
  pokeData = pokeData.data;
  dispatch({ type: GENERATE_CARDS, payload: pokeData });
};
