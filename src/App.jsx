import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from "./components/Header";
import CardList from './components/CardList';
import { FilterBar } from './components/FilterBar';

function App() {
    const [filterActive, setFilterActive] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleCheckboxChange = (type) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.includes(type)
                ? prevFilters.filter((filter) => filter !== type)
                : [...prevFilters, type]
        );
    };

    const handleSearchClick = () => {
        setSearchTerm(searchInput);
    };

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const closeFilterBar = () => {
        setFilterActive(false);
    };

    return (
        <div className="flex flex-col items-center self-center m-auto bg-stone-800 text-white min-h-screen">
            <div className="bg-stone-900 w-full py-3 mb-5">
                <Header title="Pokedex" />
            </div>
            <div className="utilities-bar w-full px-5 sm:px-20 lg:px-40 grid grid-cols-2 sm:grid-cols-2 gap-4 mb-5">
                <div className="filter-button-bar flex gap-2 place-self-start justify-items-center items-center cursor-pointer" onClick={() => setFilterActive(!filterActive)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    <h1 className="font-bold pixelated text-xl">Filter</h1>
                </div>
                <div className="search flex gap-2 place-self-end justify-items-center items-center">
                    <input className="search-text px-2 py-1 rounded text-black" type="text" placeholder="Search by Id or Name" value={searchInput} onChange={handleInputChange} />
                    <svg className="search-btn cursor-pointer" onClick={handleSearchClick} type="submit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            <FilterBar active={filterActive} handleCheckboxChange={handleCheckboxChange} closeFilterBar={closeFilterBar} />
            <div className="px-5 sm:px-20 lg:px-40 w-full py-10">
                <CardList selectedFilters={selectedFilters} searchTerm={searchTerm} />
            </div>
        </div>
    );
}

export default App;
