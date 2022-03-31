import "./App.css";
import GamesListContainer from "./components/Pages/GamesList/GamesListContainer";
import { compose } from "redux";

import { Route, HashRouter, withRouter, Routes, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { getProduct, requestGames } from "./redux/shop/shop-reducer";
import store from "./redux/redux-store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Pages/Product/Product";
import ProductContainer from "./components/Pages/Product/ProductContainer";
import { useState } from "react";

function App(props) {
  const [productId, setProductId] = useState('1')
  console.log(props.product);
  return (
    
    <div className="App">
      <Header />
      <div>{props.product}</div>
      <Routes>
        <Route path={"/product/"+props.product} element={<ProductContainer/>}/>
        <Route path="/" exact element={<GamesListContainer />}/>
          
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.shop.initialized,
  product: state.shop.product,
});

let AppContainer = compose(connect(mapStateToProps, { requestGames }))(App);

export const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
