import React from 'react'
import { useSelector } from 'react-redux';

export const Product = (props) => {
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
   </div>
  )
}

export default Product