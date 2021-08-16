//elementos para usar REACT.ROUTER-DOM
import { BrowserRouter, Switch, Route } from "react-router-dom";

//mis componentes
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailConteiner";
import Cart from './components/Cart'
import FormCart from "./components/FormCart";
import './App.css'
//importo mi ContextProvider para rodear toda mi app y que pueda usar su info en los componentes encerrados dentro
import CartContextProvider from './store/CartContext';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    /* //CONTEXT */
    <div className = "App">
        <CartContextProvider>
          {/* //ROUTER */}
          <BrowserRouter>
            <NavBar exact path ="/"></NavBar>
            <Switch>
              <Route exact path="/" component={ItemList} />
              <Route path="/categoria/:id" component={ItemList} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
              <Route path="/compra" component={FormCart} />
            </Switch>
           <Footer></Footer>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}
