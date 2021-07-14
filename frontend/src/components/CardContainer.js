import { React, useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { useSelector, useDispatch } from "react-redux";
import { generateCards } from "../store/actions/cardContainerActions";
import { CardsContainer } from "../util/styles";

export default function CardContainer() {
  const cards = useSelector((state) => state.cardsContainerReducer.cards);
  console.log(cards + " " + typeof cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generateCards());
  }, [dispatch]);
  const pokecards = cards.map((card, i) => <PokeCard key={i} name={card} />);
  return <CardsContainer>{pokecards}</CardsContainer>;
}
