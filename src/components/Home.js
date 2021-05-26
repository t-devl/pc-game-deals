import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [title, setTitle] = useState("");
  const [games, setGames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  };

  return (
    <div className="home" onSubmit={handleSubmit}>
      <form className="home__form form">
        <div className="form__title">
          <label className="form__label">Title</label>
          <input
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <button className="form__button">Search Games</button>
      </form>
      <div className="home__games-container">
        {games.map((game) => (
          <div className="home__game game" key={game.gameID}>
            <div className="game__cover">
              <img className="game__image" src={game.thumb} alt=""></img>
            </div>
            <div className="game__details">
              <h2 className="game__title">{game.external}</h2>
              <Link className="game__view-deals" to={`/deals/${game.gameID}`}>
                View Deals
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
