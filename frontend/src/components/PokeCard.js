import React from "react";
import { Card } from "../util/styles";
import { xbutton } from "../util/styles";
import { useDispatch } from "react-redux";
import { removePokemon } from "../store/actions/cardContainerActions";

export default function PokeCard({ name }) {
  const dispatch = useDispatch();
  function removeFromCards() {
    dispatch(removePokemon(name));
  }
  return (
    <Card>
      <xbutton
        style={{ cursor: "pointer", position: "relative", left: "47%" }}
        onClick={removeFromCards}
      >
        X
      </xbutton>
      <div className="poketextarea">
        <pokename> {name}</pokename>
      </div>
    </Card>
  );
}
