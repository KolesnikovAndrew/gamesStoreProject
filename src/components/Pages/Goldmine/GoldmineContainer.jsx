import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import {
  getGames,
  getProduct,
} from "../../../redux/shop/shop-reducer";
import Goldmine from "./Goldmine";
import { addPoints } from "../../../redux/balance/balance-reducer";
export class GoldmineContainer extends React.Component {
  
  render() {
     return (
      <div>
        <Goldmine addPoints={this.props.addPoints}/>
      </div>
    );
  }
   
  
}



let mapStateToProps = (state) => {
  return {
    
  };
};

export default compose(
  connect(mapStateToProps, {addPoints})
)(GoldmineContainer);
