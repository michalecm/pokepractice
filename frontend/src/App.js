import React from "react";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import AddPokemonScreen from "./components/AddPokemonScreen";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  /* add router functionality */
  /* add update functionality to pokecards */
  /* make data persist to database after first API call */
  /* start retrieving data from database instead of API after its persisted */
  /* keep an open connection for r/w */
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
    <Router>
      <div className="App">
        <Nav />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/addpokemon" component={AddPokemonScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
//apply more business logic (dispaly more info, create more pokemon, delete, store, etc)
//add new endpoints on backend, new actions, more communication with backend with thunk
