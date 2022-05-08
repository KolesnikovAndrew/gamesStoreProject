import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

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

export default compose(
  connect(null, {addPoints})
)(GoldmineContainer);
