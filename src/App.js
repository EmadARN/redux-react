import React from "react";
import { Provider } from "react-redux";
import MilkContainer from "./components/MilkContainer";
import store from "./redux/store";
import UserLists from "./components/UserLists";
import CakeContainer from "./components/CakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "50px",
        }}
      >
        <CakeContainer />
        <MilkContainer />
      </div>
      <hr />
      <div style={{ paddingTop: "20px" }}>
        <h2>Users:</h2>
        <UserLists />
      </div>
    </Provider>
  );
};

export default App;
