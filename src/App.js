import "./App.css";
import GamesListContainer from "./components/Pages/GamesList/GamesListContainer";
import { compose } from "redux";

import { Route, HashRouter, withRouter, Routes, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { setProduct,getProduct, requestGames, requestGame } from "./redux/shop/shop-reducer";
import store from "./redux/redux-store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Pages/Product/Product";
import ProductContainer from "./components/Pages/Product/ProductContainer";
import { useEffect, useState } from "react";
import CartContainer from "./components/Pages/Cart/CartContainer";


function App(props) { 
  const [count, setCount] = useState(props.product)
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/product/"+count} element={<ProductContainer count={count}/>}/>
        <Route path={"/cart"} element={<CartContainer/>}/>

        <Route path="/" exact element={<GamesListContainer  setCount={setCount}/>}/>
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
