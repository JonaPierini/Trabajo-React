
import { BrowserRouter, Switch, Route } from "react-router-dom";


import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailConteiner";
import Cart from './components/Cart'
import FormCart from "./components/FormCart";
import './App.css'

//El ContextProvider lo traigo para que rodee a toda la aplicación
import CartContextProvider from './store/CartContext';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className = "App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar exact path ="/"></NavBar>
            <Switch>
              <Route exact path ="/">
                  <ItemList></ItemList>
              </Route>
              <Route path = "/categoria/:id">
                    <ItemList></ItemList>
              </Route>
              <Route path = "/item/:id">
                  <ItemDetailContainer></ItemDetailContainer>
              </Route>
              <Route path = "/cart">
                  <Cart></Cart>
              </Route>
              <Route path = "/compra">
                  <FormCart></FormCart>
              </Route>
            </Switch>
           <Footer></Footer>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}
