import "./App.css";

import { compose } from "redux";
import { Route, HashRouter, Routes } from "react-router-dom";
import { Provider, connect } from "react-redux";

import GamesListContainer from "./components/Pages/GamesList/GamesListContainer";
import { requestGames } from "./redux/shop/shop-reducer";
import store from "./redux/redux-store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductContainer from "./components/Pages/Product/ProductContainer";
import CartContainer from "./components/Pages/Cart/CartContainer";
import GoldmineContainer from "./components/Pages/Goldmine/GoldmineContainer";

function App({ balance }) {
  const id = window.location.hash.split("/")[2];

  return (
    <div className="App">
      <Header balance={balance} />
      <Routes>
        <Route path={"/product/" + id} element={<ProductContainer id={id} />} />
        <Route path={"/cart"} element={<CartContainer />} />
        <Route path={"/goldmine"} element={<GoldmineContainer />} />
        <Route path="/" exact element={<GamesListContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.shop.initialized,
  product: state.shop.product,
  balance: state.balance.balance,
});

let AppContainer = compose(connect(mapStateToProps, { requestGames }))(App);

export const MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
