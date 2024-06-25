// Header.js
import React from "react";
import PokedexIcono from "../assets/images/pokedex.png";

const Header = (props) => {
  return (
    <div class="flex place-items-center justify-center gap-5">
      <img src={PokedexIcono} alt="Pokedex icono" class="w-24" />
      <h1 class="text-6xl font-bold text-center my-2 pixelated">{props.title}</h1>
    </div>
  );
}

export default Header;
