// Header.js
import React from "react";
import PokedexIcono from "../assets/images/pokedex.png";

const Header = (props) => {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-5 p-4">
            <div className="flex items-center gap-5">
                <img src={PokedexIcono} alt="Pokedex icono" className="w-16 sm:w-24" />
                <h1 className="text-3xl sm:text-6xl font-bold text-center my-2 pixelated">{props.title}</h1>
            </div>
        </div>
    );
}

export default Header;
