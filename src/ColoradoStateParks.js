import React from "react";
import howManyParks from "./parks/howManyParks";
// import { trees, wildlife, elevation } from "./parks/{ trees, wildlife, elevation }"
function ColoradoStateParks() {
  const numberOfParks = howManyParks();


  return (
  <div>
  <h1>Colorado State Parks!</h1>
  <p>{numberOfParks}</p>
    </div>
  );
}

export default ColoradoStateParks
