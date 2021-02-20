
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './modules/details/Details';
import Home from "./modules/Home/Home";
import Cart from "./modules/Cart/Cart";
import List from "./modules/list/List";
import SearchResult from "./modules/SearchResult/SearchResult";
import Payment from "./modules/Payment/Payment";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Navbar/>
          <Switch>
              <Route exact path="/">
                <Banner/>
              </Route>
            </Switch>
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/details/:id" render={({match})=>(
                  <Details
                      productId={match.params.id}
                  />
              )}>
              </Route>
              <Route path="/list/">
                <List/>
              </Route>
              <Route path="/search/">
                <SearchResult/>
              </Route>
              <Route path="/cart/">
                <Cart/>
              </Route>
              <Route path="/payment">
                <Payment/>
              </Route>
            </Switch>
          </div>

          <Footer/>
        </div>
    </Router>
   
  );
}

export default App;
