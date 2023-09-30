
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Policy from "./Pages/Policy"
import Cart from "./Pages/Cart";
import Addcart from "./Pages/Addcart"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <CartProvider>
            <Addcart/>
            </CartProvider>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/policy">
            <Policy />
          </Route>
          <Route exact path="/product">
          <CartProvider>
             <Addcart/>
          </CartProvider>   
          </Route>
          <Route path="/addkart">
            <CartProvider>
              <Cart />
            </CartProvider>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
