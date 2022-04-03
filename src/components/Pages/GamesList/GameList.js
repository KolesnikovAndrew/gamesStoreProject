import React, { useState } from "react";
import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";
import { setProduct } from "../../../redux/shop/shop-reducer";
import { NavLink } from "react-router-dom";



export const GameList = ({ games, setCount, setProduct, product  }) => {


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
          <NavLink to={'/product/'+g.id}>
          <Game
            key={g.id}
            title={g.title}
            thumbnail={g.thumbnail}
            description={g.short_description}
            genre={g.genre}
            platform={g.platform}
            id={g.id}
            setCount={setCount}
            setProduct={setProduct}
            product={product}
          />
          </NavLink>
      
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
