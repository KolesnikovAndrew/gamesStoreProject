import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import {
  getGames,
  getProduct,
} from "../../../redux/shop/shop-reducer";
import Goldmine from "./Goldmine";
export const GoldmineContainer =()=> {
  

    return (
      <div>
        <Goldmine/>
      </div>
    );
  
}

let mapDispatchToProps =()=>{
  
}

let mapStateToProps = (state) => {
  return {
    games: getGames(state),
    product: getProduct(state),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(GoldmineContainer);
