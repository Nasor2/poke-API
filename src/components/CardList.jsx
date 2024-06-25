import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = ({ selectedFilters, searchTerm }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            try {
                let allPokemons = [];
                let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=10000`;
                const limit = 2000;

                while (nextUrl && allPokemons.length < limit) {
                    const response = await fetch(nextUrl);
                    const data = await response.json();
                    const fetches = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
                    const results = await Promise.all(fetches);

                    allPokemons = [...allPokemons, ...results].slice(0, limit);//Limita la cantidad de pokemos

                    nextUrl = data.next;
                }

                //filtra los pokemon que tienen una imagen no nula
                const validPokemons = allPokemons.filter(pokemon =>
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites.front_default ||
                    pokemon.sprites.other['dream_world'].front_default
                );

                setPokemons(validPokemons);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPokemons();
    }, []);

    const filteredPokemons = pokemons.filter(pokemon => {
        const matchesFilters = selectedFilters.length === 0 || pokemon.types.some(type => selectedFilters.includes(type.type.name));
        const matchesSearchTerm = searchTerm === '' || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id.toString() === searchTerm;
        return matchesFilters && matchesSearchTerm;
    });


    if (loading) {
        return <div className="text-center">Cargando...</div>;
    }

    return (
        <div className="self-center">
            <div className="grid grid-cols-3 gap-8">
                {filteredPokemons.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} index={index} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
