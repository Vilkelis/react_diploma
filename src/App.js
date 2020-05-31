import React from 'react'; 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import CatalogPage from './components/CatalogPage';
import InfoPage from './components/InfoPage';
import GoodPage from './components/GoodPage';
import BasketPage from './components/BasketPage';
import NoPage from './components/NoPage';


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <Switch>            
            <Route exact path="/" component={MainPage} />
            <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/catalog/:id" component={GoodPage} />
            <Route exact path="/basket" component={BasketPage} />
            <Route exact path="/info" component={InfoPage} />
            <Route component={NoPage} />
          </Switch>      
        </Router>
      </div>
    </div>
  );
}

export default App;
