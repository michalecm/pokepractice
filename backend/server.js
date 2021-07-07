const express = require("express");
const functions = require("./util/functions");
const fetch = require("node-fetch"); //axios
const app = express();
const cors = require("cors");
const NUM_POKEMON = 1118;
const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

app.use(cors());

app.get("/", (req, res) => {
  res.end("poops");
});

app.get("/facts", (req, res) => {
  const idsGeneration = (length) =>
    [...new Array(length)].map(() => functions.getRandomNum(NUM_POKEMON));
  resourceIDs = idsGeneration(5);
  console.log(resourceIDs);
  const pokemon = [];
  const resourcePromises = resourceIDs
    .map((id) => API_URL + `${id}`)
    .map((res) => fetch(res));
  Promise.all(resourcePromises)
    .then((responses) => {
      //Promise.all([...]).then(resps => resps.map(resp => resp.json())).then(dataArray => { ... })
      return Promise.all(
        responses.map((resp) => {
          if (resp.ok) return resp.json();
          else {
            return {
              body: "",
            };
          }
        })
      );
    })
    .then(
      //response is an array of json
      (responses) => {
        console.log(responses);
        res.json(
          //   JSON.stringify(
          responses.map((res) => res.name).filter((ite) => ite != null)
          // )
        );
      }
      // async (responses) =>
      //   await Promise.all(responses).then((responsesTwo) => {
      //     return responsesTwo.map((resp) => console.log(resp));
      //   })
    )
    // .then((responsesThree) => console.log(responsesThree))
    // .then(console.log(pokemon))
    .catch((err) => console.log(err));

  //   responses.forEach(async (element) => {
  //     if (element.ok) {
  //       let body = await element.json();
  //       console.log(body.name);
  //       pokemon.push(body.name);
  //     }
  //   });

  // async function getPokemon(req, res) {
  //   await Promise.all(
  //     resourceIDs.array.forEach((element) => {
  //       const poke = await fetch();
  //       pokemon.push(poke);
  //     })
  //   );

  //   res.send(pokemon);
  // }

  // getPokemon();
  // async function get Pokemon (req, res){
  //   Const pokemons=[]
  //   AwaitPromise.all(resourcesid.foreach(async
  //   (Id)=>{
  //   Const pokemon=await fetch (url + Id)
  //   Pokemons.push(pokemon)
  //   }
  //   Res.send(Pokemons)
  //   }
  //   let resData;
  //   for (x = 0; x < 4; x++) {
  //     let resourceID = functions.getRandomNum(NUM_POKEMON);
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${resourceID}`)
  //       .then(async (data) => {
  //         if (data.ok) {
  //           resData = await data.json();
  //           console.log(resData.name);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         pokemon.push(resData);
  //       });
  //   }
  //   res.setHeader("content-type", "text/plain");
  //   res.send(JSON.stringify(pokemon));
  //   console.log("Sent");
});

const port = 3001;
app.listen(port, () => {
  console.log(`backend is running on ${port}`);
});
