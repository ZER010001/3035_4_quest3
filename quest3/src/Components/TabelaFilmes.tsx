import React, { useState } from "react";
import Filme from "./Filmes";

interface TabelaDeFilmesProps {
    filmesFiltrados: Filme[];
}

function TabelaDeFilmes({ filmesFiltrados }: TabelaDeFilmesProps) {
    const [selecionado, setSelecionado] = useState<string | null>(null);

    const handleCheckboxChange = (filme: Filme) => {
        setSelecionado(filme.nome);

        // Rever Mensagem e a funcionalidade
        window.alert(`Filme selecionado: ${filme.nome}`);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Imagem</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {filmesFiltrados.map((filme) => (
                        <tr key={filme.id}>
                            <td>{filme.nome}</td>
                            <td>{filme.genero}</td>
                            <td>
                                <img
                                    src={filme.imagem}
                                    alt={filme.nome}
                                    style={{ maxWidth: "100px" }}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(filme)}                                                                                                                                                                                                                                                                                                                                            ///   CURIOSO!!!   ///
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selecionado && (
                <div>
                    Filme selecionado: {selecionado}
                </div>
            )}
        </div>
    );
}

export default TabelaDeFilmes;