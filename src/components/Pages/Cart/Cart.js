import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";

import Popup from "../../Popup/Popup";
import CartPanel from "./CartPanel/CartPanel";
import styles from "./Cart.module.scss";
import Gold from "../../../assets/Gold.png";
import RegistrationModal from "../../RegStages/RegChoise";
import RegContact from "../../RegStages/RegContact";
import RegStagesController from "../../RegStages/RegStagesController";

export const Cart = ({
  cart,
  removeEntry,
  clearCart,
  balance,
  takePoints,
  userData,
}) => {
  const [regChoiceTrigger, setRegChoiceTrigger] = useState(false);
  const [popupText, setPopupText] = useState("Popup text");
  const [popupIcon, setPopupIcon] = useState(
    <BiError style={{ color: "red" }} />
  );
  const [isAuth, setAuth] = useState(false);
  const [buyWithoutReg, setBuyWithoutReg] = useState(false);

  //Sum all added to cart product's prices
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

  //Popup that shows that transaction was successful or it failed
  const buyAllFromCart = () => {
    setPopupIcon(<BiError style={{ color: "red" }} />);
    if (totalCost === 0 && cart.length === 0) {
      setPopupText("Your cart is empty!");
    } else if (balance >= totalCost) {
      setPopupText("Products successfully purchased!");
      setPopupIcon(<AiOutlineCheckCircle style={{ color: "green" }} />);
      takePoints(totalCost);
      clearCart();
    } else if (balance < totalCost) {
      setPopupText("You don't have enough tokens to buy these products!");
    } else {
      setPopupText("Unexpected error");
    }
    setRegChoiceTrigger(true);
  };
  //Registration modal

  const drawRegistrationModal = () => {
    setPopupText(
      <RegStagesController
        setBuyWithoutReg={setBuyWithoutReg}
        buyAllFromCart={buyAllFromCart}
        setRegChoiceTrigger={setRegChoiceTrigger}
        setPopupText={setPopupText}
        userData={userData}
        setAuth={setAuth}
      />
    );
    setPopupIcon(<BsQuestionSquare style={{ color: "rgb(0, 153, 255)" }} />);
    setRegChoiceTrigger(true);
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
            <button
              className={styles.buyButton}
              onClick={
                isAuth || buyWithoutReg ? buyAllFromCart : drawRegistrationModal
              }
            >
              BUY ALL
            </button>
          </>
        </div>
      </div>
      <Popup
        trigger={regChoiceTrigger}
        setButtonPopup={setRegChoiceTrigger}
        popupIcon={popupIcon}
      >
        {popupText}
      </Popup>
    </div>
  );
};

export default Cart;
