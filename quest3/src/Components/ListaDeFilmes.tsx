import React from "react";

interface ListaDeFilmesProps {
    filtro: string;
    setFiltro: (filtro: string) => void;
}

function ListaDeFilmes({ filtro, setFiltro }: ListaDeFilmesProps) {
    return (
        <div>
            <h1>Lista de Filmes</h1>
            <input
                type="text"
                placeholder="Pesquisar por nome"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
        </div>
    );
}

export default ListaDeFilmes;