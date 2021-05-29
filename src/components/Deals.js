import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Deals(props) {
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => setGameInfo(data));
  }, []);

  if (gameInfo) {
    return (
      <div className="deals-container">
        <Link className="home-link" to="/">
          Home
        </Link>
        <div className="chosen-game">
          <div className="chosen-game__cover">
            <img
              className="chosen-game__image"
              src={gameInfo.info.thumb}
              alt=""
            ></img>
          </div>
          <div className="chosen-game__details">
            <h2 className="chosen-game__title">{gameInfo.info.title}</h2>
            <p className="chosen-game__cheapest-price">
              Cheapest Ever: ${gameInfo.cheapestPriceEver.price}
            </p>
            <p className="chosen-game__retail-price">
              Retail: ${gameInfo.deals[0].retailPrice}
            </p>
          </div>
        </div>
        <div className="deals">
          {gameInfo.deals.map((deal, index) => (
            <div className="deals__deal deal" key={index}>
              <img
                className="deal__seller-logo"
                src={`https://www.cheapshark.com/img/stores/logos/${
                  deal.storeID - 1
                }.png`}
                alt=""
              ></img>
              <p className="deal__price">${deal.price}</p>
              <a
                className="deal__get-deal"
                href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                target="_blank"
              >
                Get Deal
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="deals-container"></div>;
  }
}
