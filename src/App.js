import Header from "./Components/Header";
import List from "./Components/List";
import { movies } from "./data";
import { useState } from "react";

function App()  {
  const [films, setFilms] = useState(movies);
  const [caracter, setcaracter] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <Header setcaracter={setcaracter} setRate={setRate} />
      <List films={films} caracter={caracter} rate={rate} />
    </div>
  );
}

export default App;
