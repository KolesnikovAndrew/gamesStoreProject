import React from 'react'
import { useSelector } from 'react-redux';
import AddToCart from '../../utils/AddToCart/AddToCart';

export const Product = (props) => {
  let price = (Math.random()*100).toFixed(2)
  let selectedGame = []
  const games = useSelector(state => state.shop.games)
  for(let i=0;i < games.length; i++) {
    if(games[i].id == props.count) {
      selectedGame = games[i];
      
    };
  }
  
  return (
  <div>
    <h1>{selectedGame.title}</h1>
    <img src={selectedGame.thumbnail}></img>
    <h1>{selectedGame.title}</h1>
    <p >{selectedGame.description}</p>
    <p>Genres: {selectedGame.genre}</p>
    <p>{selectedGame.platform == 'PC (Windows)'? 'Windows': 'Platforms'}</p>
    <p>{price}</p>
    {<AddToCart price={price} title={selectedGame.title} platform={selectedGame.platform} thumbnail={selectedGame.thumbnail} addEntry={props.addEntry}/>}
  </div>
  )
}

export default Product