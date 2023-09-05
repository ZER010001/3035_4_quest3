import React, { useState } from "react";
import data from "./Components/data.json";
import TabelaDeFilmes from "./Components/TabelaFilmes";
import ListaDeFilmes from "./Components/ListaDeFilmes";

const filmesData = data;

function App() {
  const [filtro, setFiltro] = useState("");
  const filmesFiltrados = filmesData.filter((filme) =>
    filme.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="App">
      <ListaDeFilmes filtro={filtro} setFiltro={setFiltro} />
      <TabelaDeFilmes filmesFiltrados={filmesFiltrados} />
    </div>
  );
}

export default App;