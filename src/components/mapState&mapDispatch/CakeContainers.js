import React from "react";
import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

const CakeContainers = (props) => {
  return (
    <div>
      <h2>number of cake - {props.numOfCakes}</h2>
      <button onClick={props.buycake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    buycake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(CakeContainers);
