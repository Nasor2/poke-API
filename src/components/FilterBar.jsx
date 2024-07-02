import React from 'react';

export const FilterBar = ({ active, handleCheckboxChange, closeFilterBar }) => {
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
        <div className={`fixed left-0 top-0 h-full w-64 bg-stone-700 transition-transform transform ${active ? 'translate-x-0' : '-translate-x-full'} z-50`}>
            <div className='p-4'>
                <div className="flex justify-between items-center mb-4">
                    <span className='block font-bold text-3xl text-white'>Type</span>
                    <button onClick={closeFilterBar} className="text-white text-xl">✖</button>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    {types.map((type) => (
                        <div className='group-type' key={type.name}>
                            <input className="mr-2 size-4" type='checkbox' onChange={() => handleCheckboxChange(type.name)} name={type.name} id={type.name} />
                            <label className="pixelated text-white" htmlFor={type.name}>{type.label}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
