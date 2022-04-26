import React, { useState } from "react";

import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";
import Searchbar from "../../Searchbar/Searchbar";
import GamesCarousel from "../../utils/Carousel/Carousel";
import styles from "./GameList.module.scss";

export const GameList = ({
  games,
  setCount,
  setProduct,
  product,
  addEntry,
}) => {
  //Pagination
  const [currentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentGames = games;

  const paginate = () => {
    setProductsPerPage(productsPerPage + 12);
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
    <div>
      <div className={styles.carouselContainer}>
        <GamesCarousel />
      </div>

      <Searchbar
        setFIlterGenre={setFIlterGenre}
        setFilterText={setFilterText}
      />
      <div className={styles.gamelist}>
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
              price={g.price}
              addEntry={addEntry}
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
