import React, { useState } from "react";

import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";
import Searchbar from "../../Searchbar/Searchbar";
import GamesCarousel from "../../utils/Carousel/Carousel";
import styles from "./GameList.module.scss";

export const GameList = ({ games, setCount, setProduct, product }) => {
  //Pagination
  const [currentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentGames = games;

  const paginate = () => {
    setProductsPerPage(productsPerPage + 15);
  };

  //Filter games
  const [filterText, setFilterText] = useState("");
  const [filterGenre, setFIlterGenre] = useState("");

  const filteredGames = games
    .filter((game) => game.title.toLowerCase().match(filterText.toLowerCase()))
    .filter((game) =>
      game.genre.toLowerCase().match(filterGenre.toLowerCase())
    );

  return (
    <div className={styles.gamelist}>
      <div className={styles.carouselContainer}>
        <GamesCarousel />
      </div>

      <Searchbar
        setFIlterGenre={setFIlterGenre}
        setFilterText={setFilterText}
      />
      <div>
        {filteredGames
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((g) => (
            <Game
              key={g.id}
              title={g.title}
              thumbnail={g.thumbnail}
              description={g.short_description}
              genre={g.genre}
              platform={g.platform}
              id={g.id}
              setProduct={setProduct}
              setCount={setCount}
              product={product}
              price={g.price}
            />
          ))}
      </div>
      <Paginator
        productsPerPage={productsPerPage}
        totalProducts={games.length}
        paginate={paginate}
      />
    </div>
  );
};

export default GameList;
