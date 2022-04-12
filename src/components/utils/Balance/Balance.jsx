import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getBalance } from "../../../redux/balance/balance-reducer";

export class Balance extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        {this.props.balance}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    balance: getBalance(state)
  };
};


export default compose(
  connect(mapStateToProps)
)(Balance);
