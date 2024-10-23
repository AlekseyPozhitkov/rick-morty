import React from "react";
import Header from "./components/Header";
import logo from "../../public/Rick&Morty.svg";
import Sort from "./components/Sort";
import Cards from "./components/Cards";

const Characters = () => {
  return (
    <div className="characters">
      <Header />
      <img className="image_hero" src={logo} alt="title-Rick&Morty" />
      <Sort />
      <Cards />
    </div>
  );
};

export default Characters;
