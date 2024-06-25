import React, { useState, useEffect } from "react";

const Card = ({ pokemon, index }) => {
    const [abilityDescriptions, setAbilityDescriptions] = useState({});

    useEffect(() => {
        const fetchAbilityDescriptions = async () => {
            const descriptions = {};
            for (const ability of pokemon.abilities) {
                if (!descriptions[ability.ability.name]) {
                    try {
                        const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability.ability.name}`);
                        const data = await response.json();
                        let description = data.effect_entries.find(entry => entry.language.name === 'en')?.short_effect;
                        
                        if (!description) {
                            description = data.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'Description no available';
                        }
                        
                        descriptions[ability.ability.name] = description;
                    } catch (error) {
                        console.error(`Error fetching description for ${ability.ability.name}:`, error);
                        descriptions[ability.ability.name] = 'Description no available';
                    }
                }
            }
            setAbilityDescriptions(descriptions);
        };

        fetchAbilityDescriptions();
    }, [pokemon]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const getColorClassByType = (type) => {
        switch (type) {
            case "fire": return "bg-red-500";
            case "water": return "bg-blue-500";
            case "grass": return "bg-green-500";
            case "electric": return "bg-yellow-500";
            case "ice": return "bg-blue-200";
            case "fighting": return "bg-red-700";
            case "poison": return "bg-purple-500";
            case "ground": return "bg-yellow-700";
            case "flying": return "bg-blue-300";
            case "psychic": return "bg-pink-500";
            case "bug": return "bg-green-700";
            case "rock": return "bg-yellow-600";
            case "ghost": return "bg-purple-700";
            case "dragon": return "bg-purple-800";
            case "dark": return "bg-gray-800";
            case "steel": return "bg-gray-500";
            case "fairy": return "bg-pink-300";
            default: return "bg-gray-400"; 
        }
    };

    const cardColorClass = getColorClassByType(pokemon.types[0].type.name);

    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    if (!imageUrl) {
        return null; // No render if no valid image is available
    }

    return (
        <div className={`max-w-sm mx-auto rounded-lg shadow-2xl transform transition-all hover:scale-105 border-8 border-gray-400 ${cardColorClass} border-opacity-70`}>
            <div className=" h-full p-4 bg-white bg-opacity-65 rounded-lg backdrop-filter backdrop-blur-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="pixelated text-xl font-bold text-gray-900">{capitalizeFirstLetter(pokemon.name)}</h2>
                    <h2 className="pixelated text-5x font-bold text-gray-900">Power {pokemon.stats[0].base_stat}</h2>
                </div>
                <img className="w-full object-cover rounded-lg mb-4 border-4 border-gray-400 backdrop-blur-lg " src={imageUrl} alt={pokemon.name} />
                <div className="flex justify-center mb-4">
                    {pokemon.types.map((type, index) => (
                        <span key={index} className={`pixelated px-2 py-1 mx-1 rounded-full text-sm font-medium text-white ${getColorClassByType(type.type.name)}`}>
                            {capitalizeFirstLetter(type.type.name)}
                        </span>
                    ))}
                </div>
                <ul className="space-y-4">
                    {pokemon.abilities.slice(0, 2).map((ability, abilityIndex) => (
                        <li key={abilityIndex} className="pixelated flex flex-col items-center text-center">
                            <strong className="pixelated text-lg text-gray-900">{capitalizeFirstLetter(ability.ability.name)}</strong>
                            <span className="pixelated text-sm text-gray-700">{abilityDescriptions[ability.ability.name] || 'Loading Description...'}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
