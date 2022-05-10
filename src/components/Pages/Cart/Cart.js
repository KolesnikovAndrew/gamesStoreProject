import React, { useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Popup from "../../Popup/Popup";
import CartPanel from "./CartPanel/CartPanel";
import styles from "./Cart.module.scss";
import Gold from "../../../assets/Gold.png";

export const Cart = ({ cart, removeEntry, clearCart, balance, takePoints }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupText, setPopupText] = useState("Popup text");
  const [popupIcon, setPopupIcon] = useState(
    <BiError style={{ color: "red" }} />
  );

  const sumPrices = () => {
    switch (true) {
      case cart.length > 1:
        let result = cart.reduce((total, item) => item.price + total, 0);
        return result;
      case cart.length === 1:
        return cart[0].price;
      case cart.length < 1:
        return 0;
    }
  };

  const totalCost = sumPrices();

  const buyAllFromCart = () => {
    if (balance >= totalCost) {
      setPopupText("Products successfully purchased!");
      setPopupIcon(<AiOutlineCheckCircle style={{ color: "green" }} />);
      setButtonPopup(true);
      takePoints(totalCost);
      clearCart();
    } else if (balance < totalCost) {
      setPopupText("You don't have enough tokens to buy these products!");
      setButtonPopup(true);
    } else {
      setPopupText("Unexpected error");
      setButtonPopup(true);
    }
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <div className={styles.cartPanel}>
          {cart.length ? (
            cart.map((game, id) => {
              return (
                <CartPanel
                  title={game.title}
                  thumbnail={game.thumbnail}
                  price={game.price}
                  platforms={game.platforms}
                  id={id}
                  removeEntry={removeEntry}
                />
              );
            })
          ) : (
            <p className={styles.emptyCarText}>Your cart is empty!</p>
          )}
        </div>
        <div className={styles.totalCostAndBuy}>
          <div className={styles.totalCost}>
            <span>
              Total cost: {totalCost}
              <img src={Gold} alt="goldCoin" width="24px" height="24px"></img>
            </span>
          </div>
          <>
            <button className={styles.buyButton} onClick={buyAllFromCart}>
              BUY ALL
            </button>
          </>
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setButtonPopup={setButtonPopup}
        popupIcon={popupIcon}
      >
        {popupText}
      </Popup>
    </div>
  );
};

export default Cart;
