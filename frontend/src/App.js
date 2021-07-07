import React from "react";
import CardContainer from "./components/CardContainer";

function App() {
  // const cards = useSelector(state => state.)
  // console.log(ca=> state.rds);
  // console.log(typeof cards);
  // console.log(Array.isArray(cards));
  // useEffect(() => {
  //dispatchbackend call
  //useselector to receive data from redux
  // axios("http://localhost:3001/facts").then((data) => {
  //   console.log(data);
  //   setCards(data.data);
  // });
  // }, []);

  // const pokecards = cards.map((card) => <PokeCard name={card} />);
  return (
    <div className="App">
      <CardContainer></CardContainer>
      {/* <CardsContainer>{pokecards}</CardsContainer> */}
    </div>
  );
}

export default App;
