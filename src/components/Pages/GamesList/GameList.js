import React, { useState } from "react";
import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";

export const GameList = ({ games }, props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = games.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = () => {
    setProductsPerPage(productsPerPage + 15);
  };

  //Fix infinite pages
  let pagesCount = Math.ceil(games.length / productsPerPage);
  let separationSize = 10;
  let separationCount = pagesCount / separationSize;

  return (
    <div>
      {currentProducts.map((g) => (
        
        <div>
          <Game
            key={g.id}
            title={g.title}
            thumbnail={g.thumbnail}
            description={g.short_description}
            genre={g.genre}
            platform={g.platform}
            id={g.id}
            setProductId={props.setProductId}
          />
        </div>
      ))}
      <Paginator
        productsPerPage={productsPerPage}
        totalProducts={games.length}
        paginate={paginate}
      />
    </div>
  );
};

export default GameList;
