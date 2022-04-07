import React, { useState } from "react";
import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";
import { setProduct } from "../../../redux/shop/shop-reducer";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";



export const GameList = ({ games, setCount, setProduct, product  }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentGames = games;

  const paginate = () => {
    setProductsPerPage(productsPerPage + 15);
  };

  //Fix infinite pages
  let pagesCount = Math.ceil(games.length / productsPerPage);
  let separationSize = 10;
  let separationCount = pagesCount / separationSize;
  const [filterData, setFilterData] = useState('')
  
  const checkFilter=(game)=>{
    if(filterData !='') {
      if(game.title.toLowerCase().indexOf(filterData.toLowerCase()) > -1) {
        return(game.title)
      } else {
        return 0
      }
    } else {
      return games
    }
    
  }

  const [searchParam] = useState(["title"]);
  return (
    
    <div>
      <Searchbar setFilterData={setFilterData}/>
      <div>
      {games.filter(checkFilter).slice(indexOfFirstProduct, indexOfLastProduct).map((g) => (
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
