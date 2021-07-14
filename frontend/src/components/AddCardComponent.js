import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_POKEMON } from "../util/types";

export default function AddCardComponent() {
  const [name, setName] = useState("newpoke");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    //dispatch add pokemon
    dispatch({ type: ADD_POKEMON, payload: name });
    //reset text to empty
    setName("newpoke");
  }

  function addPoke(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={addPoke} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
}
