import React, { useEffect, useState } from "react";
import Paginator from "../../utils/Paginator/Paginator";
import Game from "./Game/Game";
import { setProduct } from "../../../redux/shop/shop-reducer";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import GamesCarousel from "../../utils/Carousel/Carousel";
import styles from "./GameList.module.scss"
import {carouselBackground} from "../../../assets/carouselBackground.png"

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
  const [filterText, setFilterText] = useState('')
  const [filterGenre, setFIlterGenre] = useState('')

  const checkTextFilter=(game)=>{
    if(filterText !='') {
      if(game.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1) {
          return(game.title)
        } else {
          return 0
        }
    } else {
      return games
    } 
  }
  const checkGenreFilter=(game)=>{
    
    if(filterGenre !='') {
      if(game.genre.toLowerCase().indexOf(filterGenre.toLowerCase()) > -1) {
          return(game.title)
        } else {
          return 0
        }
    } else {
      return games
    } 
  }


  return (
    
    <div>
      <div className={styles.carouselContainer} >
        <GamesCarousel/>
      </div>
      
      <Searchbar setFIlterGenre={setFIlterGenre} setFilterText={setFilterText}/>
      <div>
      {games.filter(checkTextFilter).filter(checkGenreFilter).slice(indexOfFirstProduct, indexOfLastProduct).map((g) => (
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
