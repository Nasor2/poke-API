import React from 'react';

export const FilterBar = ({ active, handleCheckboxChange }) => {
    const types = [
        { name: 'grass', label: 'Grass' },
        { name: 'fire', label: 'Fire' },
        { name: 'bug', label: 'Bug' },
        { name: 'fairy', label: 'Fairy' },
        { name: 'dragon', label: 'Dragon' },
        { name: 'shadow', label: 'Shadow' },
        { name: 'ground', label: 'Ground' },
        { name: 'normal', label: 'Normal' },
        { name: 'psychic', label: 'Psychic' },
        { name: 'steel', label: 'Steel' },
        { name: 'dark', label: 'Dark' },
        { name: 'electric', label: 'Electric' },
        { name: 'fighting', label: 'Fighting' },
        { name: 'flying', label: 'Flying' },
        { name: 'ice', label: 'Ice' },
        { name: 'poison', label: 'Poison' },
        { name: 'rock', label: 'Rock' },
        { name: 'water', label: 'Water' },
    ];

    return (
        <div class={`fixed left-0 top-0 h-full w-64 bg-stone-700 transition-transform transform ${active ? 'translate-x-0' : '-translate-x-full'}`}>
            <div class='p-4'>
                <span class='block font-bold mb-7 text-3xl'>Type</span>
                <div class='grid grid-cols-1 gap-4'>
                    {types.map((type) => (
                        <div class='group-type' key={type.name}>
                            <input class="mr-2 size-4"type='checkbox' onChange={() => handleCheckboxChange(type.name)} name={type.name} id={type.name} />
                            <label class="pixelated" htmlFor={type.name}>{type.label}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
