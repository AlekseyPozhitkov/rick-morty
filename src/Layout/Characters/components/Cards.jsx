import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then((res) => {
      setCards(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <div className="cards">
      {cards.map((card) => (
        <MediaCard name={card.name} species={card.species} key={card.name} image={card.image} />
      ))}
    </div>
  );
};

export default Cards;
