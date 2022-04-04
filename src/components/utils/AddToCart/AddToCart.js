import React from 'react'

export const AddToCart = ({price, title, platform, thumbnail, addEntry}) => {
  const onAddToCart =()=>{
    let gameData = [title, thumbnail, parseFloat(price), platform]
    addEntry(gameData)
  }
  return (
    <div>
      <button onClick={onAddToCart}>
        Add to cart
      </button>
    </div>
  )
}

export default AddToCart