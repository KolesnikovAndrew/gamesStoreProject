import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import RegStagesController from "./RegStagesController";
import { getUserData } from "../../redux/registration/registration-reducer";

export const RegStagesControllerContainer = (props) => {
  return (
    <div>
      <RegStagesController
        userData={props.userData}
        buyAllFromCart={props.buyAllFromCart}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    userData: getUserData(state),
  };
};

export default compose(connect(mapStateToProps, { getUserData }))(
  RegStagesControllerContainer
);
